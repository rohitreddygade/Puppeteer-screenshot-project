const puppeteer = require('puppeteer');
async function run() {
const browserFetcher = puppeteer.createBrowserFetcher();
const revisionInfo = await browserFetcher.download('533271');
let browser = await puppeteer.launch({ headless: false });
let page = await browser.newPage();
await page.goto('https://www.google.com');
await page.screenshot({ path: './imgs/image.jpg', type: 'jpeg' });
await page.close();
await browser.close();
}
run();