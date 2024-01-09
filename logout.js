export async function logout(page) {
    await page.goto('https://wordpress.com/me');
    await page.click('button.button.sidebar__me-signout-button.is-compact')
    await page.waitForNavigation();
}