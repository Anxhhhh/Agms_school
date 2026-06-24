
export default function Academics() {
  return (
    <>
      <div>
{/* TopNavBar */}
<nav className="fixed top-0 w-full z-50 transition-all duration-300 nav-transparent py-6 px-margin-mobile md:px-margin-desktop" id="main-nav">
<div className="max-w-container-max mx-auto flex justify-between items-center">
<a className="font-headline-md text-headline-md font-bold nav-text transition-colors duration-300 tracking-tight" href="#">
                Aditya Gyan Mandir
            </a>
<div className="hidden md:flex space-x-8 items-center">
<a className="font-label-lg text-label-lg uppercase tracking-widest nav-text opacity-80 hover:opacity-100 hover:text-academic-gold transition-colors duration-200" href="#">Home</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest nav-text opacity-80 hover:opacity-100 hover:text-academic-gold transition-colors duration-200" href="#">About</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-academic-gold font-bold border-b-2 border-academic-gold pb-1 transition-colors duration-200" href="#">Academics</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest nav-text opacity-80 hover:opacity-100 hover:text-academic-gold transition-colors duration-200" href="#">Facilities</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest nav-text opacity-80 hover:opacity-100 hover:text-academic-gold transition-colors duration-200" href="#">Gallery</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest nav-text opacity-80 hover:opacity-100 hover:text-academic-gold transition-colors duration-200" href="#">Contact</a>
</div>
<button className="hidden md:block bg-academic-gold text-white px-6 py-3 rounded-full font-label-lg text-label-lg uppercase tracking-widest hover:bg-heritage-green transition-colors duration-300 transform scale-95 active:scale-90 shadow-md">
                Admission Open
            </button>
{/* Mobile Menu Button */}
<button className="md:hidden nav-text">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</nav>
{/* Hero Section */}
<section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden bg-heritage-green">
<div className="absolute inset-0 bg-gradient-to-r from-heritage-green to-primary-container opacity-90 z-0"></div>
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="text-white pr-0 md:pr-12">
<div className="inline-block px-4 py-1 border border-academic-gold/30 rounded-full text-academic-gold font-label-lg text-label-lg uppercase tracking-widest mb-6">
                    Our Curriculum
                </div>
<h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg font-bold mb-6 text-white leading-tight">
                    Academic Excellence <br/><span className="text-academic-gold italic font-source-serif font-light">&amp;</span> Intellectual Growth
                </h1>
<p className="font-body-lg text-body-lg text-white/80 mb-10 max-w-xl">
                    We foster a progressive, student-centered learning environment that balances rigorous traditional academics with innovative methodologies to prepare global citizens.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-academic-gold text-white px-8 py-4 rounded-full font-label-lg text-label-lg uppercase tracking-widest hover:bg-white hover:text-heritage-green transition-all duration-300 shadow-lg">
                        Explore Programs
                    </button>
<button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-label-lg text-label-lg uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
                        View Pedagogy
                    </button>
</div>
</div>
<div className="relative h-[600px] hidden md:block">
{/* Massive Circular Frame overlapping bounds */}
<div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
<img alt="Students engaging in a 7th grade science lab experiment in a modern classroom setting." className="w-full h-full object-cover" src="/images/image-6.jpg"/>
</div>
{/* Decorative element */}
<div className="absolute -bottom-10 right-20 w-32 h-32 bg-academic-gold rounded-full flex items-center justify-center text-white text-center p-4 shadow-xl z-20">
<span className="font-dm-sans font-bold text-sm tracking-widest uppercase">Inspiring<br/>Minds</span>
</div>
</div>
</div>
{/* Organic transition to next section */}
<div className="absolute bottom-0 w-full h-24 bg-surface-cream" style={{clipPath: 'ellipse(70% 100% at 50% 100%)'}}></div>
</section>
{/* Academic Philosophy */}
<section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-cream">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-5 order-2 lg:order-1 relative">
<div className="aspect-[4/5] rounded-full overflow-hidden shadow-2xl relative z-10">
<img alt="Upper school students participating in a collaborative academic discussion in a bright, modern learning space." className="w-full h-full object-cover" src="/images/image-7.jpg"/>
</div>
{/* Decorative abstract shape behind */}
<div className="absolute -top-10 -left-10 w-full h-full rounded-full border border-heritage-green/10 z-0"></div>
</div>
<div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 mb-12 lg:mb-0">
<h2 className="font-headline-lg text-headline-lg text-heritage-green font-bold mb-6">Our Academic Philosophy</h2>
<p className="font-body-lg text-body-lg text-text-muted mb-8">
                        At Aditya Gyan Mandir, we believe education is not merely the transmission of facts, but the ignition of curiosity. Our approach integrates rigorous academic standards with progressive, holistic methodologies.
                    </p>
<div className="space-y-8">
<div className="flex items-start">
<div className="w-12 h-12 rounded-full bg-heritage-green/10 flex items-center justify-center mr-6 shrink-0 text-heritage-green">
<span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>psychology</span>
</div>
<div>
<h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">Inquiry-Based Learning</h3>
<p className="font-body-md text-text-muted">Encouraging students to ask questions, investigate, and construct their own understanding of the world.</p>
</div>
</div>
<div className="flex items-start">
<div className="w-12 h-12 rounded-full bg-academic-gold/10 flex items-center justify-center mr-6 shrink-0 text-academic-gold">
<span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>diversity_3</span>
</div>
<div>
<h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">Collaborative Environment</h3>
<p className="font-body-md text-text-muted">Fostering teamwork and communication skills through group projects and peer-to-peer learning experiences.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Curriculum Overview Bento Grid */}
<section className="py-section-gap-mobile md:py-section-gap-desktop bg-white relative">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="font-headline-lg text-headline-lg text-heritage-green font-bold mb-6">Curriculum Pathways</h2>
<p className="font-body-lg text-body-lg text-text-muted">
                    A cohesive, developmental journey from early childhood through young adulthood, designed to challenge and support every student.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Pre-Primary */}
