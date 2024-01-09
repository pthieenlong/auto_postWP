export async function login(page, username, password) {
    //https://longblog7.wordpress.com/wp-login.php
    const usernameQuery = '#usernameOrEmail.form-text-input'
    const passwordQuery = 'input#password.form-text-input'
    await page.type(usernameQuery, username);
    await page.keyboard.press('Enter');

    await page.waitForTimeout(2000);
    // await page.waitForSelector('#password.form-text-input').then(() => {
    //     page.evaluate(() => {
    //         console.log(document.querySelector('#password.form-text-input'));
    //     })
    // });

    await page.type(passwordQuery, password);

    await page.keyboard.press('Enter');

    await page.waitForNavigation();
    console.log('login');
}