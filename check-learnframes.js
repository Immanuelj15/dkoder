const fs = require('fs');

const js = fs.readFileSync('LearnFrames-CTAqn5Sk.js', 'utf8');
console.log('Size of LearnFrames:', js.length);
console.log('Includes game developer:', js.includes('game developer'));
console.log('Includes Mind everywhere:', js.includes('Mind everywhere'));
console.log('Includes Service-company:', js.includes('Service-company'));
console.log('Includes One goal can narrow:', js.includes('One goal can narrow'));
console.log('Includes Today’s practice or Todays practice:', js.includes('practice'));

const regex = /[a-zA-Z0-9_\-\.\/]+\.(?:png|jpg|jpeg|svg|webp)/gi;
console.log('Images in LearnFrames:', [...new Set(js.match(regex) || [])]);
