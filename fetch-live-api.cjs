const https = require('https');
const fs = require('fs');

function fetchJson(urlPath, outName) {
  const url = `https://dkoder.co.in/api${urlPath}`;
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        fs.writeFileSync(outName, JSON.stringify(json, null, 2));
        console.log(`Successfully fetched /api${urlPath} -> ${outName}`);
      } catch (e) {
        console.log(`Failed to parse /api${urlPath}:`, data.slice(0, 200));
      }
    });
  }).on('error', (err) => console.error(err));
}

fetchJson('/landing/practice-filter', 'practice-filter-data.json');
fetchJson('/landing/career-tracks', 'career-tracks-data.json');
fetchJson('/gamification/leaderboard?limit=50&sortBy=xp', 'leaderboard-data.json');
