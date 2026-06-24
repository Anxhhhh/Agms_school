
export default function About() {
  return (
    <>
      <div>
{/* TopNavBar Component */}
<header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md dark:bg-transparent transition-all duration-300" id="main-header">
<nav className="flex justify-between items-center px-margin-desktop py-6 max-w-container-max mx-auto">
<div className="font-headline-md text-headline-md font-bold text-heritage-green dark:text-primary-fixed">Aditya Gyan Mandir</div>
<ul className="hidden md:flex gap-8 items-center">
<li><a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200" href="#">Home</a></li>
<li><a className="font-label-lg text-label-lg uppercase tracking-widest text-academic-gold font-bold border-b-2 border-academic-gold pb-1 hover:text-academic-gold transition-colors duration-200" href="#">About</a></li>
<li><a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200" href="#">Academics</a></li>
<li><a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200" href="#">Facilities</a></li>
<li><a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200" href="#">Gallery</a></li>
<li><a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200" href="#">Contact</a></li>
</ul>
<div className="hidden md:block">
<a className="bg-heritage-green text-white font-label-lg text-label-lg uppercase tracking-widest px-6 py-3 rounded-full hover:bg-academic-gold transition-colors duration-300" href="#">Admission Open</a>
</div>
{/* Mobile Menu Toggle (simplified) */}
<button className="md:hidden text-heritage-green">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</nav>
</header>

{/* Hero Section */}
<section className="relative min-h-[80vh] flex items-center pt-24 pb-section-gap-desktop bg-surface-cream curve-bottom">
<div className="max-w-container-max mx-auto px-margin-desktop grid md:grid-cols-2 gap-gutter items-center">
<div className="z-10">
<h1 className="font-display-lg text-display-lg text-heritage-green mb-6">Our Story.<br/>Our Legacy.</h1>
<p className="font-body-lg text-body-lg text-text-muted mb-8 max-w-lg">Discover the rich history and progressive vision that defines the Aditya Gyan Mandir experience. A tradition of excellence spanning over decades.</p>
</div>
<div className="relative h-[600px] w-full hidden md:block">
<div className="absolute inset-0 rounded-full overflow-hidden right-[-10%] translate-x-10 shadow-2xl">
<img className="w-full h-full object-cover" data-alt="A sweeping, cinematic photograph of the Aditya Gyan Mandir campus on a bright, sunny day. The image captures majestic brick buildings framed by lush, ancient oak trees. The scene is illuminated by warm, golden hour sunlight, highlighting the architectural details and the vibrant green lawns. The mood is inspiring, academic, and timeless, conveying a sense of enduring prestige." src="/images/image-1.jpg"/>
</div>
</div>
</div>
</section>
{/* Vision, Mission, Core Values (Bento Grid) */}
<section className="py-section-gap-desktop max-w-container-max mx-auto px-margin-desktop">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-4">Guiding Principles</h2>
<p className="font-body-lg text-body-lg text-text-muted max-w-2xl mx-auto">The foundation upon which we build tomorrow's leaders.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Mission Card */}
<div className="bg-white rounded-[24px] p-10 soft-shadow group hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-6 group-hover:bg-heritage-green transition-colors duration-300">
<span className="material-symbols-outlined text-3xl text-heritage-green group-hover:text-academic-gold transition-colors duration-300">rocket_launch</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-4">Our Mission</h3>
<p className="font-body-md text-body-md text-text-muted">To foster a diverse community of learners, dedicated to academic excellence, ethical responsibility, and active engagement in a global society.</p>
</div>
{/* Vision Card */}
<div className="bg-heritage-green text-white rounded-[24px] p-10 soft-shadow md:col-span-2 group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-primary-container rounded-bl-[100%] opacity-50"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-3xl text-academic-gold">visibility</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4 text-white">Our Vision</h3>
<p className="font-body-lg text-body-lg text-on-primary/90 max-w-xl">To be recognized as a premier educational institution where innovation meets tradition, empowering every student to discover their unique potential and purposefully shape the future.</p>
</div>
</div>
{/* Core Values list */}
<div className="bg-white rounded-[24px] p-10 soft-shadow md:col-span-3">
<h3 className="font-headline-md text-headline-md text-primary mb-8 text-center">Core Values</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<span className="material-symbols-outlined text-4xl text-academic-gold mb-2">menu_book</span>
<h4 className="font-label-lg text-label-lg text-heritage-green uppercase">Excellence</h4>
</div>
<div>
<span className="material-symbols-outlined text-4xl text-academic-gold mb-2">favorite</span>
<h4 className="font-label-lg text-label-lg text-heritage-green uppercase">Compassion</h4>
</div>
<div>
<span className="material-symbols-outlined text-4xl text-academic-gold mb-2">balance</span>
<h4 className="font-label-lg text-label-lg text-heritage-green uppercase">Integrity</h4>
</div>
<div>
<span className="material-symbols-outlined text-4xl text-academic-gold mb-2">groups</span>
<h4 className="font-label-lg text-label-lg text-heritage-green uppercase">Community</h4>
</div>
</div>
</div>
</div>
</section>
{/* Management Team & Principal Message */}
<section className="py-section-gap-desktop bg-surface-cream curve-top curve-bottom">
<div className="max-w-container-max mx-auto px-margin-desktop grid md:grid-cols-2 gap-16 items-center">
<div className="relative flex justify-center">
{/* Using the specified image placeholder */}
<div className="w-[80%] aspect-[0.72] rounded-full overflow-hidden shadow-2xl relative">
<img alt="Principal" className="w-full h-full object-cover" src="/images/image-2.jpg"/>
</div>
{/* Decorative element */}
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-academic-gold rounded-full flex items-center justify-center p-6 text-center text-primary font-label-md text-label-md uppercase tracking-widest shadow-xl">
                    Leading<br/>Since<br/>2010
                </div>
</div>
<div>
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-2">A Message from</h2>
<h3 className="font-headline-md text-headline-md text-academic-gold mb-6">Dr. Sarah Jenkins, Head of School</h3>
<div className="font-body-lg text-body-lg text-text-muted space-y-4">
<p>"At Aditya Gyan Mandir, we believe that education is not merely the filling of a pail, but the lighting of a fire. Our approach is deeply rooted in knowing each student individually and providing the space, challenge, and support they need to thrive."</p>
<p>"We are committed to cultivating an environment where curiosity is celebrated, where intellectual risk-taking is encouraged, and where character development stands shoulder-to-shoulder with academic achievement."</p>
</div>
<button className="mt-8 font-label-lg text-label-lg text-heritage-green uppercase tracking-widest flex items-center gap-2 hover:text-academic-gold transition-colors">
                    Read Full Letter <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</section>
{/* School Journey Timeline */}
<section className="py-section-gap-desktop max-w-container-max mx-auto px-margin-desktop">
<div className="text-center mb-24">
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-4">Our Journey</h2>
<p className="font-body-lg text-body-lg text-text-muted max-w-2xl mx-auto">Milestones that shaped our institution.</p>
</div>
<div className="relative">
{/* Central Line */}
<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-outline-variant/30 hidden md:block"></div>
<div className="space-y-24">
{/* Timeline Item 1 */}
<div className="flex flex-col md:flex-row items-center justify-between w-full">
<div className="md:w-5/12 mb-8 md:mb-0 text-right pr-8">
<h3 className="font-headline-md text-headline-md text-academic-gold mb-2">1950</h3>
<h4 className="font-headline-md text-headline-md text-heritage-green mb-2">The Foundation</h4>
<p className="font-body-md text-body-md text-text-muted">Aditya Gyan Mandir opens its doors with 62 students, establishing a commitment to coeducation and progressive learning methodologies.</p>
</div>
<div className="w-12 h-12 rounded-full bg-heritage-green text-white flex items-center justify-center z-10 shadow-lg border-4 border-white mb-8 md:mb-0">
<span className="material-symbols-outlined">account_balance</span>
</div>
<div className="md:w-5/12 pl-8">
<div className="rounded-[24px] overflow-hidden shadow-md aspect-video">
<img className="w-full h-full object-cover" data-alt="A vintage, sepia-toned photograph of a small, mid-century modern school building with a group of diverse children playing happily in the front yard. The mood is nostalgic and historic, emphasizing the humble yet forward-thinking beginnings of an educational institution." src="/images/image-3.jpg"/>
</div>
</div>
</div>
{/* Timeline Item 2 */}
<div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
<div className="md:w-5/12 mb-8 md:mb-0 text-left pl-8">
<h3 className="font-headline-md text-headline-md text-academic-gold mb-2">1985</h3>
<h4 className="font-headline-md text-headline-md text-heritage-green mb-2">Campus Expansion</h4>
<p className="font-body-md text-body-md text-text-muted">Completion of the new science and arts wings, marking a significant step towards comprehensive STEM and humanities education.</p>
</div>
<div className="w-12 h-12 rounded-full bg-academic-gold text-white flex items-center justify-center z-10 shadow-lg border-4 border-white mb-8 md:mb-0">
<span className="material-symbols-outlined">science</span>
</div>
<div className="md:w-5/12 pr-8">
<div className="rounded-[24px] overflow-hidden shadow-md aspect-video">
<img className="w-full h-full object-cover" data-alt="A vibrant color photograph from the 1980s showing students engaged in a chemistry lab experiment. They are wearing safety goggles and examining beakers filled with colorful liquids. The bright, institutional lighting and active engagement convey a focus on scientific discovery." src="/images/image-4.jpg"/>
</div>
</div>
</div>
{/* Timeline Item 3 */}
<div className="flex flex-col md:flex-row items-center justify-between w-full">
<div className="md:w-5/12 mb-8 md:mb-0 text-right pr-8">
<h3 className="font-headline-md text-headline-md text-academic-gold mb-2">2020</h3>
<h4 className="font-headline-md text-headline-md text-heritage-green mb-2">Modern Era</h4>
<p className="font-body-md text-body-md text-text-muted">Inauguration of the state-of-the-art innovation center, solidifying Aditya Gyan Mandir's position as a leader in forward-thinking education.</p>
</div>
<div className="w-12 h-12 rounded-full bg-heritage-green text-white flex items-center justify-center z-10 shadow-lg border-4 border-white mb-8 md:mb-0">
<span className="material-symbols-outlined">lightbulb</span>
</div>
<div className="md:w-5/12 pl-8">
<div className="rounded-[24px] overflow-hidden shadow-md aspect-video">
<img className="w-full h-full object-cover" data-alt="A modern, high-tech classroom setting bathed in natural light. Students are collaborating around sleek tables with laptops and robotics kits. The architecture features glass walls and clean lines, projecting a contemporary, future-focused educational environment." src="/images/image-5.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Footer Component */}
<footer className="w-full rounded-t-[160px] overflow-hidden bg-heritage-green dark:bg-primary">
<div className="grid grid-cols-1 md:grid-cols-5 gap-gutter px-margin-desktop pt-section-gap-desktop pb-12 max-w-container-max mx-auto">
<div className="md:col-span-2">
<div className="font-headline-lg text-headline-lg text-white mb-4">Aditya Gyan Mandir</div>
<p className="font-body-md text-body-md text-on-primary/80 mb-8 max-w-sm">Empowering minds, building character, and shaping the future since 1950.</p>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">About School</a></li>
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Academics</a></li>
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Facilities</a></li>
</ul>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest mb-6">Admissions</h4>
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Apply Now</a></li>
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Tuition &amp; Aid</a></li>
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Visit Campus</a></li>
</ul>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest mb-6">Contact Info</h4>
<ul className="space-y-4 font-body-md text-body-md text-on-primary/80">
<li>123 Education Lane</li>
<li>Cityville, ST 12345</li>
<li>info@adityagyanmandir.edu</li>
</ul>
</div>
</div>
<div className="px-margin-desktop py-6 border-t border-white/10 max-w-container-max mx-auto text-center md:text-left">
<p className="font-body-md text-body-md text-on-primary/60">© 2024 Aditya Gyan Mandir. All Rights Reserved. Privacy Policy | Terms of Service</p>
</div>
</footer>
</div>
    </>
  );
}
