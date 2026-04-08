import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

const rawDefaultBrands = [
  { name: "Aunt Jackie's", desc: "Premium hair care for defined, nourished curls.", img: "/assets/brands/aunt_jackie_s.jpg", category: "Haircare" },
  { name: "CeraVe", desc: "Dermatologist-recommended skincare with essential ceramides.", img: "/assets/brands/cerave.jpg", category: "Skincare" },
  { name: "Cetaphil", desc: "Gentle, clinically proven skincare for sensitive skin.", img: "/assets/brands/cetaphil.jpg", category: "Skincare" },
  { name: "Fragrance World", desc: "Long-lasting, luxurious perfumes and scents.", img: "/assets/brands/fragrance_world.jpg", category: "Perfumes" },
  { name: "Nivea", desc: "Intense moisture and trusted care for all skin types.", img: "/assets/brands/nivea.jpg", category: "Skincare" },
  { name: "American Dream", desc: "Cocoa butter and advanced tone-correcting lotions.", img: "/assets/brands/american_dream.jpg", category: "Skincare" },
  { name: "Eucerin", desc: "Targeted, science-based dermatological skincare.", img: "/assets/brands/eucerin.jpg", category: "Skincare" },
  { name: "Dr Rashel", desc: "Potent Vitamin C and gold-infused beauty serums.", img: "/assets/brands/dr_rashel.jpg", category: "Skincare" },
  { name: "Simple", desc: "Clean, kind-to-skin facial washes and moisturizers.", img: "/assets/brands/simple.jpg", category: "Skincare" },
  { name: "Dove", desc: "Deeply nourishing body washes and beauty bars.", img: "/assets/brands/dove.jpg", category: "Skincare" },
  { name: "St. Ives", desc: "Natural exfoliating scrubs and hydrated glowing skin.", img: "/assets/brands/st_ives.jpg", category: "Skincare" },
  { name: "Francoise Bedon", desc: "Specialized lightening and revitalizing treatments.", img: "/assets/brands/francoise_bedon.jpg", category: "Skincare" },
  { name: "Vaseline", desc: "Healing jelly and intensive care body lotions.", img: "/assets/brands/vaseline.jpg", category: "Skincare" },
  { name: "Sun Screens", desc: "High SPF protection against harmful UV rays.", img: "/assets/brands/sun_screens.jpg", category: "Skincare" },
  { name: "SVR", desc: "Dermatological active ingredients for sensitive skin.", img: "/assets/brands/svr.jpg", category: "Skincare" },
  { name: "Body Sprays", desc: "Refreshing and vibrant all-day body mists.", img: "/assets/brands/body_sprays.jpg", category: "Perfumes" },
  { name: "Sanex", desc: "Advanced dermo-active shower gels and deodorants.", img: "/assets/brands/sanex.jpg", category: "Skincare" },
  { name: "Mielle", desc: "Rosemary mint organics for rapid hair growth.", img: "/assets/brands/mielle.jpg", category: "Haircare" },
  { name: "Sunny Isle", desc: "Authentic Jamaican Black Castor Oil for edges.", img: "/assets/brands/sunny_isle.jpg", category: "Haircare" },
  { name: "Kuza", desc: "Indian hemp hair grease and natural treatments.", img: "/assets/brands/kuza.jpg", category: "Haircare" },
  { name: "Axe", desc: "Bold, iconic body sprays for men.", img: "/assets/brands/axe.jpg", category: "Perfumes" },
  { name: "Rexona", desc: "Motion-activated roll-on clinical antiperspirants.", img: "/assets/brands/rexona.jpg", category: "Perfumes" },
  { name: "Cantu", desc: "Shea butter leave-in conditioning repair creams.", img: "/assets/brands/cantu.jpg", category: "Haircare" },
  { name: "Silk Cool", desc: "Fresh, smooth, and cooling hygiene products.", img: "/assets/brands/silk_cool.jpg", category: "Hygiene" },
  { name: "Dark & Lovely", desc: "Protective hair relaxers and moisture seals.", img: "/assets/brands/dark_and_lovely.jpg", category: "Haircare" },
  { name: "Mega Growth", desc: "Deep strengthening treatments against breakage.", img: "/assets/brands/mega_growth.jpg", category: "Haircare" },
  { name: "Eco Gel", desc: "Olive oil styling gels for maximum hold.", img: "/assets/brands/eco_gel.jpg", category: "Haircare" },
  { name: "Naomi", desc: "Exclusive, elegant beauty and cosmetic lines.", img: "/assets/brands/naomi.jpg", category: "General" },
  { name: "Dax", desc: "Classic hair pomades for shine and style.", img: "/assets/brands/dax.jpg", category: "Haircare" }
];

const defaultBrands = rawDefaultBrands.map((b, i) => ({ ...b, id: `default-${i}` }));

export const ProductProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('rcic_catalog_db');
    if (stored) {
      const parsed = JSON.parse(stored);
      // Logic to migrate older data that might not have categories
      const migrated = parsed.map(b => ({ ...b, category: b.category || "General" }));
      setBrands(migrated);
    } else {
      localStorage.setItem('rcic_catalog_db', JSON.stringify(defaultBrands));
      setBrands(defaultBrands);
    }
  }, []);

  const saveToDb = (newBrandsArray) => {
    localStorage.setItem('rcic_catalog_db', JSON.stringify(newBrandsArray));
    setBrands(newBrandsArray);
  };

  const addProduct = (product) => {
    const productToAdd = { 
      ...product, 
      category: product.category || "General",
      id: `custom-${Date.now()}`,
      img: product.img.trim() === '' 
        ? `https://placehold.co/600x600/0a192f/d4af37?text=${encodeURIComponent(product.name)}`
        : product.img
    };
    const updated = [productToAdd, ...brands];
    saveToDb(updated);
  };

  const deleteProduct = (id) => {
    const updated = brands.filter(b => b.id !== id);
    saveToDb(updated);
  };

  const updateProduct = (updatedProduct) => {
    const finalImg = updatedProduct.img.trim() === ''
      ? `https://placehold.co/600x600/0a192f/d4af37?text=${encodeURIComponent(updatedProduct.name)}`
      : updatedProduct.img;
    
    const finalProduct = { ...updatedProduct, img: finalImg, category: updatedProduct.category || "General" };
    const updated = brands.map(b => b.id === finalProduct.id ? finalProduct : b);
    saveToDb(updated);
  };

  return (
    <ProductContext.Provider value={{ brands, addProduct, deleteProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
