const fs = require('fs');

const js = fs.readFileSync('landing-page-chunk.js', 'utf8');

const functions = ['q', 'Se', 'Ce', 'Ee', 'ke', 'ze', 'Be', 'Ve', 'We', 'Ge', 'Ke', 'qe', 'Je', 'Ye', 'Xe', 'yt', 'bt', 'wt', 'Et', 'kt', 'Mt', 'Ft', 'Lt'];

const results = {};
for (let i = 0; i < functions.length; i++) {
  const name = functions[i];
  const start = js.indexOf(`function ${name}(`);
  if (start === -1) continue;
  const nextStart = i < functions.length - 1 ? js.indexOf(`function ${functions[i+1]}(`) : js.indexOf(`function Rt(`);
  results[name] = js.slice(start, nextStart !== -1 ? nextStart : start + 3000);
}

fs.writeFileSync('extracted-functions.json', JSON.stringify(results, null, 2));
console.log('Extracted functions:', Object.keys(results));
