const http = require('http');

http.get('http://localhost:3000', (res) => {
  console.log('Status Code:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTML snippet:');
    console.log(data.slice(0, 500));
    process.exit(0);
  });
}).on('error', (err) => {
  console.error('Error connecting to localhost:3000:', err.message);
  process.exit(1);
});
