
export default function Admissions() {
  return (
    <>
      <div>
{/* Navigation (TopNavBar) */}
<nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md dark:bg-transparent transition-all duration-300 border-b border-outline-variant/10" id="main-nav">
<div className="flex justify-between items-center px-margin-desktop py-6 max-w-container-max mx-auto">
<a className="font-headline-md text-headline-md font-bold text-heritage-green dark:text-primary-fixed" href="#">Aditya Gyan Mandir</a>
<div className="hidden md:flex items-center space-x-8">
<a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90" href="#">Home</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90" href="#">About</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90" href="#">Academics</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-academic-gold font-bold border-b-2 border-academic-gold pb-1 scale-95 active:scale-90" href="#">Admissions</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90" href="#">Facilities</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90" href="#">Gallery</a>
<a className="font-label-lg text-label-lg uppercase tracking-widest text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90" href="#">Contact</a>
</div>
<button className="bg-heritage-green text-on-primary px-6 py-3 rounded-full font-label-lg text-label-lg uppercase tracking-widest hover:bg-tertiary-container transition-colors hidden md:block">
                Admission Open
            </button>
{/* Mobile Menu Toggle */}
<button className="md:hidden text-heritage-green">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</nav>
{/* Hero Section */}
<header className="relative pt-32 pb-section-gap-desktop overflow-hidden bg-surface-cream">
<div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center min-h-[716px]">
<div className="z-10 max-w-xl">
<span className="font-label-lg text-label-lg uppercase tracking-widest text-academic-gold mb-6 block">Join Our Community</span>
<h1 className="font-display-lg text-display-lg text-heritage-green mb-8">Begin Your Journey at Aditya Gyan Mandir.</h1>
<p className="font-body-lg text-body-lg text-text-muted mb-10">We seek students who are curious, compassionate, and eager to make a positive impact. Discover a learning environment that nurtures intellectual growth and character development.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-academic-gold text-heritage-green px-8 py-4 rounded-full font-label-lg text-label-lg uppercase tracking-widest hover:bg-secondary-container transition-colors text-center inline-flex items-center justify-center gap-2" href="#apply">
                        Start Application <span className="material-symbols-outlined">arrow_forward</span>
</a>
<a className="bg-transparent border border-outline px-8 py-4 rounded-full font-label-lg text-label-lg uppercase tracking-widest text-heritage-green hover:bg-surface-variant transition-colors text-center" href="#process">
                        View Process
                    </a>
</div>
</div>
<div className="relative h-full min-h-[500px] flex items-center justify-center mt-12 lg:mt-0">
{/* Large Circular Frame */}
<div className="w-[500px] h-[500px] rounded-full overflow-hidden absolute right-0 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-8 border-white">
<img className="w-full h-full object-cover" data-alt="A bright, high-quality photograph of two students engaged in a science experiment, smiling and collaborating. The setting is a modern, sunlit classroom. The aesthetic is progressive, warm, and academic. The image is framed within a perfect circle." src="/images/image-17.jpg"/>
</div>
{/* Decorative element */}
<div className="absolute -bottom-10 -left-10 w-48 h-48 bg-academic-gold rounded-full opacity-20 blur-2xl"></div>
</div>
</div>
</header>
{/* Overview & Eligibility */}
<section className="py-section-gap-desktop bg-surface relative">
<div className="max-w-container-max mx-auto px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
<div className="md:col-span-5 sticky top-32">
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-6">Who We're Looking For</h2>
<p className="font-body-lg text-body-lg text-text-muted mb-8">Admission to Aditya Gyan Mandir is selective and based on a comprehensive review of each applicant's academic potential, character, and readiness to contribute to our community.</p>
<div className="bg-white p-8 rounded-[24px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)]">
<h3 className="font-headline-md text-headline-md text-heritage-green mb-4">Key Dates</h3>
<ul className="space-y-4">
<li className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
<span className="font-label-lg text-label-lg text-text-main">Applications Open</span>
<span className="font-body-md text-body-md text-heritage-green font-semibold">September 1</span>
</li>
<li className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
<span className="font-label-lg text-label-lg text-text-main">Priority Deadline</span>
<span className="font-body-md text-body-md text-academic-gold font-semibold">December 15</span>
</li>
<li className="flex justify-between items-center pt-2">
<span className="font-label-lg text-label-lg text-text-main">Decision Notification</span>
<span className="font-body-md text-body-md text-heritage-green font-semibold">March 10</span>
</li>
</ul>
</div>
</div>
<div className="md:col-span-6 md:col-start-7 space-y-8">
{/* Eligibility Cards */}
<div className="bg-surface-cream p-10 rounded-[32px] hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-academic-gold text-3xl">school</span>
</div>
<h3 className="font-headline-md text-headline-md text-heritage-green mb-4">Academic Readiness</h3>
<p className="font-body-md text-body-md text-text-muted">Students must demonstrate a strong academic foundation appropriate for their grade level, evidenced by prior school transcripts and standardized test scores (where applicable).</p>
</div>
<div className="bg-surface-cream p-10 rounded-[32px] hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-academic-gold text-3xl">psychology</span>
</div>
<h3 className="font-headline-md text-headline-md text-heritage-green mb-4">Character &amp; Curiosity</h3>
<p className="font-body-md text-body-md text-text-muted">We value intellectual curiosity, empathy, and a willingness to engage in diverse perspectives. Teacher recommendations play a crucial role in assessing these qualities.</p>
</div>
<div className="bg-surface-cream p-10 rounded-[32px] hover:-translate-y-1 transition-transform duration-300">
<div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-academic-gold text-3xl">groups</span>
</div>
<h3 className="font-headline-md text-headline-md text-heritage-green mb-4">Community Fit</h3>
<p className="font-body-md text-body-md text-text-muted">During the family interview, we look for a shared commitment to our core values of respect, integrity, and lifelong learning.</p>
</div>
</div>
</div>
</div>
</section>
{/* Admission Process Workflow */}
<section className="py-section-gap-desktop bg-heritage-green text-on-primary relative overflow-hidden" id="process">
{/* Abstract Background Shape */}
<div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
<svg className="w-full h-full fill-current text-white" preserveAspectRatio="none" viewBox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z"></path>
</svg>
</div>
<div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="font-headline-lg text-headline-lg text-white mb-6">The Admission Process</h2>
<p className="font-body-lg text-body-lg text-on-primary/80">A clear, step-by-step guide to joining the Aditya Gyan Mandir community.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
{/* Step 1 */}
<div className="relative">
<div className="w-20 h-20 rounded-full border-2 border-academic-gold flex items-center justify-center font-headline-lg text-headline-lg text-academic-gold mb-6 bg-primary-container relative z-10">1</div>
<div className="hidden md:block absolute top-10 left-20 w-full h-0.5 bg-outline-variant/30 -z-0"></div>
<h3 className="font-headline-md text-headline-md text-white mb-4">Inquire &amp; Visit</h3>
<p className="font-body-md text-body-md text-on-primary/70">Complete an inquiry form and schedule a campus tour or attend an open house to experience our culture firsthand.</p>
</div>
{/* Step 2 */}
<div className="relative">
<div className="w-20 h-20 rounded-full border-2 border-academic-gold flex items-center justify-center font-headline-lg text-headline-lg text-academic-gold mb-6 bg-primary-container relative z-10">2</div>
<div className="hidden md:block absolute top-10 left-20 w-full h-0.5 bg-outline-variant/30 -z-0"></div>
<h3 className="font-headline-md text-headline-md text-white mb-4">Apply Online</h3>
<p className="font-body-md text-body-md text-on-primary/70">Submit the online application along with the required fee through our secure parent portal.</p>
</div>
{/* Step 3 */}
<div className="relative">
<div className="w-20 h-20 rounded-full border-2 border-academic-gold flex items-center justify-center font-headline-lg text-headline-lg text-academic-gold mb-6 bg-primary-container relative z-10">3</div>
<div className="hidden md:block absolute top-10 left-20 w-full h-0.5 bg-outline-variant/30 -z-0"></div>
<h3 className="font-headline-md text-headline-md text-white mb-4">Assessments</h3>
<p className="font-body-md text-body-md text-on-primary/70">Depending on the grade level, applicants will participate in an entrance exam or a classroom observation session.</p>
</div>
{/* Step 4 */}
<div className="relative">
<div className="w-20 h-20 rounded-full border-2 border-academic-gold flex items-center justify-center font-headline-lg text-headline-lg text-academic-gold mb-6 bg-primary-container relative z-10">4</div>
<h3 className="font-headline-md text-headline-md text-white mb-4">Family Interview</h3>
<p className="font-body-md text-body-md text-on-primary/70">A conversation with our admission team to ensure mutual alignment of values and educational goals.</p>
</div>
</div>
</div>
</section>
{/* Required Documents Checklist */}
<section className="py-section-gap-desktop bg-surface-cream">
<div className="max-w-container-max mx-auto px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-6">Required Documents</h2>
<p className="font-body-lg text-body-lg text-text-muted mb-10">Please ensure all materials are submitted before the priority deadline to complete your application file.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-academic-gold mt-1">check_circle</span>
<div>
<h4 className="font-headline-md text-headline-md text-text-main text-[24px]">Academic Transcripts</h4>
<p className="font-body-md text-body-md text-text-muted">Records from the past two academic years.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-academic-gold mt-1">check_circle</span>
<div>
<h4 className="font-headline-md text-headline-md text-text-main text-[24px]">Teacher Recommendations</h4>
<p className="font-body-md text-body-md text-text-muted">Two forms completed by current Math and English teachers.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-academic-gold mt-1">check_circle</span>
<div>
<h4 className="font-headline-md text-headline-md text-text-main text-[24px]">Birth Certificate</h4>
<p className="font-body-md text-body-md text-text-muted">A certified copy for age verification.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-academic-gold mt-1">check_circle</span>
<div>
<h4 className="font-headline-md text-headline-md text-text-main text-[24px]">Immunization Records</h4>
<p className="font-body-md text-body-md text-text-muted">Up-to-date health forms provided by a physician.</p>
</div>
</li>
</ul>
</div>
{/* Bento Style Image Grid */}
<div className="grid grid-cols-2 gap-4 h-[600px]">
<div className="col-span-1 row-span-2 rounded-[24px] overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A modern, high-quality close-up photo of a parent and child looking at an admission brochure together, seated at a bright wooden table. The lighting is soft and natural. The aesthetic is premium and academic." src="/images/image-18.jpg"/>
</div>
<div className="col-span-1 row-span-1 rounded-[24px] overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A detailed shot of a hand writing on a formal application document with a fountain pen. Warm lighting, shallow depth of field. Professional and prestigious atmosphere." src="/images/image-19.jpg"/>
</div>
<div className="col-span-1 row-span-1 rounded-full overflow-hidden border-4 border-surface">
<img className="w-full h-full object-cover" data-alt="A portrait of a smiling admissions counselor standing in a modern school hallway. Professional, welcoming, and high-key lighting. Academic prestige aesthetic." src="/images/image-20.jpg"/>
</div>
</div>
</div>
</div>
</section>
{/* Tuition & Scholarships Table */}
<section className="py-section-gap-desktop bg-white">
<div className="max-w-container-max mx-auto px-margin-desktop">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-6">Investment in Excellence</h2>
<p className="font-body-lg text-body-lg text-text-muted">We are committed to making a Aditya Gyan Mandir education accessible to talented students from diverse economic backgrounds.</p>
</div>
<div className="overflow-x-auto mb-16">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b-2 border-heritage-green">
<th className="py-6 px-4 font-label-lg text-label-lg uppercase tracking-widest text-heritage-green">Division</th>
<th className="py-6 px-4 font-label-lg text-label-lg uppercase tracking-widest text-heritage-green">Annual Tuition</th>
<th className="py-6 px-4 font-label-lg text-label-lg uppercase tracking-widest text-heritage-green">Additional Fees</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-text-main">
<tr className="border-b border-outline-variant/30 hover:bg-surface-container-lowest transition-colors">
<td className="py-6 px-4 font-headline-md text-[20px] font-semibold">Lower School (Pre-K - 4)</td>
<td className="py-6 px-4">$24,500</td>
<td className="py-6 px-4">$1,200 (Tech &amp; Materials)</td>
</tr>
<tr className="border-b border-outline-variant/30 hover:bg-surface-container-lowest transition-colors">
<td className="py-6 px-4 font-headline-md text-[20px] font-semibold">Middle School (5 - 8)</td>
<td className="py-6 px-4">$28,000</td>
<td className="py-6 px-4">$1,500 (Tech &amp; Activities)</td>
</tr>
<tr className="border-b border-outline-variant/30 hover:bg-surface-container-lowest transition-colors">
<td className="py-6 px-4 font-headline-md text-[20px] font-semibold">Upper School (9 - 12)</td>
<td className="py-6 px-4">$32,000</td>
<td className="py-6 px-4">$2,000 (Tech, Lab &amp; Activities)</td>
</tr>
</tbody>
</table>
</div>
{/* Financial Aid Banner */}
<div className="bg-primary-container rounded-[32px] p-10 flex flex-col md:flex-row items-center justify-between shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
<div className="max-w-2xl mb-6 md:mb-0">
<h3 className="font-headline-md text-headline-md text-academic-gold mb-3">Financial Aid &amp; Scholarships</h3>
<p className="font-body-md text-body-md text-on-primary/80">Need-based financial aid and merit scholarships are available. Over 25% of our student body receives some form of assistance.</p>
</div>
<a className="bg-white text-heritage-green px-8 py-4 rounded-full font-label-lg text-label-lg uppercase tracking-widest hover:bg-surface-container transition-colors whitespace-nowrap" href="#">
                    Learn About Aid
                </a>
</div>
</div>
</section>
{/* Footer */}
<footer className="w-full rounded-t-[160px] overflow-hidden bg-heritage-green dark:bg-primary pt-section-gap-desktop pb-12 px-margin-desktop mt-16">
<div className="max-w-container-max mx-auto">
<div className="font-headline-lg text-headline-lg text-white mb-12 text-center md:text-left">Aditya Gyan Mandir</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-gutter border-b border-outline/30 pb-12 mb-8">
{/* Navigation Links generated from JSON */}
<div className="flex flex-col space-y-4 items-center md:items-start">
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">About School</a>
</div>
<div className="flex flex-col space-y-4 items-center md:items-start">
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Quick Links</a>
</div>
<div className="flex flex-col space-y-4 items-center md:items-start">
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Academics</a>
</div>
<div className="flex flex-col space-y-4 items-center md:items-start">
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Facilities</a>
</div>
<div className="flex flex-col space-y-4 items-center md:items-start">
<a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Contact Info</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
<p className="font-body-md text-body-md text-academic-gold">© 2024 Aditya Gyan Mandir. All Rights Reserved. Privacy Policy | Terms of Service</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-on-primary/80 hover:text-academic-gold transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
<a className="text-on-primary/80 hover:text-academic-gold transition-colors" href="#"><span className="material-symbols-outlined">call</span></a>
<a className="text-on-primary/80 hover:text-academic-gold transition-colors" href="#"><span className="material-symbols-outlined">location_on</span></a>
</div>
</div>
</div>
</footer>

</div>
    </>
  );
}
