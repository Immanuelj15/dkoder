const fs = require('fs');
const fns = JSON.parse(fs.readFileSync('extracted-functions.json', 'utf8'));

console.log('=== Ee (Interview thoughts) ===');
console.log(fns.Ee.slice(0, 1500));

console.log('=== Ve (Practice demo) ===');
console.log(fns.Ve.slice(0, 1500));

console.log('=== Xe (Career tracks) ===');
console.log(fns.Xe.slice(0, 1500));

console.log('=== yt (Daily practice) ===');
console.log(fns.yt.slice(0, 1500));
