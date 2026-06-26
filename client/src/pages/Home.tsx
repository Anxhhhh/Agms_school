
export default function Home() {
  return (
    <>
      <div>
{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 bg-heritage-green/95 backdrop-blur-md shadow-sm transition-all duration-300 py-4 border-b border-academic-gold/20" id="navbar">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<a className="brand-logo font-headline-md text-headline-md font-bold text-white transition-colors duration-300" href="#">Aditya Gyan Mandir</a>
<div className="hidden md:flex items-center space-x-8">
<a className="nav-link font-label-lg text-label-lg uppercase tracking-widest text-academic-gold font-bold border-b-2 border-academic-gold pb-1 transition-colors duration-300" href="#">Home</a>
<a className="nav-link font-label-lg text-label-lg uppercase tracking-widest text-white hover:text-academic-gold transition-colors duration-200" href="#">About</a>
<a className="nav-link font-label-lg text-label-lg uppercase tracking-widest text-white hover:text-academic-gold transition-colors duration-200" href="#">Academics</a>
<a className="nav-link font-label-lg text-label-lg uppercase tracking-widest text-white hover:text-academic-gold transition-colors duration-200" href="#">Facilities</a>
<a className="nav-link font-label-lg text-label-lg uppercase tracking-widest text-white hover:text-academic-gold transition-colors duration-200" href="#">Gallery</a>
<a className="nav-link font-label-lg text-label-lg uppercase tracking-widest text-white hover:text-academic-gold transition-colors duration-200" href="#">Contact</a>
</div>
<button className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-academic-gold text-white font-label-lg text-label-lg uppercase tracking-widest rounded-full hover:bg-opacity-90 transition-all scale-95 active:scale-90 shadow-soft">
                Admission Open
            </button>
{/* Mobile Menu Toggle */}
<button className="md:hidden text-white brand-logo p-2">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</nav>
{/* Hero Section */}
<section className="relative min-h-screen flex items-center pt-32 pb-section-gap-mobile md:pb-section-gap-desktop overflow-hidden bg-heritage-green">
<div className="absolute inset-0 z-0 opacity-40">
<div className="w-full h-full bg-cover bg-center" data-alt="A sweeping, cinematic aerial view of a lush, modern school campus at sunrise. The soft, golden hour light bathes the sprawling green fields and contemporary academic buildings, creating a warm, inspiring atmosphere. High-end architectural photography style." style={{backgroundImage: 'url("/images/image-36.jpg")'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-heritage-green via-heritage-green/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-6 space-y-8 text-white">
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-balance leading-tight">
                    Inspiring Minds, <br/><span className="text-academic-gold italic font-body-lg text-[1.2em]">Shaping Futures.</span>
</h1>
<p className="font-body-lg text-body-lg text-white/90 max-w-xl">
                    Discover a progressive learning environment where tradition meets innovation. Aditya Gyan Mandir cultivates excellence, character, and a lifelong passion for discovery.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="px-8 py-4 bg-academic-gold text-white font-label-lg text-label-lg uppercase tracking-widest rounded-full hover:bg-white hover:text-heritage-green transition-all duration-300 shadow-soft">
                        Apply Now
                    </button>
<button className="px-8 py-4 bg-transparent border border-white text-white font-label-lg text-label-lg uppercase tracking-widest rounded-full hover:bg-white/10 transition-all duration-300">
                        Explore Campus
                    </button>
</div>
</div>
<div className="lg:col-span-6 relative hidden lg:block h-[700px]">
<div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full overflow-hidden border-8 border-white/10 shadow-float">
<img className="w-full h-full object-cover" data-alt="A candid, high-quality photo of diverse students collaborating enthusiastically around a modern circular table. Bright natural light illuminates the modern classroom setting. The students are engaged, smiling, and pointing at a project, capturing a moment of active learning and joy." src="/images/image-37.jpg"/>
</div>
{/* Decorative Orbit */}
<div className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-academic-gold/30 animate-[spin_60s_linear_infinite] pointer-events-none"></div>
</div>
</div>
{/* Organic Bottom Wave */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
<svg className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="fill-surface-cream" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.28,198.81,108.68Z"></path>
</svg>
</div>
</section>
{/* About School - Split Screen */}
<section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-cream relative">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-float relative z-10">
<img alt="About Aditya Gyan Mandir" className="w-full h-full object-cover" src="/images/image-2.jpg"/>
</div>
<div className="absolute -bottom-8 -left-8 w-64 h-64 bg-academic-gold rounded-full z-0 opacity-20 blur-3xl"></div>
{/* Floating Stat Card */}
<div className="absolute bottom-12 -right-12 bg-white p-6 rounded-2xl shadow-soft z-20 hidden md:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center text-heritage-green">
<span className="material-symbols-outlined">history_edu</span>
</div>
<div>
<p className="font-headline-md text-headline-md text-heritage-green">1950</p>
<p className="font-label-lg text-label-lg text-text-muted uppercase">Year Founded</p>
</div>
</div>
</div>
</div>
<div className="space-y-8 order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high">
<span className="w-2 h-2 rounded-full bg-academic-gold"></span>
<span className="font-label-md text-label-md uppercase tracking-wider text-heritage-green">Our Story</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-heritage-green text-balance">
                    A Legacy of <br/><span className="italic font-body-lg text-[1.1em] text-academic-gold">Academic Excellence</span>
</h2>
<p className="font-body-md text-body-md text-text-muted">
                    At Aditya Gyan Mandir, we believe education is not merely about accumulating knowledge, but about developing the capacity to think critically, act compassionately, and engage authentically with the world. Our curriculum is designed to challenge students while nurturing their individual talents.
                </p>
<p className="font-body-md text-body-md text-text-muted">
                    With a student-to-teacher ratio that ensures personalized attention, our faculty mentors guide each child on their unique educational journey, fostering a community of lifelong learners.
                </p>
<div className="pt-6">
<a className="inline-flex items-center gap-2 font-label-lg text-label-lg uppercase tracking-widest text-heritage-green hover:text-academic-gold transition-colors group" href="#">
                        Discover Our History
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/* Why Choose Us - Bento Grid Style */}
<section className="py-section-gap-mobile md:py-section-gap-desktop bg-white">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<h2 className="font-headline-lg text-headline-lg text-heritage-green">The Aditya Gyan Mandir Advantage</h2>
<p className="font-body-md text-body-md text-text-muted">An ecosystem designed to cultivate holistic growth, intellectual curiosity, and robust character.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Card 1 */}
<div className="bg-surface-cream p-8 rounded-3xl shadow-sm hover:-translate-y-2 transition-all duration-300 group border border-outline-variant/20">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-heritage-green group-hover:text-academic-gold group-hover:bg-heritage-green transition-colors duration-300 mb-6 shadow-sm">
<span className="material-symbols-outlined text-3xl">psychology</span>
</div>
<h3 className="font-headline-md text-2xl mb-3 text-heritage-green">Innovative Curriculum</h3>
<p className="font-body-md text-body-md text-text-muted">Forward-thinking academic programs that blend traditional rigor with modern experiential learning.</p>
</div>
{/* Card 2 */}
<div className="bg-heritage-green p-8 rounded-3xl shadow-sm hover:-translate-y-2 transition-all duration-300 group">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-academic-gold mb-6 backdrop-blur-md">
<span className="material-symbols-outlined text-3xl">diversity_3</span>
</div>
<h3 className="font-headline-md text-2xl mb-3 text-white">Inclusive Community</h3>
<p className="font-body-md text-body-md text-white/80">A diverse and welcoming campus where every student feels valued, heard, and supported.</p>
</div>
{/* Card 3 */}
<div className="bg-surface-cream p-8 rounded-3xl shadow-sm hover:-translate-y-2 transition-all duration-300 group border border-outline-variant/20">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-heritage-green group-hover:text-academic-gold group-hover:bg-heritage-green transition-colors duration-300 mb-6 shadow-sm">
<span className="material-symbols-outlined text-3xl">stadium</span>
</div>
<h3 className="font-headline-md text-2xl mb-3 text-heritage-green">World-Class Facilities</h3>
<p className="font-body-md text-body-md text-text-muted">State-of-the-art laboratories, expansive athletic fields, and dedicated arts centers.</p>
</div>
</div>
</div>
</section>
{/* Principal Message - Elevated Card */}
<section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full bg-heritage-green rounded-l-full opacity-5 pointer-events-none hidden lg:block"></div>
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
<div className="bg-white rounded-[40px] shadow-float p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/3 flex-shrink-0">
<div className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80">
<div className="absolute -inset-4 rounded-full border-4 border-academic-gold/30"></div>
<img alt="Principal" className="w-full h-full object-cover rounded-full relative z-10 shadow-soft transition-all duration-500" src="/images/image-3.jpg"/>
</div>
</div>
<div className="lg:w-2/3 space-y-6 text-center lg:text-left">
<span className="material-symbols-outlined text-5xl text-academic-gold/40 block">format_quote</span>
<p className="font-body-lg text-body-lg md:text-2xl italic text-heritage-green leading-relaxed text-balance">
                        "Education is the most powerful catalyst for change. At Aditya Gyan Mandir, we are not just preparing students for college; we are preparing them for life. We nurture resilience, spark curiosity, and build the ethical foundation needed to lead in a complex world."
                    </p>
<div>
<h4 className="font-headline-md text-xl text-heritage-green">Dr. Sarah Jenkins</h4>
<p className="font-label-lg text-label-lg text-text-muted uppercase mt-1">Head of School</p>
</div>
</div>
</div>
</div>
</section>
{/* Campus Life & Activities - Masonry / Asymmetric */}
<section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-cream">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl space-y-4">
<h2 className="font-headline-lg text-headline-lg text-heritage-green">Vibrant Campus Life</h2>
<p className="font-body-md text-body-md text-text-muted">Beyond the classroom, our students engage in a rich tapestry of arts, athletics, and extracurricular pursuits.</p>
</div>
<button className="flex-shrink-0 px-6 py-3 border border-heritage-green text-heritage-green font-label-lg text-label-lg uppercase tracking-widest rounded-full hover:bg-heritage-green hover:text-white transition-colors duration-300">
                    View All Activities
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
{/* Large Image - Fine Arts */}
<div className="md:col-span-8 relative rounded-[32px] overflow-hidden group">
<img alt="Fine Arts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/image-40.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<span className="px-3 py-1 bg-academic-gold text-xs font-label-lg uppercase tracking-wider rounded-full mb-3 inline-block">Arts</span>
<h3 className="font-headline-md text-2xl">Creative Expression</h3>
</div>
</div>
<div className="md:col-span-4 flex flex-col gap-6">
{/* Medium Image - Athletics */}
<div className="flex-1 relative rounded-[32px] overflow-hidden group">
<img alt="Athletics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/image-41.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="px-3 py-1 bg-heritage-green text-xs font-label-lg uppercase tracking-wider rounded-full mb-2 inline-block">Athletics</span>
<h3 className="font-headline-md text-xl">Championship Spirit</h3>
</div>
</div>
{/* Medium Image - STEM */}
<div className="flex-1 relative rounded-[32px] overflow-hidden group">
<img alt="STEM" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/image-42.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="px-3 py-1 bg-surface-container-low text-heritage-green text-xs font-label-lg uppercase tracking-wider rounded-full mb-2 inline-block">STEM</span>
<h3 className="font-headline-md text-xl">Innovation Labs</h3>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Facilities Preview - Full Width */}
<section className="py-section-gap-mobile md:py-section-gap-desktop bg-white overflow-hidden">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 text-center">
<h2 className="font-headline-lg text-headline-lg text-heritage-green">Inspiring Spaces</h2>
</div>
<div className="relative w-full h-[60vh] min-h-[500px] group">
<img alt="Facilities" className="w-full h-full object-cover" src="/images/image-43.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl text-center max-w-md mx-4 shadow-float transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<h3 className="font-headline-md text-2xl text-heritage-green mb-2">Modern Architecture</h3>
<p className="font-body-md text-body-md text-text-muted mb-6">Designed to maximize natural light and collaborative learning.</p>
<a className="inline-flex items-center gap-2 font-label-lg text-label-lg uppercase tracking-widest text-academic-gold hover:text-heritage-green transition-colors" href="#">
                        Take a Virtual Tour <span className="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
</div>
</div>
</section>
{/* High-Converting CTA */}
<section className="py-24 bg-heritage-green relative overflow-hidden">
{/* Abstract Shapes */}
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[50%] -right-[10%] w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl"></div>
<div className="absolute -bottom-[50%] -left-[10%] w-[600px] h-[600px] rounded-full bg-academic-gold/10 blur-3xl"></div>
</div>
<div className="max-w-4xl mx-auto px-margin-mobile text-center relative z-10 space-y-8 text-white">
<h2 className="font-display-lg-mobile md:font-display-lg text-balance">Begin Your Journey <br/>at Aditya Gyan Mandir</h2>
<p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto">
                Admissions for the upcoming academic year are now open. Join a community dedicated to excellence.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
<button className="px-8 py-4 bg-academic-gold text-white font-label-lg text-label-lg uppercase tracking-widest rounded-full hover:bg-white hover:text-heritage-green transition-all duration-300 shadow-soft">
                    Start Application
                </button>
<button className="px-8 py-4 bg-transparent border border-white/30 text-white font-label-lg text-label-lg uppercase tracking-widest rounded-full hover:bg-white/10 transition-all duration-300">
                    Request Information
                </button>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-heritage-green dark:bg-primary text-on-primary w-full rounded-t-[100px] md:rounded-t-[160px] overflow-hidden mt-[-40px] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
<div className="grid grid-cols-1 md:grid-cols-5 gap-gutter px-margin-mobile md:px-margin-desktop pt-section-gap-mobile md:pt-section-gap-desktop pb-12 max-w-container-max mx-auto">
<div className="md:col-span-2 space-y-6">
<div className="font-headline-lg text-headline-lg text-white mb-4">Aditya Gyan Mandir</div>
<p className="font-body-md text-body-md text-on-primary/80 max-w-sm">
                    Empowering students to achieve their highest potential in a supportive, innovative, and inclusive environment.
                </p>
<div className="flex space-x-4 pt-4">
{/* Social Icons placeholders */}
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-academic-gold transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-academic-gold transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-academic-gold transition-colors" href="#"><span className="material-symbols-outlined">play_arrow</span></a>
</div>
</div>
<div className="space-y-4">
<h4 className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-3 font-body-md text-body-md">
<li><a className="text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">About School</a></li>
<li><a className="text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Academics</a></li>
<li><a className="text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Facilities</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest mb-6">Admissions</h4>
<ul className="space-y-3 font-body-md text-body-md">
<li><a className="text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Apply Now</a></li>
<li><a className="text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Tuition &amp; Aid</a></li>
<li><a className="text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Visit Campus</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest mb-6">Contact Info</h4>
<ul className="space-y-3 font-body-md text-body-md text-on-primary/80">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-[20px] text-academic-gold">location_on</span>
<span>123 Academic Way,<br/>Education City, ST 12345</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-academic-gold">call</span>
<span>(555) 123-4567</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-academic-gold">mail</span>
<span>info@adityagyanmandir.edu</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 mt-12">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 text-center md:text-left font-label-md text-label-md text-on-primary/60">
                © 2024 Aditya Gyan Mandir. All Rights Reserved. Privacy Policy | Terms of Service
            </div>
</div>
</footer>
{/* Interactive Script for Navbar */}

</div>
    </>
  );
}

