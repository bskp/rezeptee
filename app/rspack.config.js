const { defineConfig } = require("@meteorjs/rspack");

module.exports = defineConfig(() => ({
  module: {
    rules: [
      // Meteors klassischer Bundler lud .less eager; rspack kennt das nicht.
      // Jede Datei wird darum explizit aus client/main.tsx importiert.
      { test: /\.less$/, use: [{ loader: "less-loader" }], type: "css/auto" },
    ],
  },
}));