<div className="bg-surface-cream p-10 rounded-3xl soft-shadow group hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-heritage-green/10">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-academic-gold transition-colors duration-300">
<span className="material-symbols-outlined text-3xl text-heritage-green group-hover:text-white" style={{fontVariationSettings: '"FILL" 0'}}>toys_and_games</span>
</div>
<h3 className="font-headline-md text-2xl font-bold text-heritage-green mb-4">Pre-Primary</h3>
<p className="font-body-md text-text-muted mb-6">
                        Play-based learning focusing on sensory exploration, social skills, and foundational cognitive development.
                    </p>
<a className="inline-flex items-center text-academic-gold font-label-lg uppercase tracking-widest text-sm hover:text-heritage-green transition-colors" href="#">
                        Learn More <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
</a>
</div>
{/* Primary */}
<div className="bg-surface-cream p-10 rounded-3xl soft-shadow group hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-heritage-green/10 lg:translate-y-8">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-academic-gold transition-colors duration-300">
<span className="material-symbols-outlined text-3xl text-heritage-green group-hover:text-white" style={{fontVariationSettings: '"FILL" 0'}}>school</span>
</div>
<h3 className="font-headline-md text-2xl font-bold text-heritage-green mb-4">Primary</h3>
<p className="font-body-md text-text-muted mb-6">
                        Establishing strong literacy and numeracy foundations while nurturing creativity and critical thinking.
                    </p>
<a className="inline-flex items-center text-academic-gold font-label-lg uppercase tracking-widest text-sm hover:text-heritage-green transition-colors" href="#">
                        Learn More <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
</a>
</div>
{/* Middle */}
<div className="bg-surface-cream p-10 rounded-3xl soft-shadow group hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-heritage-green/10">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-academic-gold transition-colors duration-300">
<span className="material-symbols-outlined text-3xl text-heritage-green group-hover:text-white" style={{fontVariationSettings: '"FILL" 0'}}>menu_book</span>
</div>
<h3 className="font-headline-md text-2xl font-bold text-heritage-green mb-4">Middle School</h3>
<p className="font-body-md text-text-muted mb-6">
                        Expanding subject depth and fostering independence during crucial transitional years of early adolescence.
                    </p>
<a className="inline-flex items-center text-academic-gold font-label-lg uppercase tracking-widest text-sm hover:text-heritage-green transition-colors" href="#">
                        Learn More <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
</a>
</div>
{/* Secondary */}
<div className="bg-surface-cream p-10 rounded-3xl soft-shadow group hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-heritage-green/10 lg:col-span-2">
<div className="flex flex-col md:flex-row md:items-center gap-8">
<div className="shrink-0">
<div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-academic-gold transition-colors duration-300">
<span className="material-symbols-outlined text-4xl text-heritage-green group-hover:text-white" style={{fontVariationSettings: '"FILL" 0'}}>science</span>
</div>
</div>
<div>
<h3 className="font-headline-md text-2xl font-bold text-heritage-green mb-4">Secondary (IX - X)</h3>
<p className="font-body-md text-text-muted mb-4">
                                Rigorous preparation for board examinations with a focus on conceptual clarity, analytical skills, and comprehensive subject mastery.
                            </p>
<a className="inline-flex items-center text-academic-gold font-label-lg uppercase tracking-widest text-sm hover:text-heritage-green transition-colors" href="#">
                                Explore Subjects <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
{/* Senior Secondary */}
<div className="bg-heritage-green p-10 rounded-3xl shadow-xl group hover:-translate-y-2 transition-all duration-300">
<div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 group-hover:bg-academic-gold transition-colors duration-300">
<span className="material-symbols-outlined text-3xl text-white" style={{fontVariationSettings: '"FILL" 0'}}>workspace_premium</span>
</div>
<h3 className="font-headline-md text-2xl font-bold text-white mb-4">Senior Secondary</h3>
<p className="font-body-md text-white/80 mb-6">
                        Specialized streams (Science, Commerce, Humanities) preparing students for higher education and future careers.
                    </p>
