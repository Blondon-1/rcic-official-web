import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import google from 'google-this'; // npm install google-this

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

async function scrapeImage(brand) {
  const filename = brand.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() + '.jpg';
  const filepath = path.join(dest, filename);
  
  if (fs.existsSync(filepath)) {
    console.log(`[SKIP] ${brand.name} already exists.`);
    return;
  }

  console.log(`[FETCHING] ${brand.name}...`);
  try {
    const images = await google.image(brand.query, { safe: false });
    if (!images || images.length === 0) {
      console.log(`[MISSING] No image found for ${brand.name}`);
      return;
    }

    // Try top 3 image URLs to find one that doesn't block
    let success = false;
    for (let i = 0; i < Math.min(3, images.length); i++) {
        try {
            const imgRes = await axios.get(images[i].url, { 
                responseType: 'arraybuffer',
                timeout: 5000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
                }
            });
            fs.writeFileSync(filepath, imgRes.data);
            console.log(`[SUCCESS] Downloaded ${brand.name}`);
            success = true;
            break; 
        } catch (e) {
            // keep trying next
        }
    }
    
    if (!success) {
         console.log(`[ERROR] All image attempts failed for ${brand.name}`);
    }

  } catch (err) {
    console.error(`[ERROR] Failed to search ${brand.name}:`, err.message);
  }
}

async function main() {
  for (const brand of brands) {
    await scrapeImage(brand);
    await new Promise(r => setTimeout(r, 1500)); // polite delay
  }
  console.log("All done!");
}

main();
