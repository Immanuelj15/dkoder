const fs = require('fs');

const js = fs.readFileSync('chunk-jRWAZmH_.js', 'utf8');
const regex = /[a-zA-Z0-9_\-\.\/]+\.(?:png|jpg|jpeg|svg|webp)/gi;
const matches = [...new Set(js.match(regex) || [])];
console.log('Matches in chunk-jRWAZmH_.js:', matches.length);
console.log(matches);
