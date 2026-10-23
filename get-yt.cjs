const fs = require('fs');
const fns = JSON.parse(fs.readFileSync('extracted-functions.json', 'utf8'));

console.log('yt (Leaderboard) length:', fns.yt.length);
console.log('yt start:', fns.yt.slice(0, 2000));
console.log('yt middle:', fns.yt.slice(2000, 4500));
