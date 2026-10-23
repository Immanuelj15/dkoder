const fs = require('fs');

const pf = JSON.parse(fs.readFileSync('practice-filter-data.json', 'utf8'));
const ct = JSON.parse(fs.readFileSync('career-tracks-data.json', 'utf8'));
const lb = JSON.parse(fs.readFileSync('leaderboard-data.json', 'utf8'));

console.log('--- practice filter data keys ---', Object.keys(pf));
console.log('Presets:', pf.presets);
console.log('Options keys:', Object.keys(pf.options || {}));
console.log('Sample result questions:', pf.result?.questions?.slice(0, 3));

console.log('--- career tracks data keys ---', Object.keys(ct));
console.log('Tracks count:', ct.tracks?.length);
console.log('Track keys:', ct.tracks?.map(t => ({ key: t.key, title: t.title, count: t.questions?.total })));

console.log('--- leaderboard count ---', Array.isArray(lb) ? lb.length : lb.entries?.length);
