const https = require('https');
const fs = require('fs');
const path = require('path');

const xyzon = ['msme', 'dpiit', 'iso', 'mca', 'nip', 'ncs', 'naps', 'skill-india'];

async function download(name) {
  const relPath = `xyzon/${name}.png`;
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
  for (const x of xyzon) {
    await download(x);
  }
  console.log('Done xyzon downloads');
})();
