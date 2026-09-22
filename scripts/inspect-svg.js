const fs = require('fs');
const svg = fs.readFileSync('bundle.svg', 'utf8');
const pos = svg.indexOf('id="matt-jinn"');
if (pos !== -1) {
  console.log(svg.substring(pos, pos + 800));
}
