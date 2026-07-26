Build a 3D Developer portfolio landing page for "Veera Venkat Satyanarayana" using React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. The page has a dark theme (#0C0C0C background) with the font Kanit (Google Fonts, weights 300-900). The page title is "Venkat -- Tech Allrounder".

GLOBAL STYLES
Background: #0C0C0C on html, body, #root, and the main wrapper
Font family: 'Kanit', sans-serif
Global reset: box-sizing border-box, margin 0, padding 0
CSS class .hero-heading: gradient text using background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%) with -webkit-background-clip: text and -webkit-text-fill-color: transparent
Main wrapper has overflowX: 'clip'

SECTION ORDER
HeroSection
MarqueeSection (tech-skills version, not random demo gifs)
AboutSection
SkillsSection (replaces "Services")
ProjectsSection
ContactFooter (new, replaces plain contact button as final CTA)

1. HERO SECTION
Full viewport height (h-screen), flex column layout with overflowX: clip.

Navbar: Horizontal nav bar with 4 links -- "About", "Skills", "Projects", "Contact" -- evenly spaced with justify-between. Text color #D7E2EA, font-medium, uppercase, tracking-wider. Sizes: text-sm md:text-lg lg:text-[1.4rem]. Padding: px-6 md:px-10 pt-6 md:pt-8. Hover: opacity 70% with 200ms transition.

Hero Heading: Massive text "Hi, i'm venkat" (lowercase "i", curly apostrophe via &apos;) -- since this name is longer than a short name, DO NOT render it as a single static whitespace-nowrap line (it will overflow off-screen and cut off letters). Instead, make it a continuously looping horizontal ticker/marquee, similar in spirit to the MarqueeSection: the text "HI, I'M VENKAT" is duplicated 2-3 times in a row with generous spacing (e.g. a bullet "•" or a few non-breaking spaces between repeats) inside a flex row wider than the viewport, animated with a CSS/Framer Motion infinite linear translateX loop (slow, ~25-30s per full cycle, seamless looping using the duplicated-content trick so it never visibly resets). Direction: right to left. Wrapped in an overflow-hidden full-width container so nothing outside the viewport is visible, but the full name always fully passes across the screen over time -- no letters ever permanently cut off. Uses the .hero-heading gradient text class. Font-black, uppercase, tracking-tight, leading-none. Font sizes: text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]. Margin top: mt-6 sm:mt-4 md:-mt-5. Pause the scroll animation on hover (nice-to-have, skip if it complicates things).

Bottom bar: Flexbox justify-between items-end with pb-7 sm:pb-8 md:pb-10:

Left: paragraph text "B.Tech Data Science student building full-stack web apps powered by AI", color #D7E2EA, font-light, uppercase, tracking-wide, leading-snug. Font size: clamp(0.75rem, 1.4vw, 1.5rem). Max-width: max-w-[160px] sm:max-w-[220px] md:max-w-[260px].
Right: ContactButton component (see below), label "Contact Me", scrolls to Contact footer.

Hero Portrait: Centered absolutely, NOT a full-bleed square image -- this is a circular framed photo, pre-composed as a single transparent PNG (already includes the glowing purple/pink ring border and faint orbit line-art/dots around it, so no extra CSS ring styling is needed, just place the image). Placed at /public/portrait.png (Venkat will drop his own image file into this path, so just reference it as a local import/path, not an external URL). Uses a Magnet component (mouse-following magnetic effect) wrapping the image for a subtle hover-follow feel. Magnet settings: padding 150, strength 3, activeTransition "transform 0.3s ease-out", inactiveTransition "transform 0.6s ease-in-out". Positioning: absolute left-1/2 -translate-x-1/2 z-10. Width: w-[300px] sm:w-[380px] md:w-[460px] lg:w-[540px] (square aspect ratio, image already circular within its transparent canvas). On mobile: top-1/2 -translate-y-1/2. On sm+: sm:top-auto sm:translate-y-0 sm:bottom-0. Add a slow, continuous CSS rotation (very subtle, ~60s per full turn, infinite linear) to just the outer ring glow if feasible -- optional nice-to-have, skip if it complicates the Magnet wrapper.

FadeIn animations: Navbar fades in with delay 0, y -20. Heading: delay 0.15, y 40. Left text: delay 0.35, y 20. Contact button: delay 0.5, y 20. Portrait: delay 0.6, y 30.

2. MARQUEE SECTION (Tech Stack, simplified from original demo-gif version)
Two rows of skill icons that scroll horizontally based on page scroll position. Background #0C0C0C. Padding: pt-24 sm:pt-32 md:pt-40 pb-10.

