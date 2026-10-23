const fs = require('fs');

const js = fs.readFileSync('index-bundle.js', 'utf8') + fs.readFileSync('landing-page-chunk.js', 'utf8');

const regex = /["'](\/?assets\/[^"']+\.css)["']/gi;
let m;
const cssFiles = new Set();
while ((m = regex.exec(js)) !== null) {
  cssFiles.add(m[1]);
}
console.log('CSS files found:', Array.from(cssFiles));
