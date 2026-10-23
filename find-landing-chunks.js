const fs = require('fs');

const js = fs.readFileSync('index-bundle.js', 'utf8');
const regex = /["'](\/?assets\/[a-zA-Z0-9_\-\.]*(?:Landing|Home|Hero|Practice|Placement|Demo)[a-zA-Z0-9_\-\.]*\.js)["']/gi;
const chunks = new Set();
let m;
while ((m = regex.exec(js)) !== null) {
  chunks.add(m[1]);
}
console.log('Landing chunks:', Array.from(chunks));
