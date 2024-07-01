// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [
    ['html'],
    ['junit', { outputFile: 'test-results/junit-results.xml' }]
  ],
  projects: [
    {
      name: 'chromium',
      use: { 
        browserName: 'chromium',
        channel: 'chrome',  // ใช้ Chrome ที่ติดตั้งในระบบ
      },
    },
  ],
  use: {
    launchOptions: {
      executablePath: process.env.CHROME_BIN || null,  // ใช้ Chrome ที่ติดตั้งในระบบ (ถ้ามี)
    },
  },
});
