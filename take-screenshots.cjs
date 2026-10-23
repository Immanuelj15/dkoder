const { execSync } = require('child_process');
const path = require('path');

const chrome = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"';

const targets = [
  { name: 'desktop_1440x900.png', w: 1440, h: 900 },
  { name: 'laptop_1280x800.png', w: 1280, h: 800 },
  { name: 'tablet_768x1024.png', w: 768, h: 1024 },
  { name: 'mobile_390x844.png', w: 390, h: 844 }
];

targets.forEach(t => {
  const outPath = path.resolve(__dirname, t.name);
  const cmd = `${chrome} --headless=new --incognito --virtual-time-budget=4000 "--screenshot=${outPath}" --window-size=${t.w},${t.h} "http://localhost:3000/"`;
  console.log(`Taking screenshot for ${t.name}...`);
  try {
    execSync(cmd, { timeout: 20000 });
    console.log(`Saved ${t.name}`);
  } catch (err) {
    console.error(`Failed ${t.name}:`, err.message);
  }
});

console.log('All screenshots completed!');
