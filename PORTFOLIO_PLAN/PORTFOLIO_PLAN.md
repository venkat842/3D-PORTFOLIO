# Portfolio Website — Updated Plan (v2)

## What changed from before
- Removed the restriction to plain HTML/CSS/JS — Antigravity can now pick whatever tech makes it look the most stunning (React, Tailwind, Three.js, GSAP, etc.), as long as it stays a static site that's easy to host.
- New color theme: **Dark + Neon (electric blue/purple glow)**.
- Added real image support — your profile photo + project **logos**, referenced from `content.json`.

## What to do with your images
1. Put your photo in a folder called `images/` and name it `profile.jpg`.
2. Put your AUpulse logo in the same folder, named `aupulse-logo.png` (use PNG so the background can stay transparent).
3. Put your WealthifyAI logo in the same folder, named `wealthifyai-logo.png`.
4. `content.json` already points to these exact file names — so once Antigravity builds the site, just drop your images into that `images/` folder and they'll show up automatically. No code editing needed.

---

## PROMPT FOR ANTIGRAVITY (copy everything below this line)

```
Rebuild my personal portfolio website from scratch. This time, do not limit yourself to plain HTML/CSS/JS — use whatever modern tech stack, animation libraries, or 3D libraries will make the site look the most stunning and professional (for example: React, Tailwind CSS, Three.js, GSAP, Framer Motion — pick what fits best). It should still be a static site (no backend/server required) so it's easy to deploy on Vercel/Netlify.

COLOR THEME:
Dark background with electric blue and purple neon accents — glowing highlights, soft neon gradients, glassmorphism cards with a subtle neon border glow. Should feel modern, techy, and premium — not cluttered or garish.

CONTENT SOURCE:
Load all personal content from a single content.json file (I will provide this), including a profile image path and project image paths. Fetch and render it dynamically — no hardcoded personal text in the code.

IMAGES:
- Show my profile photo (content.json → profileImage) in the Home/Intro section, styled nicely (e.g. circular frame with a subtle neon glow ring, or blended into a 3D/abstract background).
- Show each project's logo (content.json → projects[].logo) inside its project card — as a rounded badge/icon near the top of the card, next to or above the project name, with a subtle neon glow on hover.
- Store images in an /images folder referenced by relative path, so I can swap them anytime without touching code.

SECTIONS (in this order):
1. Home/Intro — full-height hero with my name, tagline, short one-line description, my profile photo, and one striking 3D or animated visual element (e.g. Three.js rotating object, animated neon gradient blob, or particle background).
2. About Me — short bio paragraph.
3. Skills — clean animated cards or tags with icons where possible (C, SQL, Python, HTML, CSS, Bootstrap, Flexbox, Generative AI).
4. Projects — card layout, one card per project: project logo, name, tagline, short description, tech stack as small tags, and a button linking to the live site (opens in new tab). Include hover animation on cards.
5. Education/Experience — vertical timeline layout.
6. Contact — email, phone, Instagram, and LinkedIn as clickable icon buttons, with a neon hover glow effect.
7. Notes/Blog — empty section, minimal placeholder styling, ready for future content.

FUNCTIONALITY & POLISH:
- Smooth scroll-based animations between sections (fade/slide-in on scroll).
- Sticky navbar with smooth scroll links to each section.
- Fully responsive on mobile, tablet, and desktop.
- Clean modern font (e.g. Poppins, Inter, or Space Grotesk for a techy feel).
- Fast loading — optimize images and animations so it doesn't feel heavy.

Please generate the full project structure and clearly tell me where to place my content.json file and my images folder.
```
