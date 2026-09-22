const fs = require('fs');

let css = fs.readFileSync('bundle.css', 'utf8');

const extraMenuCss = `
/* High-Fidelity Black Background & Open Effect for Menu */
.menu {
  background-color: #000000 !important;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.8s ease !important;
  will-change: opacity, visibility;
}

.navigation--open .menu {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
}

.navigation--open body {
  background-color: #000000 !important;
}

.menu__medias__media {
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
`;

if (!css.includes('/* High-Fidelity Black Background & Open Effect for Menu */')) {
  css += extraMenuCss;
  fs.writeFileSync('bundle.css', css, 'utf8');
  fs.writeFileSync('bundle.74eb0ff.css', css, 'utf8');
  console.log('Successfully updated menu styling with black background effect.');
} else {
  console.log('Already updated.');
}
