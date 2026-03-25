import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const brands = [
  { name: "Aunt Jackie's", query: "Aunt Jackie's hair products bottle" },
  { name: "CeraVe", query: "CeraVe moisturizing cream product" },
  { name: "Cetaphil", query: "Cetaphil skin cleanser bottle" },
  { name: "Fragrance World", query: "Fragrance World perfume bottle" },
  { name: "Nivea", query: "Nivea body lotion bottle" },
  { name: "American Dream", query: "American Dream cocoa butter lotion" },
  { name: "Eucerin", query: "Eucerin intensive repair lotion" },
  { name: "Dr Rashel", query: "Dr Rashel vitamin c serum" },
  { name: "Simple", query: "Simple skincare face wash" },
  { name: "Dove", query: "Dove body wash bottle" },
  { name: "St Ives", query: "St Ives apricot scrub" },
  { name: "Francoise Bedon", query: "Francoise Bedon body lotion" },
  { name: "Vaseline", query: "Vaseline intensive care lotion" },
  { name: "Sun screens", query: "Neutrogena sunscreen SPF 50" },
  { name: "SVR", query: "SVR skincare product" },
  { name: "Body sprays", query: "Dove body spray deodorant" },
  { name: "Sanex", query: "Sanex shower gel" },
  { name: "Mielle", query: "Mielle rosemary mint oil" },
  { name: "Sunny Isle", query: "Sunny Isle jamaican black castor oil" },
  { name: "Kuza", query: "Kuza indian hemp hair grease" },
  { name: "Axe", query: "Axe body spray deodorant" },
  { name: "Rexona", query: "Rexona roll on deodorant" },
  { name: "Cantu", query: "Cantu shea butter leave in conditioner" },
  { name: "Silk Cool", query: "Silk Cool deodorant" },
  { name: "Dark and Lovely", query: "Dark and Lovely hair relaxer" },
  { name: "Mega Growth", query: "Mega Growth hair lotion" },
  { name: "Eco gel", query: "Eco styler olive oil gel" },
  { name: "Naomi", query: "Naomi cosmetics product" },
  { name: "Dax", query: "Dax hair pomade" }
];

const dest = path.join(__dirname, 'public', 'assets', 'brands');
if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

async function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function scrapeImage(brand) {
  const filename = brand.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() + '.jpg';
  const filepath = path.join(dest, filename);

  if (fs.existsSync(filepath)) {
    console.log(`[SKIP] ${brand.name} already exists.`);
    return;
  }

  console.log(`[FETCHING] ${brand.name}...`);
  try {
    const url = `https://images.search.yahoo.com/search/images?p=${encodeURIComponent(brand.query)}`;
    const res = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    const $ = cheerio.load(res.data);
    let imgUrl = $('#sres .ld img').first().attr('data-src') || $('#sres .ld img').first().attr('src');

    if (!imgUrl) {
      console.log(`[MISSING] No image found for ${brand.name}`);
      return;
    }

    const imgRes = await axios.get(imgUrl, { responseType: 'arraybuffer' });
    fs.writeFileSync(filepath, imgRes.data);
    console.log(`[SUCCESS] Downloaded ${brand.name}`);
  } catch (err) {
    console.error(`[ERROR] Failed to fetch ${brand.name}:`, err.message);
  }
}

async function main() {
  for (const brand of brands) {
    await scrapeImage(brand);
    await delay(1000); // polite delay
  }
  console.log("All done!");
}

main();
