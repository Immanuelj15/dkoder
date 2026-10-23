const https = require('https');
const fs = require('fs');

const chunks = JSON.parse(fs.readFileSync('all-chunks.json', 'utf8'));
const pageChunks = chunks.filter(c => c.startsWith('assets/page-'));

console.log('Total page chunks:', pageChunks.length);

async function checkChunk(chunkPath) {
  return new Promise((resolve) => {
    https.get(`https://dkoder.co.in/${chunkPath}`, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        if (data.includes('Interview tomorrow') || data.includes('game developer') || data.includes('Service-company') || data.includes('Cut the noise')) {
          console.log(`FOUND LANDING PAGE CHUNK: ${chunkPath}!`);
          fs.writeFileSync('landing-page-chunk.js', data);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    }).on('error', () => resolve(false));
  });
}

(async () => {
  for (const p of pageChunks) {
    const found = await checkChunk(p);
    if (found) break;
  }
  console.log('Search completed.');
})();
