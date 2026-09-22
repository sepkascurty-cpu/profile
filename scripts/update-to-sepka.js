const fs = require('fs');
const path = require('path');

// 1. Create initial a.jpg, b.jpg, c.jpg, c.jpd if not already present
const defaultMedia = [
  'media/973fd8bbd343238aa42f0226b1dcf8f60f18e78d-1920x1167.jpg',
  'media/46b931eb85008d6f19095111cd48804fb63147c8-1920x1167.jpg',
  'media/709e9680716d109bb46579b36745db81799ecdd0-1920x1167.jpg'
];

if (!fs.existsSync('a.jpg') && fs.existsSync(defaultMedia[0])) {
  fs.copyFileSync(defaultMedia[0], 'a.jpg');
}
if (!fs.existsSync('b.jpg') && fs.existsSync(defaultMedia[1])) {
  fs.copyFileSync(defaultMedia[1], 'b.jpg');
}
if (!fs.existsSync('c.jpg') && fs.existsSync(defaultMedia[2])) {
  fs.copyFileSync(defaultMedia[2], 'c.jpg');
}
if (!fs.existsSync('c.jpd') && fs.existsSync('c.jpg')) {
  fs.copyFileSync('c.jpg', 'c.jpd');
}

// 2. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace Title and Meta
indexHtml = indexHtml.replace(/<title>[\s\S]*?Matt Jinn \| Home[\s\S]*?<\/title>/gi, '<title>\n    Sepka Rahmadhani | Home\n</title>');
indexHtml = indexHtml.replace(/content="Matt Jinn \| Home"/gi, 'content="Sepka Rahmadhani | Home"');
indexHtml = indexHtml.replace(/content="Matt Jinn"/gi, 'content="Sepka Rahmadhani"');

// Replace Preloader Wordmark
const preloaderWordmark = `<div class="preloader__wordmark" aria-label="Sepka Rahmadhani"><span class="preloader__letter" aria-hidden="true">s</span><span class="preloader__letter" aria-hidden="true">e</span><span class="preloader__letter" aria-hidden="true">p</span><span class="preloader__letter" aria-hidden="true">k</span><span class="preloader__letter" aria-hidden="true">a</span><span class="preloader__letter" aria-hidden="true">&nbsp;</span><span class="preloader__letter" aria-hidden="true">r</span><span class="preloader__letter" aria-hidden="true">a</span><span class="preloader__letter" aria-hidden="true">h</span><span class="preloader__letter" aria-hidden="true">m</span><span class="preloader__letter" aria-hidden="true">a</span><span class="preloader__letter" aria-hidden="true">d</span><span class="preloader__letter" aria-hidden="true">h</span><span class="preloader__letter" aria-hidden="true">a</span><span class="preloader__letter" aria-hidden="true">n</span><span class="preloader__letter" aria-hidden="true">i</span></div>`;
indexHtml = indexHtml.replace(/<div class="preloader__wordmark"[\s\S]*?<\/div>/i, preloaderWordmark);

// Replace Navigation Logo
indexHtml = indexHtml.replace(/<a class="navigation__logo" href="\/">[\s\S]*?<\/a>/i, '<a class="navigation__logo" href="/">Sepka Rahmadhani</a>');

// Replace Hero Title
const heroTitle = `<h1 class="intro__title">
            <span class="intro__title__text">sepka</span>
            <span class="intro__title__text">rahmadhani</span>
        </h1>`;
indexHtml = indexHtml.replace(/<h1 class="intro__title">[\s\S]*?<\/h1>/i, heroTitle);

// Replace Intro Gallery Images with a.jpg, b.jpg, c.jpg
const introGallery = `<div class="intro__gallery">
                    <figure class="intro__media" data-parallax>
                
                <img
                    alt="Sepka Rahmadhani"
                    class="intro__media__image"
                    data-src="/a.jpg"
                    src="/a.jpg"
                    height="100%"
                    width="100%"
                />
            </figure>
                    <figure class="intro__media" data-parallax>
                
                <img
                    alt="Sepka Rahmadhani"
                    class="intro__media__image"
                    data-src="/b.jpg"
                    src="/b.jpg"
                    height="100%"
                    width="100%"
                />
            </figure>
                    <figure class="intro__media" data-parallax>
                
                <img
                    alt="Sepka Rahmadhani"
                    class="intro__media__image"
                    data-src="/c.jpg"
                    src="/c.jpg"
                    height="100%"
                    width="100%"
                />
            </figure>
            </div>`;
indexHtml = indexHtml.replace(/<div class="intro__gallery">[\s\S]*?<\/div>/i, introGallery);

// Replace Footer copyright
indexHtml = indexHtml.replace(/© 2025 Matt Jinn/gi, '© 2025 Sepka Rahmadhani');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Updated index.html with Sepka Rahmadhani and a.jpg, b.jpg, c.jpg');

// 3. Update all other HTML files for title, logo, preloader, and footer
const otherHtmlFiles = [
  'music/index.html',
  'videos/index.html',
  'shows/index.html',
  'about/index.html',
  'press/index.html'
];

otherHtmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/Matt Jinn \|/gi, 'Sepka Rahmadhani |');
    content = content.replace(/content="Matt Jinn/gi, 'content="Sepka Rahmadhani');
    content = content.replace(/<a class="navigation__logo" href="\/">[\s\S]*?<\/a>/i, '<a class="navigation__logo" href="/">Sepka Rahmadhani</a>');
    content = content.replace(/<div class="preloader__wordmark"[\s\S]*?<\/div>/i, preloaderWordmark);
    content = content.replace(/© 2025 Matt Jinn/gi, '© 2025 Sepka Rahmadhani');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});

// 4. Update bundle.css to style .intro__title for Sepka Rahmadhani
let css = fs.readFileSync('bundle.css', 'utf8');
const sepkaTitleCss = `
/* Sepka Rahmadhani Custom Hero Typography */
.intro__title {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  font-family: "big-caslon-fb", "Big Caslon", "Playfair Display", Georgia, serif !important;
  font-style: italic !important;
  font-size: 8rem !important;
  line-height: 0.82 !important;
  color: #ffffff !important;
  text-transform: lowercase !important;
  text-align: center !important;
  letter-spacing: -0.02em !important;
  width: auto !important;
  white-space: nowrap !important;
  pointer-events: none !important;
  user-select: none !important;
}

.intro__title__text {
  display: block;
  font-size: inherit;
  line-height: inherit;
  color: #ffffff;
}

@media (max-width: 768px) {
  .intro__title {
    font-size: 4.5rem !important;
  }
}
`;

if (!css.includes('/* Sepka Rahmadhani Custom Hero Typography */')) {
  css += sepkaTitleCss;
  fs.writeFileSync('bundle.css', css, 'utf8');
  fs.writeFileSync('bundle.74eb0ff.css', css, 'utf8');
  console.log('Updated bundle.css with Sepka Rahmadhani title styling.');
}
