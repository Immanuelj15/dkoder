const { execSync } = require('child_process');

const chrome = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"';
const script = `
  console.log('INNER_WIDTH:' + window.innerWidth);
  console.log('CLIENT_WIDTH:' + document.documentElement.clientWidth);
  console.log('SCROLL_WIDTH:' + document.documentElement.scrollWidth);
  console.log('BODY_SCROLL:' + document.body.scrollWidth);
  const bad = Array.from(document.querySelectorAll('*')).filter(e => e.scrollWidth > 390);
  console.log('BAD_COUNT:' + bad.length);
  bad.slice(0, 10).forEach(e => console.log('OVERFLOW:', e.tagName, e.className.slice(0, 40), e.scrollWidth));
`;

// Let's create a temporary html file that loads the script or inject it
const cmd = `${chrome} --headless=new --window-size=390,844 --dump-dom "http://localhost:3000/"`;
const html = execSync(cmd, { encoding: 'utf8' });
console.log('Loaded HTML length:', html.length);
