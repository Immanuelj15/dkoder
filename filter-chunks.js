const fs = require('fs');
const chunks = JSON.parse(fs.readFileSync('all-chunks.json', 'utf8'));
console.log(chunks.filter(c => /landing|home|arena|placement|interview|mind|focus|prep|card/i.test(c)));
