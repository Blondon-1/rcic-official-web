import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const brands = [
  { name: "Aunt Jackie's", query: "Aunt Jackie's hair product bottle isolated" },
  { name: "CeraVe", query: "CeraVe moisturizing cream product isolated" },
  { name: "Cetaphil", query: "Cetaphil skin cleanser bottle isolated" },
  { name: "Fragrance World", query: "Fragrance World perfume bottle" },
  { name: "Nivea", query: "Nivea body lotion bottle isolated" },
  { name: "American Dream", query: "American Dream cocoa butter lotion" },
  { name: "Eucerin", query: "Eucerin intensive repair lotion" },
  { name: "Dr Rashel", query: "Dr Rashel vitamin c serum" },
  { name: "Simple", query: "Simple skincare face wash" },
  { name: "Dove", query: "Dove body wash bottle" },
  { name: "St Ives", query: "St Ives apricot scrub" },
  { name: "Francoise Bedon", query: "Francoise Bedon body lotion" },
  { name: "Vaseline", query: "Vaseline intensive care lotion" },
  { name: "Sun Screens", query: "Neutrogena sunscreen SPF 50" },
  { name: "SVR", query: "SVR skincare product" },
  { name: "Body Sprays", query: "Dove body spray deodorant" },
  { name: "Sanex", query: "Sanex shower gel" },
  { name: "Mielle", query: "Mielle rosemary mint oil" },
  { name: "Sunny Isle", query: "Sunny Isle jamaican black castor oil" },
  { name: "Kuza", query: "Kuza indian hemp hair grease" },
  { name: "Axe", query: "Axe body spray deodorant" },
  { name: "Rexona", query: "Rexona roll on deodorant" },
  { name: "Cantu", query: "Cantu shea butter leave in conditioner" },
  { name: "Silk Cool", query: "Silk Cool deodorant" },
  { name: "Dark & Lovely", query: "Dark and Lovely hair product" },
  { name: "Mega Growth", query: "Mega Growth hair lotion" },
  { name: "Eco Gel", query: "Eco styler olive oil gel" },
  { name: "Naomi", query: "Naomi cosmetics product" },
  { name: "Dax", query: "Dax hair pomade" }
];

const dest = path.join(__dirname, 'public', 'assets', 'brands');
if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

async function main() {
  console.log("Launching Puppeteer...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  for (const brand of brands) {
    const filename = brand.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() + '.jpg';
    const filepath = path.join(dest, filename);
    
    if (fs.existsSync(filepath)) {
      console.log(`[SKIP] ${brand.name} already exists.`);
      continue;
    }
    
    console.log(`[SEARCHING] ${brand.name}...`);
    try {
      const query = encodeURIComponent(brand.query);
      await page.goto(`https://duckduckgo.com/?q=${query}&iax=images&ia=images`, { waitUntil: 'domcontentloaded' });
      
      // wait for image results
      await page.waitForSelector('.tile--img__img', { timeout: 15000 });
      
      const imgUrl = await page.$eval('.tile--img__img', img => img.src);
      
      if (!imgUrl || imgUrl.startsWith('data:')) {
          console.log(`[SKIP] Invalid or Data URI for ${brand.name}`);
          continue;
      }

      console.log(`[DOWNLOADING] ${imgUrl}`);
      const imgRes = await axios.get(imgUrl, { responseType: 'arraybuffer' });
      fs.writeFileSync(filepath, imgRes.data);
      console.log(`[SUCCESS] Saved ${brand.name}`);
    } catch (e) {
      console.log(`[ERROR] Failed to fetch ${brand.name}: ${e.message}`);
    }
  }
  
  await browser.close();
  console.log("All Puppeteer tasks complete.");
}

main().catch(console.error);
