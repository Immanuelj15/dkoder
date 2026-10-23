const http = require('http');
const { execSync } = require('child_process');

// Start chrome with remote debugging
const chrome = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"';
const cp = require('child_process').spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--window-size=390,844',
  'http://localhost:3000/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://localhost:9222/json');
    const tabs = await listRes.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;
    console.log('WS URL:', wsUrl);

    const WebSocket = require('ws'); // check if ws exists
  } catch (err) {
    console.log('Error:', err.message);
  } finally {
    cp.kill();
  }
}, 2000);
