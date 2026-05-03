import { expect, test } from '@playwright/test';

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
