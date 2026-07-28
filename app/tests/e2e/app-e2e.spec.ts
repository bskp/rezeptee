import { expect, test } from '@playwright/test';

// Seit der Umstellung auf rspack gibt es kein eager .less-Loading mehr: fällt
// der Import in client/main.tsx weg, baut und startet die App weiterhin
// klaglos -- nur eben ohne Stylesheet. Der Rest der Suite würde das nicht
// bemerken, weil nichts sonst auf berechnete Styles schaut.
test('stylesheets reach the browser', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#sidebar')).toBeVisible();

  const theme = await page.evaluate(() => ({
    background: getComputedStyle(document.body).backgroundColor,
    fontFamily: getComputedStyle(document.body).fontFamily,
    fontFaces: [...document.styleSheets].reduce((n, sheet) => {
      try {
        return n + [...sheet.cssRules].filter(r => r instanceof CSSFontFaceRule).length;
      } catch {
        return n; // cross-origin Stylesheet, hier nicht zu erwarten
      }
    }, 0),
  }));

  // Aus rezepte.less: @brand (#9D643C), via explizitem Import gebündelt.
  expect(theme.background).toBe('rgb(157, 100, 60)');
  expect(theme.fontFamily).toContain('double_pica');
  // Aus fonts.css, das Meteor weiterhin selbst einzieht.
  expect(theme.fontFaces).toBeGreaterThan(0);
});

test('meteor boots and core navigation works', async ({ page }) => {
  const marker = Date.now();
  const lineage = `e2e-test-${marker}`;
  const recipeTitle = `E2E Recipe ${marker}`;

  await page.goto('/');
  await expect(page.locator('#sidebar')).toBeVisible();

  const recipeSlug = await page.evaluate(async ({ recipeTitle, marker, lineage }) => {
    const meteor = (window as any).Meteor;
    if (!meteor?.call) {
      throw new Error('Meteor client API is unavailable in browser context.');
    }

    const markdown = `${recipeTitle}\n================\n\nE2E marker: ${marker}\n`;

    return await new Promise<string>((resolve, reject) => {
      meteor.call('saveRezept', { markdown, _lineage: lineage }, (error: any, newSlug: string) => {
        if (error) {
          reject(error.reason ?? error.message ?? String(error));
          return;
        }
        resolve(newSlug);
      });
    });
  }, { recipeTitle, marker, lineage });

  try {
    await page.goto('/changes');
    await expect(page.getByRole('heading', { name: /bersicht/i })).toBeVisible();

    const recipeLink = page.locator('#content').getByRole('link', { name: recipeTitle });
    await expect(recipeLink).toBeVisible();
    await recipeLink.click();

    await expect(page).toHaveURL(new RegExp(`/${recipeSlug}(?:\\?|$)`));
    await expect(page.getByRole('heading', { name: recipeTitle })).toBeVisible();
    await expect(page.locator('text=Rezept nicht gefunden.')).toHaveCount(0);
  } finally {
    await page.evaluate(async ({ lineage }) => {
      const meteor = (window as any).Meteor;
      if (!meteor?.call) {
        return;
      }

      await new Promise<void>((resolve, reject) => {
        meteor.call('saveRezept', { markdown: '', _lineage: lineage }, (error: any) => {
          if (error) {
            reject(error.reason ?? error.message ?? String(error));
            return;
          }
          resolve();
        });
      });
    }, { lineage });
  }
});
