const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Restore announcement music artwork icons
const announcements = `<aside class="announcements">
    <ul class="announcements__list">
                    <li class="announcements__item announcements__item--active">
                <a href="#newsletter" class="announcements__link">
                    <figure class="announcements__media">
                        
                        <img
                            alt=""
                            class="announcements__image"
                            data-src="/media/c8cd73abd690d460893cd46a5bf07a3a79a3a539-1440x1440.jpg"
                            src="/media/c8cd73abd690d460893cd46a5bf07a3a79a3a539-1440x1440.jpg"
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
                            alt=""
                            class="announcements__image"
                            data-src="/media/74e8b6f0587203c64fdf3721a54fd3940185645f-1024x1024.png"
                            src="/media/74e8b6f0587203c64fdf3721a54fd3940185645f-1024x1024.png"
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
                            alt=""
                            class="announcements__image"
                            data-src="/media/fea808e234fbc2bb7a64d5695b9a57deaa736774-1000x1000.jpg"
                            src="/media/fea808e234fbc2bb7a64d5695b9a57deaa736774-1000x1000.jpg"
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

// 2. Ensure intro gallery uses /a.jpg, /b.jpg, /c.jpg
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

fs.writeFileSync('index.html', html, 'utf8');
console.log('Restored announcement music cover icons and verified /a.jpg, /b.jpg, /c.jpg in index.html');
