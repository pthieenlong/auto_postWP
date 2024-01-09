export async function open(page, url) {
    await page.goto(url);
}