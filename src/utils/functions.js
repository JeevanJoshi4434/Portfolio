const puppeteer = require('puppeteer');
const captureScreenshot = async (url,name) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to your project webpage
  await page.goto(`${url}`);

  // Adjust viewport and wait for some elements to be rendered if needed
  await page.setViewport({ width: 1920, height: 1080 });
  // You might want to add some waiting logic here, depending on your webpage's content

  // Capture screenshot
  await page.screenshot({ path: `./src/Assets/Thumbnails/${name}.png` });
  await browser.close();
};

captureScreenshot('https://growbuild-jg.onrender.com/','growbuild');