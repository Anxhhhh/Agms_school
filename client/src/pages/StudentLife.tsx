
export default function StudentLife() {
  return (
    <>
      <div>
{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/10 transition-all duration-300" id="mainNav">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
<div className="font-headline-md text-headline-md font-bold text-heritage-green">
                Aditya Gyan Mandir
            </div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Home</a>
<a className="text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">About</a>
<a className="text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Academics</a>
<a className="text-academic-gold font-bold border-b-2 border-academic-gold pb-1 font-label-lg text-label-lg uppercase tracking-widest" href="#">Student Life</a>
<a className="text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Gallery</a>
<a className="text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Contact</a>
</div>
<button className="hidden md:block px-6 py-3 bg-heritage-green text-white font-label-lg rounded-full hover:bg-primary-container transition-colors scale-95 active:scale-90 uppercase tracking-widest">
                Admission Open
            </button>
{/* Mobile Menu Button */}
<button className="md:hidden text-heritage-green">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</nav>
{/* Hero Section */}
<section className="pt-[140px] md:pt-[200px] pb-section-gap-mobile md:pb-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative">
<div className="md:col-span-5 z-10">
<h1 className="font-display-lg-mobile md:font-display-lg text-heritage-green mb-6">
                    Beyond the <br/><span className="text-academic-gold italic">Classroom</span>
</h1>
<p className="font-body-lg text-text-muted mb-8 max-w-md">
                    At Aditya Gyan Mandir, education extends far beyond academics. Our vibrant student life programs foster creativity, leadership, and lifelong passions.
                </p>
<div className="flex gap-4">
<button className="px-8 py-4 bg-heritage-green text-white rounded-full font-label-lg uppercase tracking-widest hover:bg-primary-container transition-all shadow-[0_8px_30px_rgb(18,71,46,0.2)]">
                        Explore Activities
                    </button>
</div>
</div>
<div className="md:col-span-7 relative mt-12 md:mt-0">
<div className="absolute -inset-10 bg-surface-cream rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="relative w-full aspect-square md:aspect-[4/3] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] transform translate-x-4 md:translate-x-12">
<img className="w-full h-full object-cover" data-alt="A focused student practicing cello in an orchestra setting, showcasing dedication to music and arts at Aditya Gyan Mandir. The lighting is warm and the mood is concentrated." src="/images/image-45.jpg"/>
</div>
{/* Floating Card */}
<div className="absolute bottom-10 left-0 md:-left-10 glass-panel p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-academic-gold/20 rounded-full flex items-center justify-center text-academic-gold">
<span className="material-symbols-outlined">music_note</span>
</div>
<div>
<p className="font-label-lg text-heritage-green">Over 40+</p>
<p className="font-body-md text-text-muted text-sm">Clubs &amp; Activities</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Curved Divider */}
<div className="w-full overflow-hidden leading-none -mb-1">
<svg className="w-full h-auto text-surface-cream fill-current" preserveAspectRatio="none" viewBox="0 0 1440 120">
<path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"></path>
</svg>
</div>
{/* Core Areas Bento Grid */}
<section className="bg-surface-cream py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-heritage-green mb-4">Discover Your Passion</h2>
<p className="font-body-lg text-text-muted max-w-2xl mx-auto">A diverse range of programs designed to develop well-rounded individuals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
{/* Sports (Large) */}
<div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] group-hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-all duration-500 bg-white">
<div className="absolute inset-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A dynamic shot of a student athlete in action, representing the competitive sports program at Aditya Gyan Mandir. Bright outdoor lighting, active mood." src="/images/image-46.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-heritage-green/90 via-heritage-green/20 to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-12 h-12 bg-academic-gold rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
<span className="material-symbols-outlined">sports_soccer</span>
</div>
<h3 className="font-headline-md text-white mb-2">Athletics</h3>
<p className="font-body-md text-white/80 line-clamp-2 mb-4">From varsity teams to intramural sports, we foster teamwork, discipline, and physical well-being.</p>
<a className="inline-flex items-center gap-2 text-academic-gold font-label-lg uppercase tracking-widest hover:gap-3 transition-all" href="#">
                            View Sports <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
{/* Arts & Music */}
<div className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] bg-white p-6 flex flex-col md:flex-row gap-6 items-center">
<div className="w-full md:w-1/2 h-48 md:h-full rounded-2xl overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Students performing in a music ensemble, showing a trumpet player focused on sheet music. Representing the vibrant arts and music culture." src="/images/image-47.jpg"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<div className="w-10 h-10 bg-heritage-green/10 text-heritage-green rounded-full flex items-center justify-center mb-3">
<span className="material-symbols-outlined">palette</span>
</div>
<h3 className="font-headline-md text-heritage-green mb-2 text-2xl">Fine Arts &amp; Music</h3>
<p className="font-body-md text-text-muted text-sm mb-4">Cultivating creative expression through visual arts, theater, and comprehensive music programs.</p>
</div>
</div>
{/* Cultural & Clubs */}
<div className="group relative overflow-hidden rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] bg-white p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
<div>
<div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-4">
<span className="material-symbols-outlined">public</span>
</div>
<h3 className="font-headline-md text-heritage-green mb-2 text-xl">Clubs &amp; Societies</h3>
<p className="font-body-md text-text-muted text-sm">Debate, Robotics, Environmental Club, and more student-led initiatives.</p>
</div>
<a className="mt-6 inline-flex items-center gap-2 text-heritage-green font-label-lg uppercase tracking-widest group-hover:text-academic-gold transition-colors" href="#">
                        Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/* Events */}
