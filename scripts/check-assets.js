const fs = require('fs');
const path = require('path');

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

console.log('Total unique Sanity media URLs:', urls.size);
urls.forEach(u => console.log(u));
