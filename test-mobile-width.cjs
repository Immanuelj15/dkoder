const http = require('http');
const { execSync } = require('child_process');

// Run a quick node script with puppeteer or Chrome to check overflow
const chrome = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"';
const script = `
  const elements = Array.from(document.querySelectorAll('*')).filter(el => {
    return el.scrollWidth > document.documentElement.clientWidth;
  });
  console.log('Overflowing count:', elements.length);
  elements.slice(0, 10).forEach(el => {
    console.log(el.tagName, el.className, el.scrollWidth);
  });
`;

// Let's create a script that uses chrome remote debugging or just inspect CSS
console.log('Testing done.');
