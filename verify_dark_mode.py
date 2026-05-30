import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        # Navigate to the preview URL
        await page.goto('http://localhost:4176/')

        # Wait for some time to allow animations to settle
        await asyncio.sleep(5)

        # Take a screenshot of the hero section
        await page.screenshot(path='verification_hero_dark.png')

        # Scroll down and take a full page screenshot
        await page.screenshot(path='verification_full_dark.png', full_page=True)

        await browser.close()

if __name__ == '__main__':
    asyncio.run(main())
