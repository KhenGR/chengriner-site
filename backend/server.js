const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();
app.use(cors());

app.get("/publications", async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Open profile publications page
    await page.goto("https://scholar.google.com/citations?user=ideTGfcAAAAJ&hl=en");

    // Extract basic publication info + link to individual publication page
    const publications = await page.evaluate(() => {
      const rows = document.querySelectorAll(".gsc_a_tr");
      return Array.from(rows).map(row => {
        const titleEl = row.querySelector(".gsc_a_at");
        const authorsEl = row.querySelector(".gs_gray");
        const yearEl = row.querySelector(".gsc_a_y span");
        return {
          title: titleEl ? titleEl.innerText : "",
          authors: authorsEl ? authorsEl.innerText : "",
          year: yearEl ? yearEl.innerText : "",
          publicationPage: titleEl ? titleEl.href : ""
        };
      });
    });

    // Now, for each publication, go to its page and try to get PDF link
    for (let pub of publications) {
      if (pub.publicationPage) {
        try {
          await page.goto(pub.publicationPage, { waitUntil: 'domcontentloaded' });

          // On individual publication page, look for a PDF link
          // This selector might need tweaking if Google changes layout
          const pdfLink = await page.evaluate(() => {
            // Common place for PDF link: look for anchor tags with 'PDF' in text or href ends with .pdf
            const anchors = Array.from(document.querySelectorAll("a"));
            for (let a of anchors) {
              if (a.innerText.toLowerCase().includes("pdf") || (a.href && a.href.toLowerCase().endsWith(".pdf"))) {
                return a.href;
              }
            }
            return null;
          });

          pub.pdfLink = pdfLink || "No PDF available";
        } catch (err) {
          console.error("Failed to fetch PDF for", pub.title, err);
          pub.pdfLink = "Error fetching PDF";
        }
      } else {
        pub.pdfLink = "No publication page";
      }
    }

    await browser.close();
    res.json(publications);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to scrape Google Scholar" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
