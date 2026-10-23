const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, 'public');
fs.mkdirSync(publicDir, { recursive: true });

function copyFile(src, dest) {
  if (fs.existsSync(src)) {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function copyDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });
  for (const item of fs.readdirSync(srcDir)) {
    const s = path.join(srcDir, item);
    const d = path.join(destDir, item);
    if (fs.statSync(s).isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

const rootFiles = [
  'dkoder-mark.png',
  'favicon-32.png',
  'favicon-64.png',
  'apple-touch-icon.png',
  'trophy.png',
  'student.png',
  'study-duo-illustration.png'
];

rootFiles.forEach(f => {
  copyFile(path.resolve(__dirname, f), path.join(publicDir, f));
});

copyDir(path.resolve(__dirname, 'hero-dialogue'), path.join(publicDir, 'hero-dialogue'));
copyDir(path.resolve(__dirname, 'company-logos'), path.join(publicDir, 'company-logos'));
copyDir(path.resolve(__dirname, 'xyzon'), path.join(publicDir, 'xyzon'));

console.log('Public folder populated successfully!');
