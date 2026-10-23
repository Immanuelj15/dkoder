const fs = require('fs');

const js = fs.readFileSync('landing-page-chunk.js', 'utf8');

// Let's find strings and section components in landing-page-chunk.js
// Look for headings and text snippets
const snippets = [
  'Interview tomorrow',
  'Choose the destination',
  'Right filter',
  'Today’s practice',
  'What should I do today',
  'More than coding',
  'Proof should be',
  'Who is practising consistently',
  'Pick your price',
  'One goal. One useful next step'
];

snippets.forEach(s => {
  const idx = js.indexOf(s);
  console.log(`Snippet "${s}": found at ${idx}`);
  if (idx !== -1) {
    console.log('--- CONTEXT: ---');
    console.log(js.slice(Math.max(0, idx - 100), Math.min(js.length, idx + 300)));
  }
});
