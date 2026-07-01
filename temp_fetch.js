const https = require('https');

https.get('https://ais-pre-u4765o4uydirwvfvs4ynjz-315935408739.europe-west3.run.app/api/marketing-config', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Status code:', res.statusCode);
    console.log('Headers:', res.headers);
    console.log('Body:', data);
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
