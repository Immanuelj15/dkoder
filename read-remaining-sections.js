const fs = require('fs');
const fns = JSON.parse(fs.readFileSync('extracted-functions.json', 'utf8'));

console.log('=== wt ===');
console.log(fns.wt.slice(0, 1500));

console.log('=== Et ===');
console.log(fns.Et.slice(0, 1500));

console.log('=== kt ===');
console.log(fns.kt.slice(0, 1500));

console.log('=== Mt ===');
console.log(fns.Mt.slice(0, 1500));

console.log('=== Ft ===');
console.log(fns.Ft.slice(0, 1500));

console.log('=== Lt ===');
console.log(fns.Lt.slice(0, 1500));
