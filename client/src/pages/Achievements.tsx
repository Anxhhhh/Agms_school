
export default function Achievements() {
  return (
    <>
      <div>
{/* Navigation Header */}
<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/10 transition-all duration-300" id="main-nav">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
<a className="font-headline-md text-headline-md font-bold text-heritage-green" href="#">Aditya Gyan Mandir</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Home</a>
<a className="text-academic-gold font-bold border-b-2 border-academic-gold pb-1 font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">About</a>
<a className="text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Academics</a>
<a className="text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Facilities</a>
<a className="text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Gallery</a>
<a className="text-heritage-green font-label-lg text-label-lg uppercase tracking-widest hover:text-academic-gold transition-colors duration-200" href="#">Contact</a>
</nav>
<button className="hidden md:block px-6 py-3 bg-heritage-green text-on-primary font-label-lg text-label-lg uppercase tracking-widest rounded-full hover:bg-tertiary transition-colors scale-95 active:scale-90 shadow-ambient">
                Admission Open
            </button>
<button className="md:hidden text-heritage-green">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</header>
<main className="pt-32">
{/* Hero Section */}
<section className="relative px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap-mobile md:py-20 flex flex-col md:flex-row items-center gap-gutter min-h-[70vh]">
<div className="w-full md:w-1/2 z-10 reveal-up">
<span className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest mb-4 block">Legacy of Excellence</span>
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-heritage-green mb-6 leading-tight">Celebrating <br/>Our Triumphs</h1>
<p className="font-body-lg text-body-lg text-text-muted mb-10 max-w-lg">
                    At Aditya Gyan Mandir, achievements are not just accolades; they are milestones in our continuous pursuit of brilliance across academics, athletics, and the arts.
                </p>
<div className="flex gap-4">
<a className="px-8 py-4 bg-heritage-green text-on-primary font-label-lg text-label-lg uppercase tracking-widest rounded-full hover:bg-tertiary transition-colors shadow-ambient inline-flex items-center gap-2" href="#gallery">
                        View Hall of Fame <span className="material-symbols-outlined text-sm">arrow_downward</span>
</a>
</div>
</div>
<div className="w-full md:w-1/2 relative h-[500px] md:h-[700px] flex justify-end items-center reveal-up" style={{transitionDelay: '0.2s'}}>
{/* Massive Circular Frame per Style Guidelines */}
<div className="absolute right-0 w-[120%] aspect-square rounded-full overflow-hidden shadow-ambient translate-x-1/4">
<img className="w-full h-full object-cover object-center" data-alt="A diverse group of triumphant high school students holding a gleaming academic trophy aloft, illuminated by bright, natural sunlight on a manicured green campus. The scene embodies a modern, premium educational environment with a joyous, energetic mood and high-end editorial photography style." src="/images/image-8.jpg"/>
</div>
</div>
</section>
{/* Animated Statistics Section with Heritage Green Background & Organic Curve */}
<section className="bg-heritage-green text-on-primary relative py-section-gap-mobile md:py-section-gap-desktop organic-curve-bottom mt-20 mb-32">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div className="reveal-up">
<span className="block font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-academic-gold mb-2 counter" data-target="150">0</span>
<span className="font-label-lg text-label-lg uppercase tracking-widest opacity-80">Ivy League Admits</span>
</div>
<div className="reveal-up" style={{transitionDelay: '0.1s'}}>
<span className="block font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-academic-gold mb-2 counter" data-target="45">0</span>
<span className="font-label-lg text-label-lg uppercase tracking-widest opacity-80">National Titles</span>
</div>
<div className="reveal-up" style={{transitionDelay: '0.2s'}}>
<span className="block font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-academic-gold mb-2 counter" data-target="100">0</span>
<span className="font-label-lg text-label-lg uppercase tracking-widest opacity-80">% Graduation Rate</span>
</div>
<div className="reveal-up" style={{transitionDelay: '0.3s'}}>
<span className="block font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-academic-gold mb-2"><span className="counter" data-target="2">0</span>M+</span>
<span className="font-label-lg text-label-lg uppercase tracking-widest opacity-80">Scholarships Awarded</span>
</div>
</div>
</div>
</section>
{/* High-Impact Cards (Academic & Sports) */}
<section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap-mobile md:py-section-gap-desktop" id="gallery">
<div className="text-center mb-16 reveal-up">
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-4">Pillars of Excellence</h2>
<p className="font-body-lg text-body-lg text-text-muted max-w-2xl mx-auto">Discover the outstanding achievements shaping our students' futures across distinct disciplines.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/* Academic Card */}
<div className="bg-surface-cream rounded-[24px] overflow-hidden shadow-ambient group hover:-translate-y-2 transition-transform duration-500 reveal-up">
<div className="h-[400px] w-full overflow-hidden">
<img alt="Academic Achievement" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/image-9.jpg"/>
</div>
<div className="p-10 relative bg-surface-cream">
<div className="w-16 h-16 bg-academic-gold rounded-full flex items-center justify-center absolute -top-8 right-10 shadow-ambient text-white">
<span className="material-symbols-outlined text-3xl">science</span>
</div>
<h3 className="font-headline-md text-headline-md text-heritage-green mb-3">Robotics World Champions</h3>
<p className="font-body-md text-body-md text-text-muted mb-6">Our senior engineering team secured first place globally, demonstrating unparalleled innovation and teamwork in autonomous design.</p>
<a className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest hover:text-heritage-green transition-colors inline-flex items-center gap-1 group-hover:gap-2 duration-300" href="#">
                            Read Story <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
{/* Sports Card */}
<div className="bg-surface-cream rounded-[24px] overflow-hidden shadow-ambient group hover:-translate-y-2 transition-transform duration-500 reveal-up" style={{transitionDelay: '0.2s'}}>
<div className="h-[400px] w-full overflow-hidden">
<img alt="Athletic Achievement" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/image-10.jpg" style={{objectPosition: 'top'}}/>
</div>
<div className="p-10 relative bg-surface-cream">
<div className="w-16 h-16 bg-academic-gold rounded-full flex items-center justify-center absolute -top-8 right-10 shadow-ambient text-white">
<span className="material-symbols-outlined text-3xl">sports_gymnastics</span>
</div>
<h3 className="font-headline-md text-headline-md text-heritage-green mb-3">Record-Breaking Athletics</h3>
<p className="font-body-md text-body-md text-text-muted mb-6">Shattering state records in track and field, our athletes showcase dedication, resilience, and the spirit of true sportsmanship.</p>
<a className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest hover:text-heritage-green transition-colors inline-flex items-center gap-1 group-hover:gap-2 duration-300" href="#">
                            View Roster <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/* Masonry Awards Gallery */}
<section className="bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
<div className="max-w-xl">
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-4">Awards &amp; Recognition</h2>
<p className="font-body-lg text-body-lg text-text-muted">A visual celebration of the moments that define our standard of excellence.</p>
</div>
<a className="mt-6 md:mt-0 px-6 py-3 border-2 border-heritage-green text-heritage-green font-label-lg text-label-lg uppercase tracking-widest rounded-full hover:bg-heritage-green hover:text-on-primary transition-colors" href="#">
                        View All Galleries
                    </a>
</div>
{/* Masonry Grid with 3rd item circular rule */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
<div className="rounded-[16px] overflow-hidden shadow-ambient h-[400px] reveal-up">
<img className="w-full h-full object-cover" data-alt="A close-up shot of a polished gold medal with intricate academic engravings resting on a rich dark green velvet fabric, soft directional lighting highlighting its prestige in a refined editorial style." src="/images/image-11.jpg"/>
</div>
<div className="rounded-[16px] overflow-hidden shadow-ambient h-[500px] reveal-up" style={{transitionDelay: '0.1s'}}>
<img className="w-full h-full object-cover" data-alt="A confident young female student in a sharp blazer standing at a debate podium, passionately gesturing while speaking, softly blurred audience in the background, conveying intelligence and leadership in a well-lit modern auditorium." src="/images/image-12.jpg"/>
</div>
{/* Every third image clipped into a perfect circle */}
<div className="rounded-full overflow-hidden shadow-ambient aspect-square w-[80%] mx-auto reveal-up" style={{transitionDelay: '0.2s'}}>
<img className="w-full h-full object-cover" data-alt="An abstract, artistic top-down view of hands working together over a blueprint and architectural model, warm bright lighting, conveying collaboration, creativity, and structural design in a modern studio environment." src="/images/image-13.jpg"/>
</div>
<div className="rounded-[16px] overflow-hidden shadow-ambient h-[350px] reveal-up">
<img className="w-full h-full object-cover object-top" data-alt="A theatrical stage bathed in dramatic spotlight, showing two students in elaborate period costumes performing an emotional scene, capturing the artistic excellence and high production value of the school's drama department." src="/images/image-14.jpg"/>
</div>
<div className="rounded-[16px] overflow-hidden shadow-ambient h-[450px] reveal-up" style={{transitionDelay: '0.1s'}}>
<img className="w-full h-full object-cover" data-alt="A stunning modern art piece created by a student, displayed in a bright white minimalist gallery setting. The artwork features vibrant organic shapes on canvas, exuding creativity and high-end aesthetic presentation." src="/images/image-15.jpg"/>
</div>
{/* Every third image clipped into a perfect circle */}
<div className="rounded-full overflow-hidden shadow-ambient aspect-square w-[80%] mx-auto reveal-up" style={{transitionDelay: '0.2s'}}>
<img className="w-full h-full object-cover" data-alt="A dynamic action shot of a soccer ball perfectly caught in the upper corner of a net against a clear blue sky, capturing the precise moment of victory in a high-stakes athletic competition." src="/images/image-16.jpg"/>
</div>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-heritage-green w-full rounded-t-[160px] overflow-hidden mt-20 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-5 gap-gutter px-margin-mobile md:px-margin-desktop pt-section-gap-desktop pb-12 max-w-container-max mx-auto">
<div className="md:col-span-2">
<div className="font-headline-lg text-headline-lg text-white mb-4">Aditya Gyan Mandir</div>
<p className="font-body-md text-body-md text-on-primary/80 max-w-md mb-8">Empowering minds, building character, and inspiring futures since 1950.</p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest mb-2">Explore</h4>
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">About School</a>
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Quick Links</a>
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Academics</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest mb-2">Campus</h4>
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Facilities</a>
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Student Life</a>
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Athletics</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest mb-2">Connect</h4>
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Contact Info</a>
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Admissions</a>
</div>
<div className="col-span-1 md:col-span-5 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-body-md text-body-md text-on-primary/60 text-sm">© 2024 Aditya Gyan Mandir. All Rights Reserved. Privacy Policy | Terms of Service</p>
<div className="flex gap-4">
{/* Social placeholders */}
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-academic-gold hover:border-academic-gold transition-colors cursor-pointer"><span className="material-symbols-outlined text-sm">share</span></div>
</div>
</div>
</div>
</footer>
{/* Interactive Scripts */}

</div>
    </>
  );
}
