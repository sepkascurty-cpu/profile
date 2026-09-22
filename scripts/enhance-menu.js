const fs = require('fs');

const menuEnhancement = `
// Enhanced Menu Interaction & Black Background Effect
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.menu__list__link');
  const mediaItems = document.querySelectorAll('.menu__medias__media');
  const navButton = document.querySelector('.navigation__button');

  if (menuLinks.length && mediaItems.length) {
    // Show first media by default
    if (mediaItems[0]) {
      mediaItems[0].style.opacity = '1';
      mediaItems[0].style.visibility = 'visible';
    }

    menuLinks.forEach((link, idx) => {
      link.addEventListener('mouseenter', () => {
        mediaItems.forEach((media, mIdx) => {
          if (mIdx === idx) {
            media.style.opacity = '1';
            media.style.visibility = 'visible';
            media.style.transform = 'scale(1) rotate(0deg)';
          } else {
            media.style.opacity = '0';
            media.style.visibility = 'hidden';
            media.style.transform = 'scale(0.94) rotate(-2deg)';
          }
        });
      });
    });
  }

  // Keyboard accessibility: Escape to close menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.documentElement.classList.contains('navigation--open')) {
      if (navButton) navButton.click();
    }
  });
});
`;

// Append to bundle.js
let js = fs.readFileSync('bundle.js', 'utf8');
if (!js.includes('// Enhanced Menu Interaction & Black Background Effect')) {
  js += '\n' + menuEnhancement;
  fs.writeFileSync('bundle.js', js, 'utf8');
  fs.writeFileSync('bundle.ba16ac9.js', js, 'utf8');
  console.log('Appended menu enhancement to bundle.js');
}