Instead of 21 external gif links (too heavy and unreliable to load), use Venkat's own skill icons as clean rounded tiles:
Python, C, SQL, HTML, CSS, Bootstrap, Flexbox/Grid, Generative AI (use devicon / Font Awesome icon classes matching those listed, on a dark rounded card background #1A1A1A, icon centered, label below in small uppercase text).

Row 1: Python, C, SQL, HTML (tripled for seamless scroll). Moves RIGHT on scroll (translateX(offset - 200)).
Row 2: CSS, Bootstrap, Flexbox/Grid, Generative AI (tripled). Moves LEFT on scroll (translateX(-(offset - 200))).
Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
Each tile: 180px x 140px, rounded-2xl, flex column center, gap-3 between tiles and rows.
Uses willChange: 'transform' for performance. Scroll listener is passive.

3. ABOUT SECTION
Full-height centered section with min-h-screen, padding px-5 sm:px-8 md:px-10 py-20.

Four decorative 3D corner images (keep the same visual idea as the original template -- abstract 3D shapes like a moon, an abstract object, a lego-style block, and a 3D group -- can be simple placeholder 3D renders since these are just decoration, not personal photos):

Top-left: small w-[120px] sm:w-[160px] md:w-[210px], positioned top-[4%] left-[1%] sm:left-[2%] md:left-[4%]. FadeIn: delay 0.1, x -80, y 0, duration 0.9.
Bottom-left: w-[100px] sm:w-[140px] md:w-[180px], positioned bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]. FadeIn: delay 0.25, x -80, y 0, duration 0.9.
Top-right: w-[120px] sm:w-[160px] md:w-[210px], positioned top-[4%] right-[1%] sm:right-[2%] md:right-[4%]. FadeIn: delay 0.15, x 80, y 0, duration 0.9.
Bottom-right: w-[130px] sm:w-[170px] md:w-[220px], positioned bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]. FadeIn: delay 0.3, x 80, y 0, duration 0.9.

Heading: "About me" using .hero-heading gradient text, font-black, uppercase, leading-none, tracking-tight, centered. Font size: clamp(3rem, 12vw, 160px). FadeIn: delay 0, y 40.

Animated paragraph: Uses a character-by-character scroll-driven opacity animation. Text: "I'm a B.Tech (Data Science) student at Aditya University, currently in my 2nd year (2025-2029 batch). I enjoy building full-stack web apps that mix practical problem-solving with AI, and I'm always experimenting with new tools and technologies to sharpen my skills." -- color #D7E2EA, font-medium, centered, leading-relaxed, max-w-[560px], font size clamp(1rem, 2vw, 1.35rem). Each character animates from opacity 0.2 to 1 based on scroll progress, with scroll offset ['start 0.8', 'end 0.2'].

Small education strip below the paragraph (new addition, simple text list, not from original template):
- B.Tech -- Data Science, Aditya University, 2025-2029 (Currently 2nd year)
- Intermediate (12th), Sri Prakash, 2023-2025
- LKG-10th, Sri Ravi Convent, up to 2023
Style: color #D7E2EA, opacity 0.6, font-light, uppercase, tracking-wide, text-sm, centered, stacked with small gaps.

Contact button below the text block. Gap between heading/text: gap-10 sm:gap-14 md:gap-16. Gap between text block and button: gap-16 sm:gap-20 md:gap-24.

