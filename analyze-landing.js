const fs = require('fs');

const js = fs.readFileSync('landing-page-chunk.js', 'utf8');

console.log('Size of landing page chunk:', js.length, 'bytes');

// Check for all image paths / URLs
const regexImg = /[a-zA-Z0-9_\-\.\/]+\.(?:png|jpg|jpeg|svg|webp)/gi;
const imgs = [...new Set(js.match(regexImg) || [])];
console.log('Images in landing page:', imgs);

// Check for imported components and icons
const regexImports = /import\s*\{([^}]+)\}\s*from\s*["']([^"']+)["']/g;
let m;
let imports = [];
while ((m = regexImports.exec(js)) !== null) {
  imports.push({ specifiers: m[1], from: m[2] });
}
console.log('Imports:', imports);
