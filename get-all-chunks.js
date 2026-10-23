const fs = require('fs');

const js = fs.readFileSync('index-bundle.js', 'utf8');
const regex = /["'](assets\/[^"']+\.js)["']/gi;
const chunks = new Set();
let m;
while ((m = regex.exec(js)) !== null) {
  chunks.add(m[1]);
}
console.log('Total chunks:', chunks.size);
fs.writeFileSync('all-chunks.json', JSON.stringify(Array.from(chunks), null, 2));
