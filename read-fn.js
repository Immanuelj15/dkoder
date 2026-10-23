const fs = require('fs');
const fns = JSON.parse(fs.readFileSync('extracted-functions.json', 'utf8'));

console.log('=== q (Hero Dialogue) ===');
console.log(fns.q.slice(0, 1500));

console.log('=== Ce (Company Ticker) ===');
console.log(fns.Ce.slice(0, 1500));
