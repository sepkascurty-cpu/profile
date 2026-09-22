const fs = require('fs');
const https = require('https');

const code = fs.readFileSync('bundle.js', 'utf8');
const regex = /"[^"]*\.(png|jpg|jpeg|webp)"/g;
let match;
const set = new Set();
while ((match = regex.exec(code)) !== null) {
  set.add(match[0]);
}
console.log('Textures referenced in bundle.js:', Array.from(set));

// Download transition-rtl.png
https.get('https://mattjinn.com/transition-rtl.png', (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream('transition-rtl.png');
    res.pipe(file);
    file.on('finish', () => {
      console.log('Downloaded transition-rtl.png successfully');
    });
  } else {
    console.error('Failed to download transition-rtl.png', res.statusCode);
  }
});
