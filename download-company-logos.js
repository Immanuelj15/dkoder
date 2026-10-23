const https = require('https');
const fs = require('fs');
const path = require('path');

const slugs = ['google','microsoft','amazon','tcs','infosys','wipro','cognizant','accenture','ibm','oracle','cisco','zoho','hcl','adobe','salesforce','nvidia','flipkart','apple','meta','samsung','goldmansachs','visa','paypal','atlassian','sap','qualcomm'];

async function download(slug) {
  const relPath = `company-logos/${slug}.svg`;
  const url = `https://dkoder.co.in/${relPath}`;
  const outPath = path.resolve(__dirname, relPath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${url}: status ${res.statusCode}`);
        resolve();
        return;
      }
      const stream = fs.createWriteStream(outPath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`Downloaded ${relPath} (${fs.statSync(outPath).size} bytes)`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(err);
      resolve();
    });
  });
}

(async () => {
  for (const s of slugs) {
    await download(s);
  }
  console.log('All company logos downloaded!');
})();
