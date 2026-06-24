
export default function Facilities() {
  return (
    <>
      <div>
{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md dark:bg-transparent transition-all duration-300 border-b border-outline-variant/10" id="navbar">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
<a className="font-headline-md text-headline-md font-bold text-heritage-green dark:text-primary-fixed brand-logo transition-colors duration-300" href="#">
                Aditya Gyan Mandir
            </a>
<div className="hidden md:flex items-center space-x-8">
<a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 nav-link" href="#">Home</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 nav-link" href="#">About</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 nav-link" href="#">Academics</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-academic-gold font-bold border-b-2 border-academic-gold pb-1 nav-link" href="#">Facilities</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 nav-link" href="#">Gallery</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 nav-link" href="#">Contact</a>
</div>
<button className="hidden md:block bg-heritage-green text-on-primary px-6 py-3 rounded-full font-label-lg text-label-lg uppercase tracking-widest hover:bg-academic-gold transition-colors duration-300 scale-95 active:scale-90">
                Admission Open
            </button>
<button className="md:hidden text-heritage-green brand-logo">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</nav>
{/* Hero Section */}
<header className="relative pt-32 pb-section-gap-mobile md:pb-section-gap-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[60vh]">
<div className="col-span-1 md:col-span-5 z-10 reveal">
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-heritage-green mb-6">
                    Campus <br/><span className="text-academic-gold">Facilities</span>
</h1>
<p className="font-body-lg text-body-lg text-text-muted mb-8 max-w-md">
                    Explore our state-of-the-art campus designed to foster academic excellence, physical well-being, and creative expression in a vibrant community setting.
                </p>
<button className="bg-academic-gold text-on-primary px-8 py-4 rounded-full font-label-lg text-label-lg uppercase tracking-widest hover:bg-heritage-green transition-colors duration-300 shadow-lg">
                    Schedule a Tour
                </button>
</div>
<div className="col-span-1 md:col-span-7 relative mt-12 md:mt-0 reveal" style={{transitionDelay: '0.2s'}}>
<div className="w-full aspect-square rounded-full overflow-hidden absolute right-[-10%] top-1/2 transform -translate-y-1/2 md:w-[120%] md:h-[120%] border-8 border-surface-cream">
<img className="w-full h-full object-cover" data-alt="A bright, modern school building exterior with large glass windows and organic architectural curves, surrounded by lush green trees and natural landscaping under a clear blue sky." src="/images/image-23.jpg"/>
</div>
</div>
</div>
</header>
{/* Academic Spaces Showcase (Split Layout) */}
<section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-cream relative">
{/* SVG wave divider top */}
<div className="absolute top-0 left-0 w-full overflow-hidden line-height-0 transform -translate-y-[99%]">
<svg className="w-full h-[60px] fill-surface-cream" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.93,192.39,105.15,235.9,94.74,279.59,78.27,321.39,56.44Z"></path>
</svg>
</div>
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="text-center mb-16 reveal">
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-4">Academic Spaces</h2>
<p className="font-body-lg text-body-lg text-text-muted max-w-2xl mx-auto">Environments tailored for modern learning, collaboration, and discovery.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter md:gap-[80px] items-center mb-32 reveal">
<div className="order-2 md:order-1">
<h3 className="font-headline-md text-headline-md text-heritage-green mb-4 flex items-center">
<span className="material-symbols-outlined text-academic-gold mr-3 text-4xl" style={{fontVariationSettings: '"FILL" 1'}}>laptop_chromebook</span>
                        Smart Classrooms
                    </h3>
<p className="font-body-md text-body-md text-text-muted mb-6">
                        Equipped with interactive flat panels, flexible ergonomic seating, and integrated technology to support dynamic teaching methods and personalized student engagement.
                    </p>
<ul className="space-y-3">
<li className="flex items-center text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-tertiary-container mr-2 text-xl">check_circle</span> Interactive displays in every room
                        </li>
<li className="flex items-center text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-tertiary-container mr-2 text-xl">check_circle</span> Collaborative pod seating
                        </li>
</ul>
</div>
<div className="order-1 md:order-2 rounded-[40px] overflow-hidden soft-shadow h-[400px]">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-alt="A modern smart classroom with flexible modular desks arranged in groups, a large interactive digital whiteboard at the front, and bright natural light streaming in through large windows." src="/images/image-24.jpg"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter md:gap-[80px] items-center reveal">
<div className="rounded-[40px] overflow-hidden soft-shadow h-[400px]">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-alt="A spacious, well-lit school library with modern curved wooden bookshelves, comfortable lounge seating areas in vibrant colors, and students quietly reading and studying near large windows." src="/images/image-25.jpg"/>
</div>
<div className="pl-0 md:pl-12">
<h3 className="font-headline-md text-headline-md text-heritage-green mb-4 flex items-center">
<span className="material-symbols-outlined text-academic-gold mr-3 text-4xl" style={{fontVariationSettings: '"FILL" 1'}}>local_library</span>
                        The Library Media Center
                    </h3>
<p className="font-body-md text-body-md text-text-muted mb-6">
                        A quiet haven for research and reading, featuring an extensive collection of physical volumes alongside comprehensive digital databases and comfortable study alcoves.
                    </p>
<ul className="space-y-3">
<li className="flex items-center text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-tertiary-container mr-2 text-xl">check_circle</span> Extensive digital &amp; print collections
                        </li>
<li className="flex items-center text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-tertiary-container mr-2 text-xl">check_circle</span> Quiet study pods &amp; collaboration rooms
                        </li>
</ul>
</div>
</div>
</div>
</section>
{/* Athletics & Recreation (Bento Grid) */}
<section className="py-section-gap-mobile md:py-section-gap-desktop bg-background px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-4">Athletics &amp; Recreation</h2>
<p className="font-body-lg text-body-lg text-text-muted max-w-2xl mx-auto">Top-tier facilities supporting physical education and competitive sports programs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-2 h-auto md:h-[600px] reveal">
{/* Large Main Card */}
<div className="md:col-span-2 md:row-span-2 rounded-[32px] overflow-hidden relative group">
<img className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" data-alt="A professional-grade indoor basketball court with polished hardwood floors, prominent school branding on the walls, and students actively playing a game." src="/images/image-26.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="bg-academic-gold text-on-primary px-3 py-1 rounded-full font-label-md text-label-md mb-3 inline-block">Featured</span>
<h3 className="font-headline-md text-headline-md text-white mb-2">High Performance Gymnasium</h3>
<p className="font-body-md text-body-md text-white/80">Multi-court indoor facility for basketball, volleyball, and physical education classes.</p>
</div>
</div>
{/* Smaller Cards */}
<div className="bg-surface-cream rounded-[32px] p-8 flex flex-col justify-center soft-shadow group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-academic-gold transition-colors duration-300">
<span className="material-symbols-outlined text-heritage-green text-3xl group-hover:text-white transition-colors duration-300">pool</span>
</div>
<h4 className="font-headline-md text-headline-md text-heritage-green mb-2 text-2xl">Aquatics Center</h4>
<p className="font-body-md text-body-md text-text-muted text-sm">Olympic-sized indoor pool for competitive swimming and water polo.</p>
</div>
<div className="bg-heritage-green rounded-[32px] p-8 flex flex-col justify-center soft-shadow relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz4KPC9zdmc+')] bg-repeat"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-academic-gold text-3xl">sports_tennis</span>
</div>
<h4 className="font-headline-md text-headline-md text-white mb-2 text-2xl">Outdoor Complex</h4>
<p className="font-body-md text-body-md text-white/80 text-sm">Turf fields, tennis courts, and a professional-grade track.</p>
</div>
</div>
</div>
</section>
{/* Additional Amenities (Glassmorphism Cards) */}
<section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low px-margin-mobile md:px-margin-desktop relative">
<div className="max-w-container-max mx-auto">
<h2 className="font-headline-lg text-headline-lg text-heritage-green text-center mb-16 reveal">Campus Amenities</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter reveal">
<div className="bg-white rounded-[24px] p-8 soft-shadow hover:-translate-y-1 transition-transform duration-300">
<div className="mb-6 h-48 rounded-[16px] overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A modern school cafeteria with high ceilings, natural light, contemporary seating options, and a clean, organized serving area with healthy food options." src="/images/image-27.jpg"/>
</div>
<h4 className="font-headline-md text-headline-md text-heritage-green mb-3 text-xl">Dining Hall</h4>
<p className="font-body-md text-body-md text-text-muted text-sm mb-4">Nutritious, chef-prepared meals in a bright, communal space designed to foster social interaction.</p>
</div>
<div className="bg-white rounded-[24px] p-8 soft-shadow hover:-translate-y-1 transition-transform duration-300">
<div className="mb-6 h-48 rounded-[16px] overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A state-of-the-art school auditorium with tiered seating, acoustic wood paneling, professional stage lighting, and a grand piano on stage." src="/images/image-28.jpg"/>
</div>
<h4 className="font-headline-md text-headline-md text-heritage-green mb-3 text-xl">Auditorium</h4>
<p className="font-body-md text-body-md text-text-muted text-sm mb-4">A 500-seat theater featuring professional acoustics and lighting for performances and assemblies.</p>
</div>
<div className="bg-white rounded-[24px] p-8 soft-shadow hover:-translate-y-1 transition-transform duration-300">
<div className="mb-6 h-48 rounded-[16px] overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A dedicated school transportation area showing modern, safe school buses parked in an organized depot with a covered waiting area for students." src="/images/image-29.jpg"/>
</div>
<h4 className="font-headline-md text-headline-md text-heritage-green mb-3 text-xl">Transportation</h4>
<p className="font-body-md text-body-md text-text-muted text-sm mb-4">A modern fleet of safety-equipped buses providing extensive route coverage across the metropolitan area.</p>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-heritage-green dark:bg-primary w-full rounded-t-[80px] md:rounded-t-[160px] overflow-hidden relative mt-12">
<div className="grid grid-cols-1 md:grid-cols-5 gap-gutter px-margin-mobile md:px-margin-desktop pt-16 md:pt-section-gap-desktop pb-12 max-w-container-max mx-auto relative z-10">
<div className="md:col-span-2">
<div className="font-headline-lg text-headline-lg text-white mb-4">Aditya Gyan Mandir</div>
<p className="font-body-md text-body-md text-on-primary/80 mb-6 max-w-sm">Dedicated to excellence in education, fostering intellectual growth and personal character in every student.</p>
</div>
<div>
<h4 className="font-label-lg text-label-lg uppercase tracking-widest text-academic-gold mb-4">Links</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">About School</a></li>
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Academics</a></li>
<li><a className="font-body-md text-body-md text-academic-gold font-bold transition-all opacity-80 hover:opacity-100" href="#">Facilities</a></li>
</ul>
</div>
<div>
<h4 className="font-label-lg text-label-lg uppercase tracking-widest text-academic-gold mb-4">Information</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Quick Links</a></li>
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Contact Info</a></li>
</ul>
</div>
<div className="md:col-span-5 border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="font-body-md text-body-md text-on-primary/60 text-sm">© 2024 Aditya Gyan Mandir. All Rights Reserved. Privacy Policy | Terms of Service</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-academic-gold hover:border-academic-gold transition-colors" href="#">
<span className="material-symbols-outlined text-lg">public</span>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-academic-gold hover:border-academic-gold transition-colors" href="#">
<span className="material-symbols-outlined text-lg">mail</span>
</a>
</div>
</div>
</div>
</footer>

</div>
    </>
  );
}
