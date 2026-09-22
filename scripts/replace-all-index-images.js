const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Menu medias
const menuMedias = `<div class="menu__medias">
                            <figure class="menu__medias__media">
                    
                    <img alt="Sepka Rahmadhani" class="menu__medias__image" data-src="/a.jpg" src="/a.jpg" />
                </figure>
                            <figure class="menu__medias__media">
                    
                    <img alt="Sepka Rahmadhani" class="menu__medias__image" data-src="/b.jpg" src="/b.jpg" />
                </figure>
                            <figure class="menu__medias__media">
                    
                    <img alt="Sepka Rahmadhani" class="menu__medias__image" data-src="/c.jpg" src="/c.jpg" />
                </figure>
                            <figure class="menu__medias__media">
                    
                    <img alt="Sepka Rahmadhani" class="menu__medias__image" data-src="/a.jpg" src="/a.jpg" />
                </figure>
                            <figure class="menu__medias__media">
                    
                    <img alt="Sepka Rahmadhani" class="menu__medias__image" data-src="/b.jpg" src="/b.jpg" />
                </figure>
                    </div>`;

html = html.replace(/<div class="menu__medias">[\s\S]*?<\/div>/i, menuMedias);

// 2. Intro gallery
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

html = html.replace(/<div class="intro__gallery">[\s\S]*?<\/div>/i, introGallery);

// 3. Announcements images
const announcements = `<aside class="announcements">
    <ul class="announcements__list">
                    <li class="announcements__item announcements__item--active">
                <a href="#newsletter" class="announcements__link">
                    <figure class="announcements__media">
                        
                        <img
                            alt="Sepka Rahmadhani"
                            class="announcements__image"
                            data-src="/a.jpg"
                            src="/a.jpg"
                            height="100%"
                            width="100%"
                        />
                    </figure>

                    <div class="announcements__content">
                        <div class="announcements__title">
                            icarus merch drops soon. Be the first to know.
                        </div>

                        <span class="announcements__description">Get Updates</span>
                    </div>
                </a>
            </li>
                    <li class="announcements__item ">
                <a href="/" class="announcements__link">
                    <figure class="announcements__media">
                        
                        <img
                            alt="Sepka Rahmadhani"
                            class="announcements__image"
                            data-src="/b.jpg"
                            src="/b.jpg"
                            height="100%"
                            width="100%"
                        />
                    </figure>

                    <div class="announcements__content">
                        <div class="announcements__title">
                            Sepka set to release new EP titled “icarus”
                        </div>

                        <span class="announcements__description">Pre-Save Link</span>
                    </div>
                </a>
            </li>
                    <li class="announcements__item ">
                <a href="https://www.youtube.com/@mattjinn22" class="announcements__link">
                    <figure class="announcements__media">
                        
                        <img
                            alt="Sepka Rahmadhani"
                            class="announcements__image"
                            data-src="/c.jpg"
                            src="/c.jpg"
                            height="100%"
                            width="100%"
                        />
                    </figure>

                    <div class="announcements__content">
                        <div class="announcements__title">
                            “over and over” video streaming now
                        </div>

                        <span class="announcements__description">Watch Now</span>
                    </div>
                </a>
            </li>
            </ul>
</aside>`;

html = html.replace(/<aside class="announcements">[\s\S]*?<\/aside>/i, announcements);

// 4. Newsletter image
const newsletterMedia = `<figure class="newsletter__media">
            
            <img
                alt="Sepka Rahmadhani"
                class="newsletter__image"
                data-src="/a.jpg"
                src="/a.jpg"
                height="100%"
                width="100%"
            />
        </figure>`;

html = html.replace(/<figure class="newsletter__media">[\s\S]*?<\/figure>/i, newsletterMedia);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully replaced all images in index.html with a.jpg, b.jpg, c.jpg');
