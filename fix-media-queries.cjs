const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, 'src/index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace range media queries with standard max-width / min-width
css = css.replace(/@media\s*\(width<=1000px\)\s*and\s*\(width>=761px\)/g, '@media (min-width: 761px) and (max-width: 1000px)');
css = css.replace(/@media\s*\(width<=1100px\)\s*and\s*\(width>=901px\)/g, '@media (min-width: 901px) and (max-width: 1100px)');
css = css.replace(/@media\s*\(width>=1025px\)\s*and\s*\(height<=800px\)/g, '@media (min-width: 1025px) and (max-height: 800px)');
css = css.replace(/@media\s*\(width<=(\d+)px\)/g, '@media (max-width: $1px)');
css = css.replace(/@media\s*\(width>=(\d+)px\)/g, '@media (min-width: $1px)');

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully modernized media queries in src/index.css');
