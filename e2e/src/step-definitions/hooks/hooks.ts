import { BeforeAll, Before, AfterAll, After } from '@cucumber/cucumber';
const { chromium } = require('playwright');

BeforeAll(async () => {
console.log('test')
  global.browser = await chromium.launch({
    headless: false,
  });
});

afterAll(async () => {
  await global.browser.close();
});

Before(async () => {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async () => {
  await global.page.close();
});
