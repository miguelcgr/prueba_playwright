const playwright = require("playwright");

(async () => {
  const browser = await playwright["chromium"].launch({
    headless: false,
    slowMo: 50,
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://web.gencat.cat/ca/inici");

  page.click("text = Agenda cultural");

  const [popup] = await Promise.all([page.waitForEvent("popup")]);

  await popup.waitForLoadState();

  popup.click("#cerca-button");
})();
