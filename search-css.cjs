const fs = require('fs');

const css = fs.readFileSync('index-source.css', 'utf8');

console.log('Includes .dh:', css.includes('.dh'));
console.log('Includes .ot:', css.includes('.ot'));
console.log('Includes .ct:', css.includes('.ct'));
console.log('Includes student-interview-thoughts:', css.includes('student-interview-thoughts'));
console.log('Includes students-five-hero:', css.includes('students-five-hero'));

if (css.includes('.dh')) {
  const idx = css.indexOf('.dh');
  console.log(css.slice(idx, idx + 1000));
}
