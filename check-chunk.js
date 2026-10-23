const fs = require('fs');

const js = fs.readFileSync('chunk-jRWAZmH_.js', 'utf8');
console.log('Includes game developer:', js.includes('game developer'));
console.log('Includes Mind everywhere:', js.includes('Mind everywhere'));
console.log('Includes Service-company:', js.includes('Service-company'));
console.log('Includes One goal can narrow:', js.includes('One goal can narrow'));
console.log('Length of chunk-jRWAZmH_.js:', js.length);