4. SKILLS SECTION (replaces "Services" -- Venkat is a student, not a service provider)
White background (#FFFFFF), with rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] top corners. Padding: px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32.

Heading: "Skills" in #0C0C0C, font-black, uppercase, centered, font size clamp(3rem, 12vw, 160px). Margin bottom: mb-16 sm:mb-20 md:mb-28.

8 skill items in a vertical list, max-w-5xl, centered, same layout style as the original "Services" list (number left, name + short line right):

01 - Python: "Primary language for scripting, backend logic, and AI-driven features."
02 - C: "Core language used to build strong fundamentals in programming and logic."
03 - SQL: "Writing queries across joins, aggregations, subqueries, and views for real data problems."
04 - HTML: "Structuring clean, semantic web pages as the foundation of every project."
05 - CSS: "Styling responsive, modern interfaces with attention to layout and detail."
06 - Bootstrap: "Building consistent, responsive UI quickly using a component-based framework."
07 - Flexbox / Grid: "Laying out complex responsive designs with modern CSS layout systems."
08 - Generative AI: "Integrating AI models into full-stack apps to power smart, adaptive features."

Each item: horizontal layout with number (font-black, font size clamp(3rem, 10vw, 140px), color #0C0C0C) on the left and name + description stacked vertically on the right. Name: font-medium, uppercase, font size clamp(1rem, 2.2vw, 2.1rem). Description: font-light, leading-relaxed, max-w-2xl, font size clamp(0.85rem, 1.6vw, 1.25rem), opacity 0.6. Items separated by 1px borders (rgba(12, 12, 12, 0.15)). Padding: py-8 sm:py-10 md:py-12. Staggered FadeIn: each item delays by i * 0.1.

5. PROJECTS SECTION
Dark background (#0C0C0C), rounded top corners rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px], pulled up with -mt-10 sm:-mt-12 md:-mt-14, z-10.

Heading: "Projects" using .hero-heading gradient, same styling as other headings.

2 sticky-stacking project cards (Venkat has 2 real projects, not 3) that scale down as you scroll past them (card stacking effect using Framer Motion useScroll and useTransform). Each card is sticky top-24 md:top-32 inside an h-[85vh] container.

Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03. Each card offset by top: ${index * 28}px.

Each card has: rounded-[40px] sm:rounded-[50px] md:rounded-[60px], border-2 border-[#D7E2EA], background #0C0C0C, padding p-4 sm:p-6 md:p-8.

Card layout:
Top row: Number (huge, same style as skills section), tech-stack tags as small pill labels, project name, and a "Live Project" ghost button (rounded-full, border-2 #D7E2EA, uppercase, tracking-widest) linking to the project's live URL.
Bottom row: Since there are no project screenshots yet, use a large single visual area per card -- a clean gradient/abstract placeholder panel (rounded-[40px] sm:rounded-[50px] md:rounded-[60px]) with the project's logo image centered on top of the gradient (logo at a reasonable fixed size, e.g. max-h-[100px] sm:max-h-[130px] md:max-h-[160px], object-contain, drop-shadow for subtle depth so it stands out against the gradient), with the project name and tagline displayed below the logo, also centered. Logo paths: AUpulse card uses /aupulse-logo.png, WealthifyAI card uses /wealthifyai-logo.png (both in the public folder, referenced as local paths, not external URLs). If a logo fails to load, fall back to just showing the project name/tagline text as before, so the layout never breaks.

Project 01 -- "AUpulse":
Tagline: "Gold & Silver Price Tracker"
Description: "A gold and silver price tracking web app built around personal interest in digital gold investing. Features a live price dashboard, a 'what if I invested' calculator, alert history, and prices calculated in INR including Indian import duty and GST. Sends alerts via Telegram and email."
Tech tags: Flask, SQLite, MetalpriceAPI, SerpAPI, Telegram Bot API, Gmail SMTP, GitHub Actions, Render
Live link: https://aupulse.onrender.com

Project 02 -- "WealthifyAI":
Tagline: "Smart Wealth, Powered by AI"
Description: "An AI-powered fintech web app that helps first-time investors build personalized savings plans. Users enter income, savings goal, and timeline, then pick investment types. Gemini AI recommends asset allocation with interactive charts and Telegram notifications."
Tech tags: Python, Flask, SQLite, Gunicorn, Google Gemini API, MetalpriceAPI, Chart.js, Render
Live link: https://wealthify-ai.onrender.com

6. CONTACT FOOTER (new section, replaces having only a floating button)
Dark background #0C0C0C, padding py-20 sm:py-24 md:py-32, centered content.

Heading: "Let's Connect" using .hero-heading gradient, font-black, uppercase, centered, font size clamp(2.5rem, 8vw, 100px).

Below heading, centered row of contact links with Lucide icons:
- Email: venkatveera042@gmail.com (Mail icon)
- Phone: 9948774102 (Phone icon)
- Instagram: https://instagram.com/venkat77s (Instagram icon)
- LinkedIn: https://www.linkedin.com/in/vvenkatsn/ (Linkedin icon)
Each link: color #D7E2EA, font-medium, uppercase, tracking-wide, text-sm sm:text-base, hover opacity 70% with 200ms transition, flex row with icon + label, gap-3.
Small footer line at the very bottom: "veera-venkat.me" in low-opacity (0.4) small text, centered.

REUSABLE COMPONENTS
ContactButton: Rounded-full pill button with gradient background linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%), inner box-shadow 0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset, white 2px outline with -3px offset. Text: white, font-medium, uppercase, tracking-widest. Sizes: px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4, text text-xs sm:text-sm md:text-base. Label: "Contact Me". Clicking it smooth-scrolls to the Contact Footer section.

LiveProjectButton: Ghost/outline pill button. Rounded-full, border-2 border-[#D7E2EA], text color #D7E2EA, font-medium, uppercase, tracking-widest. Sizes: px-8 py-3 sm:px-10 sm:py-3.5, text text-sm sm:text-base. Hover: bg-[#D7E2EA]/10. Label: "Live Project". Opens the project's live link in a new tab.

FadeIn: Framer Motion wrapper using whileInView with viewport={{ once: true, margin: "50px", amount: 0 }}. Accepts delay, duration (default 0.7), x (default 0), y (default 30). Easing: [0.25, 0.1, 0.25, 1]. Uses motion.create() for dynamic element types.

Magnet: Mouse-following magnetic hover effect. Tracks mouse position relative to element center, applies translate3d transform divided by strength factor. Activates when cursor is within padding distance of element edge. Smooth transition in (0.3s ease-out) and out (0.6s ease-in-out). Uses willChange: 'transform'.

AnimatedText: Character-by-character scroll-reveal text animation. Each character goes from opacity 0.2 to 1 based on its position in the text relative to scroll progress. Uses Framer Motion useScroll targeting the paragraph element with offset ['start 0.8', 'end 0.2']. Each character uses invisible placeholder + absolute positioned animated span.

KEY DEPENDENCIES
react, react-dom (^18.3.1)
framer-motion (^12.38.0)
lucide-react (^0.344.0)
tailwindcss (^3.4.1)
vite, typescript

RESPONSIVE BREAKPOINTS
All sections use Tailwind's default breakpoints (sm: 640px, md: 768px, lg: 1024px) with mobile-first approach. Heavy use of clamp() for fluid typography. The entire design scales gracefully from mobile to ultra-wide screens.
