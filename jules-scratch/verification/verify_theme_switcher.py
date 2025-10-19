from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:5173/dashboard")

    # Open the theme switcher
    page.locator('div.relative > button').click()

    # Wait for the dialog to appear
    page.wait_for_selector('role=dialog', timeout=60000)

    # Switch to light mode
    page.get_by_text("🌞").click()

    # Select the 'Nord Light' theme
    page.get_by_text("Nord Light").click()

    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
