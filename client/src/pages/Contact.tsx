
export default function Contact() {
  return (
    <>
      <div>
{/* TopNavBar */}
<nav className="bg-transparent backdrop-blur-md dark:bg-transparent transition-all duration-300 fixed top-0 w-full z-50 border-b border-outline-variant/10 flat no shadows" id="main-nav">
<div className="flex justify-between items-center px-margin-desktop py-6 max-w-container-max mx-auto">
<a className="font-headline-md text-headline-md font-bold text-heritage-green dark:text-primary-fixed" href="#">Aditya Gyan Mandir</a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90 transition-transform font-label-lg text-label-lg tracking-widest" href="#">Home</a>
<a className="text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90 transition-transform font-label-lg text-label-lg tracking-widest" href="#">About</a>
<a className="text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90 transition-transform font-label-lg text-label-lg tracking-widest" href="#">Academics</a>
<a className="text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90 transition-transform font-label-lg text-label-lg tracking-widest" href="#">Facilities</a>
<a className="text-heritage-green dark:text-on-primary-fixed-variant hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90 transition-transform font-label-lg text-label-lg tracking-widest" href="#">Gallery</a>
<a className="text-academic-gold font-bold border-b-2 border-academic-gold pb-1 hover:text-academic-gold transition-colors duration-200 scale-95 active:scale-90 transition-transform font-label-lg text-label-lg tracking-widest" href="#">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-heritage-green text-on-primary font-label-lg text-label-lg tracking-widest rounded-full hover:bg-primary-container transition-colors duration-300 shadow-md" href="#">
                Admission Open
            </a>
{/* Mobile Menu Button */}
<button className="md:hidden text-heritage-green p-2">
<span className="material-symbols-outlined text-3xl">menu</span>
</button>
</div>
</nav>

{/* Hero Banner */}
<header className="relative pt-32 pb-section-gap-desktop bg-surface-cream overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center opacity-30 mix-blend-multiply" data-alt="Wide landscape photography of a prestigious school campus on a sunny day. The classical architecture of the main brick building is framed by ancient oak trees with dappled light filtering through the leaves. Lush green lawns in the foreground. High-end architectural photography style, warm natural lighting, modern-organic aesthetic." style={{backgroundImage: 'url("/images/image-21.jpg")'}}></div>
</div>
<div className="max-w-container-max mx-auto px-margin-desktop relative z-10 flex flex-col items-center text-center">
<nav className="flex items-center space-x-2 text-text-muted mb-8 font-label-md text-label-md">
<a className="hover:text-heritage-green transition-colors" href="#">Home</a>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="text-heritage-green font-bold">Contact &amp; Enquiry</span>
</nav>
<h1 className="font-display-lg text-display-lg text-heritage-green mb-6 max-w-4xl">Let's Start a Conversation.</h1>
<p className="font-body-lg text-body-lg text-text-muted max-w-2xl">Whether you are exploring admission opportunities, seeking information about our programs, or simply have a question, our dedicated team is here to guide you.</p>
</div>
{/* Organic bottom shape */}
<div className="absolute bottom-0 left-0 right-0 h-32 bg-wave z-10"></div>
</header>
{/* Main Content Section: Split Layout */}
<section className="max-w-container-max mx-auto px-margin-desktop py-section-gap-desktop relative z-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Left Column: Contact Details & Info */}
<div className="lg:col-span-5 space-y-12">
<div>
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-4">Get in Touch</h2>
<p className="font-body-md text-body-md text-text-muted mb-8">We welcome prospective families and community members to reach out. Our admissions office is ready to assist you with any inquiries.</p>
</div>
{/* Contact Info Cards */}
<div className="space-y-6">
{/* Address Card */}
<div className="bg-surface-lowest rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 border border-surface-variant flex items-start gap-6 group">
<div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center shrink-0 group-hover:bg-heritage-green transition-colors duration-300">
<span className="material-symbols-outlined text-3xl text-heritage-green group-hover:text-academic-gold transition-colors duration-300">location_on</span>
</div>
<div>
<h3 className="font-headline-md text-xl font-bold text-heritage-green mb-2">Campus Address</h3>
<p className="font-body-md text-text-muted">123 Academic Way,<br/>Knowledge District,<br/>Metropolis, NY 10001</p>
</div>
</div>
{/* Contact Details Card */}
<div className="bg-surface-lowest rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 border border-surface-variant flex items-start gap-6 group">
<div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center shrink-0 group-hover:bg-heritage-green transition-colors duration-300">
<span className="material-symbols-outlined text-3xl text-heritage-green group-hover:text-academic-gold transition-colors duration-300">contact_support</span>
</div>
<div>
<h3 className="font-headline-md text-xl font-bold text-heritage-green mb-2">Contact Details</h3>
<p className="font-body-md text-text-muted mb-1"><strong>Admissions:</strong> +1 (555) 123-4567</p>
<p className="font-body-md text-text-muted mb-1"><strong>General:</strong> +1 (555) 987-6543</p>
<p className="font-body-md text-text-muted mt-3"><strong>Email:</strong> admissions@adityagyanmandir.edu</p>
</div>
</div>
{/* Office Hours Card */}
<div className="bg-surface-lowest rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 border border-surface-variant flex items-start gap-6 group">
<div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center shrink-0 group-hover:bg-heritage-green transition-colors duration-300">
<span className="material-symbols-outlined text-3xl text-heritage-green group-hover:text-academic-gold transition-colors duration-300">schedule</span>
</div>
<div>
<h3 className="font-headline-md text-xl font-bold text-heritage-green mb-2">Office Hours</h3>
<p className="font-body-md text-text-muted mb-1"><strong>Monday - Friday:</strong> 8:00 AM - 4:00 PM</p>
<p className="font-body-md text-text-muted"><strong>Saturday &amp; Sunday:</strong> Closed</p>
</div>
</div>
</div>
</div>
{/* Right Column: Enquiry Form */}
<div className="lg:col-span-7 lg:pl-12">
<div className="bg-surface-cream rounded-[40px] p-10 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-surface-variant/50 relative overflow-hidden">
{/* Decorative element */}
<div className="absolute -top-20 -right-20 w-64 h-64 bg-academic-gold/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="mb-10 relative z-10">
<h3 className="font-headline-md text-headline-md text-heritage-green mb-3">Admission Enquiry</h3>
<p className="font-body-md text-text-muted">Fill out the form below and an admissions counselor will contact you shortly.</p>
</div>
<form className="space-y-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Student Name */}
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="student-name">Student Name</label>
<input className="w-full rounded-full border-surface-variant bg-surface-lowest px-6 py-4 focus:ring-2 focus:ring-heritage-green focus:border-transparent transition-shadow outline-none font-body-md" id="student-name" placeholder="Enter student's full name" type="text"/>
</div>
{/* Parent Name */}
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="parent-name">Parent/Guardian Name</label>
<input className="w-full rounded-full border-surface-variant bg-surface-lowest px-6 py-4 focus:ring-2 focus:ring-heritage-green focus:border-transparent transition-shadow outline-none font-body-md" id="parent-name" placeholder="Enter parent's name" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Mobile */}
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="mobile">Mobile Number</label>
<input className="w-full rounded-full border-surface-variant bg-surface-lowest px-6 py-4 focus:ring-2 focus:ring-heritage-green focus:border-transparent transition-shadow outline-none font-body-md" id="mobile" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
{/* Email */}
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="email">Email Address</label>
<input className="w-full rounded-full border-surface-variant bg-surface-lowest px-6 py-4 focus:ring-2 focus:ring-heritage-green focus:border-transparent transition-shadow outline-none font-body-md" id="email" placeholder="your@email.com" type="email"/>
</div>
</div>
{/* Class Seeking Admission */}
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="class-select">Grade/Class Seeking Admission</label>
<div className="relative">
<select className="w-full rounded-full border-surface-variant bg-surface-lowest px-6 py-4 appearance-none focus:ring-2 focus:ring-heritage-green focus:border-transparent transition-shadow outline-none font-body-md text-text-muted" id="class-select">
<option disabled  value="">Select a grade level</option>
<option value="pre-k">Pre-Kindergarten</option>
<option value="kindergarten">Kindergarten</option>
<option value="elementary">Elementary (Grades 1-5)</option>
<option value="middle">Middle School (Grades 6-8)</option>
<option value="high">High School (Grades 9-12)</option>
</select>
<span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">expand_more</span>
</div>
</div>
{/* Message */}
<div className="space-y-2">
<label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="message">Additional Message / Questions</label>
<textarea className="w-full rounded-[24px] border-surface-variant bg-surface-lowest px-6 py-4 focus:ring-2 focus:ring-heritage-green focus:border-transparent transition-shadow outline-none font-body-md resize-none" id="message" placeholder="Tell us more about your inquiry..." rows={4}></textarea>
</div>
{/* Submit Button */}
<button className="w-full bg-heritage-green hover:bg-primary-container text-academic-gold font-label-lg text-label-lg tracking-widest uppercase py-5 rounded-full transition-all duration-300 transform active:scale-[0.98] shadow-[0_10px_20px_rgba(18,71,46,0.15)] flex justify-center items-center gap-2 mt-4 group" type="submit">
                            Submit Enquiry
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
<p className="text-center font-label-md text-xs text-text-muted/70 mt-4">We respect your privacy. Your information will remain confidential.</p>
</form>
</div>
</div>
</div>
</section>
{/* Map Section */}
<section className="w-full relative h-[600px] overflow-hidden bg-surface-variant">
{/* Placeholder for actual map implementation */}
<div className="absolute inset-0 bg-cover bg-center" data-alt="A stylized, high-end map interface centered on Metropolis. The map uses a sophisticated color palette of subtle greens, soft creams, and muted grays, aligning with a modern-organic digital design style. Streets are clean and minimalist. A prominent, elegant gold map pin marker sits in the center indicating the school's location." data-location="New York" style={{backgroundImage: 'url("/images/image-22.jpg")'}}></div>
{/* Map Overlay Info Box */}
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-margin-desktop lg:translate-x-0 bg-surface-lowest/90 backdrop-blur-md p-8 rounded-[24px] shadow-[0_20px_40px_rgb(0,0,0,0.1)] border border-white/20 max-w-sm w-[90%] z-10">
<h4 className="font-headline-md text-2xl text-heritage-green mb-2">Visit Campus</h4>
<p className="font-body-md text-text-muted mb-6">Schedule a guided tour to experience our facilities firsthand.</p>
<a className="inline-flex items-center text-academic-gold font-label-lg hover:text-heritage-green transition-colors group" href="#">
<span className="uppercase tracking-widest">Get Directions</span>
<span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">directions</span>
</a>
</div>
</section>
{/* FAQ Section */}
<section className="max-w-container-max mx-auto px-margin-desktop py-section-gap-desktop">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-heritage-green mb-4">Frequently Asked Questions</h2>
<p className="font-body-lg text-text-muted max-w-2xl mx-auto">Find quick answers to common questions about our admissions process and campus visits.</p>
</div>
<div className="max-w-4xl mx-auto space-y-4">
{/* FAQ Item 1 */}
<div className="bg-surface-cream rounded-2xl border border-surface-variant/50 overflow-hidden group">
<button className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none">
<span className="font-headline-md text-xl text-heritage-green group-hover:text-academic-gold transition-colors">When is the deadline for applications?</span>
<span className="material-symbols-outlined text-heritage-green transition-transform duration-300">add</span>
</button>
<div className="px-8 pb-6 hidden">
<p className="font-body-md text-text-muted">Applications for the upcoming academic year typically close in late January. However, we do accept rolling admissions for select grades based on availability. Please contact the admissions office for current availability.</p>
</div>
</div>
{/* FAQ Item 2 */}
<div className="bg-surface-cream rounded-2xl border border-surface-variant/50 overflow-hidden group">
<button className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none">
<span className="font-headline-md text-xl text-heritage-green group-hover:text-academic-gold transition-colors">Can we schedule a private campus tour?</span>
<span className="material-symbols-outlined text-heritage-green transition-transform duration-300">add</span>
</button>
<div className="px-8 pb-6 hidden">
<p className="font-body-md text-text-muted">Yes, we encourage prospective families to visit. Private tours are available Tuesday through Thursday by appointment. You can request a tour by calling the admissions office directly.</p>
</div>
</div>
{/* FAQ Item 3 */}
<div className="bg-surface-cream rounded-2xl border border-surface-variant/50 overflow-hidden group">
<button className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none">
<span className="font-headline-md text-xl text-heritage-green group-hover:text-academic-gold transition-colors">Is financial aid available?</span>
<span className="material-symbols-outlined text-heritage-green transition-transform duration-300">add</span>
</button>
<div className="px-8 pb-6 hidden">
<p className="font-body-md text-text-muted">Aditya Gyan Mandir is committed to maintaining a diverse student body. Need-based financial aid is available. The financial aid application process runs concurrently with the admission application.</p>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-heritage-green dark:bg-primary w-full rounded-t-[160px] overflow-hidden mt-12">
<div className="grid grid-cols-1 md:grid-cols-5 gap-gutter px-margin-desktop pt-section-gap-desktop pb-12 max-w-container-max mx-auto">
{/* Brand Column */}
<div className="md:col-span-2">
<h2 className="font-headline-lg text-headline-lg text-white mb-4">Aditya Gyan Mandir</h2>
<p className="font-body-md text-body-md text-on-primary/80 max-w-sm mb-8">Nurturing excellence and progressive learning in a supportive community environment.</p>
</div>
{/* Links */}
<div className="md:col-span-1">
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">About School</a></li>
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Academics</a></li>
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Facilities</a></li>
</ul>
</div>
<div className="md:col-span-1">
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-on-primary/80 hover:text-academic-gold transition-all opacity-80 hover:opacity-100" href="#">Quick Links</a></li>
<li><a className="font-body-md text-body-md text-academic-gold font-bold transition-all opacity-80 hover:opacity-100" href="#">Contact Info</a></li>
</ul>
</div>
</div>
{/* Copyright */}
<div className="border-t border-white/10 mt-8">
<div className="max-w-container-max mx-auto px-margin-desktop py-6 text-center md:text-left">
<p className="font-label-md text-sm text-on-primary/60">© 2024 Aditya Gyan Mandir. All Rights Reserved. Privacy Policy | Terms of Service</p>
</div>
</div>
</footer>
{/* Simple FAQ interaction script */}

</div>
    </>
  );
}


