const fs = require('fs');

const js = fs.readFileSync('index-bundle.js', 'utf8');

// search for path:
let matches = [];
let re = /path:\s*["']([^"']+)["']/g;
let m;
while ((m = re.exec(js)) !== null) {
  matches.push(m[1]);
}
console.log('Routes found in index-bundle.js:', matches.slice(0, 30));

// Let's also check for lazy() imports
re = /lazy\(\(\)\s*=>\s*__vitePreload\(\(\)\s*=>\s*import\([^\)]+\),\s*true\s*\?\s*__vite__mapDeps\(\[(\d+)\]\)/g;
let lazyMatches = [];
while ((m = re.exec(js)) !== null) {
  lazyMatches.push(m[1]);
}
console.log('Lazy imports deps indices:', lazyMatches);
