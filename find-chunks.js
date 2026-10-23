const fs = require('fs');

const js = fs.readFileSync('index-bundle.js', 'utf8');
const regex = /["'](\/?assets\/[^"']+\.js)["']/gi;
const chunks = new Set();
let m;
while ((m = regex.exec(js)) !== null) {
  chunks.add(m[1]);
}
console.log('Referenced chunks:', Array.from(chunks));
