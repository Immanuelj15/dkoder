const { execSync } = require('child_process');

const chrome = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"';

// Run chrome headless with --dump-dom or evaluate
const res = execSync(`${chrome} --headless=new --window-size=390,844 --dump-dom "http://localhost:3000/"`, { encoding: 'utf8' });
console.log('DOM length:', res.length);
