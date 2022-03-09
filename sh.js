const puppeteer = require('puppeteer');
async function run() {
let browser = await puppeteer.launch({ headless: false });
let page = await browser.newPage();
await page.goto('https://www.scrapehero.com/');
await page.screenshot({ path: './imgs/image.jpg', type: 'jpeg' });
await page.close();
await browser.close();
}
run();