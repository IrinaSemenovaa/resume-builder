const express = require("express");
const path = require("path");
const puppeteer = require("puppeteer");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.addStyleTag({ content: "body { margin: 0; padding: 0; }" });

  const indexPath = path.join(__dirname, "../client/build/index.html");

  await page.goto(`file://${indexPath}`, { waitUntil: "networkidle0" });
  console.error("The path is available PDF:", indexPath);
  await page
    .pdf({
      path: path.join(__dirname, `../resume/resume.pdf`),
      printBackground: true,
      width: "793px",
      height: "1123px",
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      pageRanges: "1",
      headerTemplate: "",
      footerTemplate: "",
      displayHeaderFooter: false,
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  await browser.close();
})();
