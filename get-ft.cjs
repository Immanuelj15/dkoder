const fs = require('fs');
const fns = JSON.parse(fs.readFileSync('extracted-functions.json', 'utf8'));

console.log('Ft:', fns.Ft.slice(0, 1500));
