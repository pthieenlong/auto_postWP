import puppeteer from "puppeteer";
import { login } from "./login.js";
import { open } from "./openPage.js";
import { logout } from "./logout.js";
async function getSomethingOnPage(page) {
    await page.goto('https://google.com');
    await page.type('textarea', 'NVidia');
    await page.keyboard.press('Enter');

    await page.waitForNavigation();
    const data = await page.evaluate(() => {
        return { title: document.title, url: window.location.href };
    })
    console.log(data);

}

async function main() {
    const browser = await puppeteer.launch({ headless: false, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'});
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);

    await open(page, 'https://longblog7.wordpress.com/wp-login.php');

    await login(page, 'pthienlong.testingcase@gmail.com', '*7rENPUgsY3U*E9r5Us%^c9sCMhqT')
    // await getSomethingOnPage(page);
    await logout(page)
    // await browser.close();
}
main();
