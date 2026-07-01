const fs = require('fs');
const https = require('https');

['calista', 'amara', 'noah'].forEach(name => {
  if (!fs.existsSync('./public/chatbot')) {
    fs.mkdirSync('./public/chatbot', { recursive: true });
  }
  const file = fs.createWriteStream('./public/chatbot/' + name + '.png');
  https.get('https://raw.githubusercontent.com/knoxified/knoxified.org/09aea6cd53aff46ae40008b7ab8079dc835fd003/calista-widget/src/assets/' + name + '.png', function(response) {
    response.pipe(file);
  });
});