<div className="group relative overflow-hidden rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] bg-heritage-green p-8 flex flex-col justify-between">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/10 text-academic-gold rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
<span className="material-symbols-outlined">event_seat</span>
</div>
<h3 className="font-headline-md text-white mb-2 text-xl">Annual Events</h3>
<p className="font-body-md text-white/70 text-sm">Traditions that bring our entire community together.</p>
</div>
</div>
</div>
</div>
</section>
{/* Photo Gallery Layout */}
<section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="font-headline-lg text-heritage-green mb-4">Life in Action</h2>
<p className="font-body-lg text-text-muted max-w-xl">A glimpse into the daily energy and spirit of our student body.</p>
</div>
{/* Category Filter */}
<div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
<button className="px-6 py-2 bg-heritage-green text-white rounded-full font-label-lg whitespace-nowrap">All</button>
<button className="px-6 py-2 bg-surface-container hover:bg-surface-variant text-text-muted rounded-full font-label-lg whitespace-nowrap transition-colors">Sports</button>
<button className="px-6 py-2 bg-surface-container hover:bg-surface-variant text-text-muted rounded-full font-label-lg whitespace-nowrap transition-colors">Arts</button>
<button className="px-6 py-2 bg-surface-container hover:bg-surface-variant text-text-muted rounded-full font-label-lg whitespace-nowrap transition-colors">Events</button>
</div>
</div>
{/* Masonry-style Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
<div className="md:col-span-1 md:row-span-2 rounded-[32px] overflow-hidden group relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Students participating in a dance or drama rehearsal in a studio setting. Natural light, focused and energetic mood." src="/images/image-48.jpg"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined">zoom_in</span>
</div>
</div>
</div>
<div className="md:col-span-1 md:row-span-1 rounded-full overflow-hidden group relative shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-4 border-white">
<div className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-110" data-alt="A close up of a student's artwork, a detailed painting showing creativity and color. Bright and inspiring." style={{backgroundImage: 'url("/images/image-44.jpg")'}}></div>
<div className="absolute inset-0 bg-heritage-green/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="font-label-lg text-white uppercase tracking-widest">Art Exhibition</span>
</div>
</div>
<div className="md:col-span-1 md:row-span-2 rounded-[32px] overflow-hidden group relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Another angle of the orchestra performance, highlighting the concentration and teamwork of the musicians." src="/images/image-49.jpg"/>
</div>
<div className="md:col-span-1 md:row-span-1 rounded-[32px] overflow-hidden group relative bg-surface-cream p-8 flex flex-col justify-center items-center text-center">
<h4 className="font-headline-md text-academic-gold mb-2">View Full Gallery</h4>
<p className="font-body-md text-text-muted mb-4 text-sm">See more moments from this academic year.</p>
<button className="w-12 h-12 bg-heritage-green rounded-full text-white flex items-center justify-center hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</section>
{/* Footer */}
<footer className="w-full rounded-t-[80px] md:rounded-t-[160px] overflow-hidden bg-heritage-green dark:bg-primary px-margin-mobile md:px-margin-desktop pt-section-gap-mobile md:pt-section-gap-desktop pb-12 mt-20">
<div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-5 gap-gutter">
<div className="md:col-span-2">
<div className="font-headline-lg text-headline-lg text-white mb-4">
                    Aditya Gyan Mandir
                </div>
<p className="font-body-md text-on-primary/80 max-w-sm mb-8">
                    Empowering students to achieve excellence through a balanced education in academics, arts, and athletics.
                </p>
<div className="flex gap-4">
{/* Social placeholders */}
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-heritage-green transition-colors cursor-pointer">
<span className="material-symbols-outlined text-sm">share</span>
</div>
</div>
</div>
<div>
<h4 className="font-label-lg text-academic-gold uppercase tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-4 font-body-md text-on-primary/80">
<li><a className="hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">About School</a></li>
<li><a className="hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Academics</a></li>
<li><a className="hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Facilities</a></li>
</ul>
</div>
<div>
<h4 className="font-label-lg text-academic-gold uppercase tracking-widest mb-6">Student Life</h4>
<ul className="space-y-4 font-body-md text-on-primary/80">
<li><a className="hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Clubs &amp; Societies</a></li>
<li><a className="hover:text-academic-gold transition-all opacity-80 hover:opacity-100 text-academic-gold font-bold" href="#">Student Activities</a></li>
<li><a className="hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Athletics</a></li>
</ul>
</div>
<div>
<h4 className="font-label-lg text-academic-gold uppercase tracking-widest mb-6">Contact Info</h4>
<ul className="space-y-4 font-body-md text-on-primary/80">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-academic-gold text-xl">location_on</span>
<span>123 Education Lane, Academic City, AC 12345</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-academic-gold text-xl">call</span>
<span>(555) 123-4567</span>
</li>
</ul>
</div>
</div>
<div className="max-w-container-max mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-body-md text-sm text-on-primary/60">
                © 2024 Aditya Gyan Mandir. All Rights Reserved. Privacy Policy | Terms of Service
            </p>
</div>
</footer>

</div>
    </>
  );
}
