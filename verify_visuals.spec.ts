import { test, expect } from '@playwright/test';

test('verify landing page visual quality', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Wait for animations
  await page.waitForTimeout(2000);

  // Screenshot Hero
  await page.screenshot({ path: 'hero.png' });

  // Scroll and screenshot sections
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'services.png' });

  await page.evaluate(() => window.scrollTo(0, 3000));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'communication.png' });

  await page.evaluate(() => window.scrollTo(0, 5000));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'data.png' });

  await page.evaluate(() => document.body.scrollIntoView(false));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'footer.png' });
});
