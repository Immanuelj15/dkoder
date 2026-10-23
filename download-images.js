const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  'hero-dialogue/students-five-hero.webp',
  'hero-dialogue/dkoder-bot.webp',
  'hero-dialogue/student-interview-thoughts.webp',
  'trophy.png',
  'student.png',
  'study-duo-illustration.png',
  'favicon-32.png',
  'favicon-64.png',
  'apple-touch-icon.png'
];

async function download(relPath) {
  const url = `https://dkoder.co.in/${relPath}`;
  const outPath = path.resolve(__dirname, relPath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed to download ${url}: status ${res.statusCode}`);
        resolve();
        return;
      }
      const stream = fs.createWriteStream(outPath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`Successfully downloaded ${relPath} (${fs.statSync(outPath).size} bytes)`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${relPath}:`, err);
      resolve();
    });
  });
}

(async () => {
  for (const img of images) {
    await download(img);
  }
  console.log('All images downloaded!');
})();
