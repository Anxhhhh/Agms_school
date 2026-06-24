
export default function Gallery() {
  return (
    <>
      <div>
{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md dark:bg-transparent transition-all duration-300 border-b border-outline-variant/10" id="main-nav">
<div className="flex justify-between items-center px-margin-desktop py-6 max-w-container-max mx-auto">
<a className="font-headline-md text-headline-md font-bold text-heritage-green dark:text-primary-fixed" href="#">
                Aditya Gyan Mandir
            </a>
<div className="hidden md:flex space-x-8 items-center">
<a className="text-heritage-green dark:text-on-primary-fixed-variant font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Home</a>
<a className="text-heritage-green dark:text-on-primary-fixed-variant font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">About</a>
<a className="text-heritage-green dark:text-on-primary-fixed-variant font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Academics</a>
<a className="text-heritage-green dark:text-on-primary-fixed-variant font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Facilities</a>
<a className="text-academic-gold font-bold border-b-2 border-academic-gold pb-1 font-label-lg text-label-lg uppercase tracking-widest" href="#">Gallery</a>
<a className="text-heritage-green dark:text-on-primary-fixed-variant font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Contact</a>
</div>
<button className="hidden md:block bg-heritage-green text-white px-6 py-3 rounded-full font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary-container transition-colors scale-95 active:scale-90">
                Admission Open
            </button>
<button className="md:hidden text-heritage-green">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</nav>
{/* Page Header */}
<header className="pt-40 pb-20 px-margin-desktop max-w-container-max mx-auto text-center relative z-10">
<h1 className="font-display-lg text-display-lg text-heritage-green mb-6">Our Campus Life</h1>
<p className="font-body-lg text-body-lg text-text-muted max-w-2xl mx-auto">
            Explore the vibrant moments, academic excellence, and dynamic community that define the Aditya Gyan Mandir experience.
        </p>
</header>
{/* Gallery Section */}
<section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap-desktop">
{/* Filters */}
<div className="flex flex-wrap justify-center gap-4 mb-12" id="gallery-filters">
<button className="gallery-filter active px-6 py-2 rounded-full border border-outline-variant font-label-lg text-label-lg uppercase tracking-widest transition-all duration-300" data-filter="all">All</button>
<button className="gallery-filter px-6 py-2 rounded-full border border-outline-variant text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:bg-surface-variant transition-all duration-300" data-filter="campus">Campus</button>
<button className="gallery-filter px-6 py-2 rounded-full border border-outline-variant text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:bg-surface-variant transition-all duration-300" data-filter="academics">Academics</button>
<button className="gallery-filter px-6 py-2 rounded-full border border-outline-variant text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:bg-surface-variant transition-all duration-300" data-filter="sports">Sports</button>
</div>
{/* Masonry Grid */}
<div className="masonry-grid" id="gallery-grid">
{/* Item 1: Circle shaped */}
<div className="masonry-item fade-up-enter" data-category="campus">
<div className="relative group cursor-pointer overflow-hidden rounded-full aspect-square w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300" onClick={() => {}}>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Two young female students engaged in a playful learning activity on a colorful classroom floor mat. One girl is reaching for colorful geometric shapes. Warm, bright, educational atmosphere." src="/images/image-30.jpg"/>
<div className="absolute inset-0 bg-heritage-green/0 group-hover:bg-heritage-green/20 transition-colors duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl">zoom_in</span>
</div>
</div>
</div>
{/* Item 2: Standard Rounded */}
<div className="masonry-item fade-up-enter" data-category="academics" style={{transitionDelay: '100ms'}}>
<div className="relative group cursor-pointer overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300" onClick={() => {}}>
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A male teacher with glasses helping a smiling young female student with her textbook and drawing in a brightly lit classroom. Other students work in the background. Focused, academic, supportive environment." src="/images/image-31.jpg"/>
<div className="absolute inset-0 bg-heritage-green/0 group-hover:bg-heritage-green/20 transition-colors duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl">zoom_in</span>
</div>
</div>
</div>
{/* Item 3: Standard Rounded */}
<div className="masonry-item fade-up-enter" data-category="sports" style={{transitionDelay: '200ms'}}>
<div className="relative group cursor-pointer overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300" onClick={() => {}}>
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A diverse group of high school female lacrosse players cheering and raising their sticks together on a bright sunny green field. Wearing dark green team uniforms. Energetic, team spirit, athletic." src="/images/image-32.jpg"/>
<div className="absolute inset-0 bg-heritage-green/0 group-hover:bg-heritage-green/20 transition-colors duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl">zoom_in</span>
</div>
</div>
</div>
{/* Item 4: Standard Rounded */}
<div className="masonry-item fade-up-enter" data-category="campus" style={{transitionDelay: '300ms'}}>
<div className="relative group cursor-pointer overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300" onClick={() => {}}>
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A wide architectural shot of a modern school building with large glass windows and lush green trees in the foreground. Sunny day, clear blue sky. Progressive institutional design." src="/images/image-33.jpg"/>
<div className="absolute inset-0 bg-heritage-green/0 group-hover:bg-heritage-green/20 transition-colors duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl">zoom_in</span>
</div>
</div>
</div>
{/* Item 5: Circle shaped */}
<div className="masonry-item fade-up-enter" data-category="academics" style={{transitionDelay: '400ms'}}>
<div className="relative group cursor-pointer overflow-hidden rounded-full aspect-square w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300" onClick={() => {}}>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up of a student's hands carefully mixing colorful liquids in glass beakers during a chemistry lab experiment. Bright lab setting, focused academic detail." src="/images/image-34.jpg"/>
<div className="absolute inset-0 bg-heritage-green/0 group-hover:bg-heritage-green/20 transition-colors duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl">zoom_in</span>
</div>
</div>
</div>
{/* Item 6: Standard Rounded */}
<div className="masonry-item fade-up-enter" data-category="sports" style={{transitionDelay: '500ms'}}>
<div className="relative group cursor-pointer overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300" onClick={() => {}}>
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" data-alt="High school boys playing basketball in a modern indoor gymnasium. Action shot of a player jumping for a layup. Polished wood floors, bright gym lighting. Athletic and competitive." src="/images/image-35.jpg"/>
<div className="absolute inset-0 bg-heritage-green/0 group-hover:bg-heritage-green/20 transition-colors duration-300 flex items-center justify-center">
<span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-4xl">zoom_in</span>
</div>
</div>
</div>
</div>
</section>
{/* Fullscreen Lightbox */}
<div className="fixed inset-0 z-[100] bg-on-surface/95 backdrop-blur-sm hidden flex-col items-center justify-center opacity-0 transition-opacity duration-300" id="lightbox">
<button className="absolute top-8 right-8 text-white hover:text-academic-gold transition-colors p-2" onClick={() => {}}>
<span className="material-symbols-outlined text-4xl">close</span>
</button>
<div className="max-w-5xl max-h-[819px] px-4 w-full flex justify-center items-center">
<img alt="Gallery Preview" className="max-w-full max-h-[819px] object-contain rounded-lg shadow-2xl scale-95 transition-transform duration-300" id="lightbox-img" src=""/>
</div>
</div>
{/* Footer */}
<footer className="bg-heritage-green dark:bg-primary w-full rounded-t-[160px] overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-5 gap-gutter px-margin-desktop pt-section-gap-desktop pb-12 max-w-container-max mx-auto">
<div className="md:col-span-2">
<h2 className="font-headline-lg text-headline-lg text-white mb-4">Aditya Gyan Mandir</h2>
<p className="font-body-md text-body-md text-on-primary/80 max-w-sm mb-8">Nurturing minds, inspiring futures. Join our vibrant community of learners and leaders.</p>
</div>
<div className="flex flex-col space-y-4">
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">About School</a>
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Academics</a>
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Facilities</a>
</div>
<div className="flex flex-col space-y-4">
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Quick Links</a>
<a className="font-body-md text-body-md text-academic-gold font-bold" href="#">Gallery</a>
</div>
<div className="flex flex-col space-y-4">
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Contact Info</a>
</div>
</div>
<div className="border-t border-white/10 px-margin-desktop py-6">
<p className="text-center font-body-md text-body-md text-on-primary/60 text-sm">© 2024 Aditya Gyan Mandir. All Rights Reserved. Privacy Policy | Terms of Service</p>
</div>
</footer>

</div>
    </>
  );
}

