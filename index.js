const chromium = require("playwright").chromium;
(async function() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://books.toscrape.com/");
  await page.screenshot({ path: 'screenshot.png' });
  console.log(page.url());
  await page.close();
  await context.close();
  await browser.close();
})();