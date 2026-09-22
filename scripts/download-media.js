const fs = require('fs');
const path = require('path');
const https = require('https');

const files = [
  'index.html',
  'music/index.html',
  'videos/index.html',
  'shows/index.html',
  'about/index.html',
  'press/index.html'
];

const urls = new Set();
files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.match(/https:\/\/cdn\.sanity\.io\/[^\s"'>]+/g);
    if (matches) {
      matches.forEach(m => urls.add(m));
    }
  }
});

fs.mkdirSync('media', { recursive: true });

async function downloadFile(url) {
  const parsed = new URL(url);
  const filename = path.basename(parsed.pathname);
  const dest = path.join('media', filename);
  
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    console.log('Already downloaded:', filename);
    return;
  }

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded:', filename, fs.statSync(dest).size, 'bytes');
          resolve();
        });
      } else {
        console.error('Failed to download', url, res.statusCode);
        resolve();
      }
    }).on('error', (err) => {
      console.error('Error downloading', url, err.message);
      resolve();
    });
  });
}

async function main() {
  console.log(`Starting download of ${urls.size} media files...`);
  for (const u of urls) {
    await downloadFile(u);
  }
  console.log('All downloads finished.');
}

main();
