const fs = require('fs');

const js = fs.readFileSync('index-bundle.js', 'utf8') + fs.readFileSync('index-source.css', 'utf8');
const regex = /\/assets\/[a-zA-Z0-9_\-\.]+\.(?:png|jpg|jpeg|svg|webp)/gi;
const matches = [...new Set(js.match(regex) || [])];
console.log('Image / SVG assets count:', matches.length);
console.log(JSON.stringify(matches, null, 2));
