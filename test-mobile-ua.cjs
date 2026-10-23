const { execSync } = require('child_process');
const path = require('path');

const chrome = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"';
const mobileUA = '"Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1"';

const outPath = path.resolve(__dirname, 'mobile_390x844_test.png');
const cmd = `${chrome} --headless=new --user-agent=${mobileUA} --enable-viewport --force-device-scale-factor=1 --window-size=390,844 "--screenshot=${outPath}" "http://localhost:3000/"`;

console.log('Running mobile test...');
execSync(cmd, { timeout: 20000 });
console.log('Done test!');
