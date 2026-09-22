const fs = require('fs');
const https = require('https');

const textures = ['transition-rtl.png', 'play.png', 'transition-center.jpg', 'noise.png'];

textures.forEach(t => {
  https.get(`https://mattjinn.com/${t}`, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(t);
      res.pipe(file);
      file.on('finish', () => {
        console.log('Downloaded', t, fs.statSync(t).size, 'bytes');
      });
    } else {
      console.log('Status for', t, ':', res.statusCode);
    }
  });
});
