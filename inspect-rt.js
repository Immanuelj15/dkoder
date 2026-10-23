const fs = require('fs');

const js = fs.readFileSync('landing-page-chunk.js', 'utf8');

const rtIdx = js.lastIndexOf('function Rt()');
console.log(js.slice(rtIdx));
