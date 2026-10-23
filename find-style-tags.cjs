const fs = require('fs');

const js = fs.readFileSync('landing-page-chunk.js', 'utf8');

const regex = /children:\s*`([^`]*\.(?:dh|ot|ct|hw)[^`]*)`/g;
let m;
let count = 0;
while ((m = regex.exec(js)) !== null) {
  count++;
  console.log(`=== STYLE BLOCK ${count} ===`);
  console.log(m[1].slice(0, 1500));
  fs.appendFileSync('inline-styles.css', m[1] + '\n\n');
}
console.log('Total style blocks found:', count);
