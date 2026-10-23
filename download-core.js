const https = require('https');
const fs = require('fs');

const files = [
  'assets/tokens-DABAXPQ2.js',
  'assets/LandingNavbar-C7Z5fSaq.js',
  'assets/SiteFooter-BKOgGnYI.js',
  'assets/BrandLogo-BmrZLEdP.js',
  'assets/PlansSection-JCm3l_tx.js',
  'assets/pricingPlans.config-R5y_-uFi.js',
  'assets/tierConfig-B4BPipca.js'
];

async function download(path) {
  const url = `https://dkoder.co.in/${path}`;
  const localName = path.split('/').pop();
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(localName, data);
        console.log(`Downloaded ${localName} (${data.length} bytes)`);
        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
  for (const f of files) {
    await download(f);
  }
})();
