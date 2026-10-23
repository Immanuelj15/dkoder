const fs = require('fs');

const js = fs.readFileSync('index-bundle.js', 'utf8');

const idx = js.indexOf('page-CoWYYDQz.js');
console.log('Index of page-CoWYYDQz.js:', idx);
if (idx !== -1) {
  console.log(js.slice(Math.max(0, idx - 200), idx + 400));
}