<a className="inline-flex items-center text-academic-gold font-label-lg uppercase tracking-widest text-sm hover:text-white transition-colors" href="#">
                        View Streams <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/* Assessment System */}
<section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="bg-white rounded-[40px] p-12 md:p-20 shadow-xl relative overflow-hidden">
{/* Decorative background elements */}
<div className="absolute top-0 right-0 w-64 h-64 bg-academic-gold/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-heritage-green/5 rounded-full translate-y-1/3 -translate-x-1/3"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-headline-lg text-headline-lg text-heritage-green font-bold mb-6">Comprehensive Assessment</h2>
<p className="font-body-lg text-body-lg text-text-muted mb-8">
                            We look beyond mere test scores. Our continuous evaluation system captures a holistic view of student progress, identifying both strengths and areas for growth.
                        </p>
<ul className="space-y-6">
<li className="flex items-center">
<span className="material-symbols-outlined text-academic-gold mr-4">check_circle</span>
<span className="font-dm-sans font-medium text-lg text-on-surface">Formative Assessments &amp; Quizzes</span>
</li>
<li className="flex items-center">
<span className="material-symbols-outlined text-academic-gold mr-4">check_circle</span>
<span className="font-dm-sans font-medium text-lg text-on-surface">Project-Based Evaluations</span>
</li>
<li className="flex items-center">
<span className="material-symbols-outlined text-academic-gold mr-4">check_circle</span>
<span className="font-dm-sans font-medium text-lg text-on-surface">Term-end Summative Examinations</span>
</li>
<li className="flex items-center">
<span className="material-symbols-outlined text-academic-gold mr-4">check_circle</span>
<span className="font-dm-sans font-medium text-lg text-on-surface">Co-scholastic &amp; Life Skills Tracking</span>
</li>
</ul>
</div>
<div className="bg-surface-cream p-8 rounded-3xl border border-outline-variant/30">
<h3 className="font-headline-md text-xl font-bold text-heritage-green mb-6 text-center border-b border-outline-variant/20 pb-4">Evaluation Cycle</h3>
<div className="space-y-4">
<div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
<span className="font-label-lg uppercase tracking-widest text-text-muted text-xs">Term 1</span>
<span className="font-dm-sans font-medium text-heritage-green">April - September</span>
</div>
<div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
<span className="font-label-lg uppercase tracking-widest text-text-muted text-xs">Term 2</span>
<span className="font-dm-sans font-medium text-heritage-green">October - March</span>
</div>
<div className="flex justify-between items-center p-4 bg-heritage-green/5 border border-heritage-green/10 rounded-xl">
<span className="font-label-lg uppercase tracking-widest text-heritage-green text-xs">PTM Schedule</span>
<span className="font-dm-sans font-medium text-academic-gold">Monthly Review</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-heritage-green dark:bg-primary w-full rounded-t-[160px] overflow-hidden mt-12">
<div className="grid grid-cols-1 md:grid-cols-5 gap-gutter px-margin-desktop pt-section-gap-desktop pb-12 max-w-container-max mx-auto">
<div className="md:col-span-2">
<div className="font-headline-lg text-headline-lg text-white mb-4 font-bold">Aditya Gyan Mandir</div>
<p className="font-body-md text-body-md text-on-primary/80 max-w-sm mb-8">
                    Empowering minds, shaping futures. A legacy of excellence in holistic education.
                </p>
</div>
<div>
<h4 className="font-label-lg text-label-lg uppercase tracking-widest text-academic-gold mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">About School</a></li>
<li><a className="font-body-md text-body-md text-academic-gold font-bold" href="#">Academics</a></li>
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Facilities</a></li>
</ul>
</div>
<div>
<h4 className="font-label-lg text-label-lg uppercase tracking-widest text-academic-gold mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Admissions</a></li>
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Parent Portal</a></li>
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Contact Info</a></li>
</ul>
</div>
<div>
<h4 className="font-label-lg text-label-lg uppercase tracking-widest text-academic-gold mb-6">Contact</h4>
<address className="font-body-md text-body-md text-on-primary/80 not-italic space-y-2">
<p>123 Education Boulevard</p>
<p>City, State 12345</p>
<p className="mt-4 pt-4 border-t border-white/10">info@adityagyanmandir.edu</p>
</address>
</div>
</div>
<div className="border-t border-white/10 px-margin-mobile md:px-margin-desktop py-6">
<div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center">
<p className="font-body-md text-body-md text-on-primary/60 text-sm">
                    © 2024 Aditya Gyan Mandir. All Rights Reserved. Privacy Policy | Terms of Service
                </p>
</div>
</div>
</footer>

</div>
    </>
  );
}

