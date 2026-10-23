const fs = require('fs');

const js = fs.readFileSync('index-bundle.js', 'utf8');
const idx = js.indexOf('LandingNavbar');
console.log('Index of LandingNavbar:', idx);
if (idx !== -1) {
  console.log(js.slice(Math.max(0, idx - 400), idx + 400));
}
