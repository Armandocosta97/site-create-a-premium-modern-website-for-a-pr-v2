Modified files: [src/layout/Layout.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/layout/Layout.jsx), [src/components/HeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/HeroSection.jsx), [src/components/SignaturePreviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/SignaturePreviewSection.jsx), [src/components/BrandStoryPreviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/BrandStoryPreviewSection.jsx), [src/App.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/App.css), [index.html](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/index.html), [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/agent/AGENT_REPORT.md).

Implemented: the shared site shell now has a semantic header/footer with real brand and contact content, valid footer navigation, and a skip link; the homepage and preview sections now expose explicit semantic labels for validation; the broken default favicon reference was removed; and the shell CSS was tightened so navigation, CTAs, footer, and the floating WhatsApp button stay stable across responsive breakpoints.

Build result: `npm run build` passed with Vite production build success. I did not run browser-based manual validation in this turn.

OpenAI Codex v0.111.0 (research preview)
--------
workdir: /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr
model: gpt-5.4
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR, /Users/armandocosta/.codex/memories]
reasoning effort: none
reasoning summaries: none
session id: 019cd9f8-cbd5-79e2-9374-1e1945974a0c
--------
user
# CURRENT TASK EXECUTION PROMPT

You are the coding executor for this project.

## Project path
site-create-a-premium-modern-website-for-a-pr

## Source of truth files
- brief/original-prompt.md
- brief/brief-summary.md
- site-spec.json
- docs/DEVELOPMENT_METHOD.md
- agent/TASK_GRAPH.json
- agent/TASK_STATE.json
- agent/CURRENT_TASK_PROMPT.md

## Development method
# Development Method

All sites must follow these rules.

## Objective
- Generate production-ready static websites that are clear, stable, responsive, modular, and easy to validate.
- Prioritize correctness before visual polish.
- Prefer predictable implementation over improvisation.

## Source of Truth
- The human prompt is not the implementation source of truth.
- `site-spec.json` is the only source of truth for pages, sections, navigation, routing, and required features.
- If supported by the project architecture, `content.json` is the source of truth for copy, labels, CTA text, and contact details.
- If supported by the project architecture, `theme.json` is the source of truth for colors, typography, spacing, radius, and visual tokens.
- The implementation flow must be: `prompt -> site-spec.json -> tasks -> code`.
- Never implement pages, routes, sections, navigation items, or features that are not defined in the spec.

## Core Principles
- Build for users first: clarity, speed, and clear actions.
- Keep code modular: reusable components with clear responsibilities.
- Favor consistency over custom one-off solutions.
- Ship small, test often, improve iteratively.
- Prefer deterministic implementation over free interpretation.
- Do not invent structure outside the spec.

## Stack
- Vite
- React
- Component-based architecture

## Required Architecture
Preferred structure:

```txt
src/
  components/
  sections/
  pages/
  layout/
  data/
  assets/
  styles/
  utils/
```

### Rules
- One responsibility per component.
- No giant monolithic page files.
- Reuse shared primitives where possible.
- Avoid duplicated markup patterns across sections.
- Prefer composition over deeply nested conditional JSX.
- Keep structure, content, and styling separated where possible.

## Layout Rules
- Hero must be full width or visually dominant at the top.
- Mobile-first responsive design is mandatory.
- Primary CTA must be visible above the fold.
- Use a max content width for readability, except for intentionally full-bleed sections.
- Maintain a consistent spacing system across all sections.
- Visual hierarchy must be clear: headline -> value -> action.
- No horizontal overflow on any tested breakpoint.
- Sections must feel complete and intentional, not sparse or placeholder-like.

## Required Components
- Header
- Hero
- Sections
- Footer

## Minimum Homepage Requirements
- Every homepage must include a hero section.
- Every homepage must include at least 2 additional meaningful content sections.
- Every homepage must include at least 1 visible CTA.
- If a gallery is required by spec, it must exist and be reachable.
- If contact actions are required by spec, they must be implemented and functional.

## Component Guidelines
- One responsibility per component.
- Keep UI and business logic separated when possible.
- Use props for configuration and avoid hardcoded content inside reusable components.
- Create shared primitives for buttons, headings, cards, containers, and section wrappers.
- Prefer composition over deeply nested conditional JSX.
- Use clear component names and prop names.
- Avoid dead components and unused routes.
- Avoid excessive inline complexity.

## Content Rules
- Content must be specific, concise, user-focused, and business-relevant.
- No lorem ipsum.
- No placeholder text.
- No dummy text.
- No "coming soon" unless explicitly required by the spec.
- No empty sections.
- No empty buttons.
- No empty links.
- Use exactly one meaningful `h1` per page.
- Section headings must be descriptive.
- CTA text must be action-oriented and specific.
- Text must feel realistic for the business type.
- When supported by the architecture, text content should come from `content.json`.
- Reusable sections should accept content through props or mapped data instead of hardcoded strings.

## Gallery
- Use a grid layout.
- Use responsive columns:
  - mobile: 1
  - tablet: 2
  - desktop: 3 or more when appropriate
- Optimize images with compression, proper dimensions, and lazy loading where appropriate.
- Images must have valid sources.
- Images must not be broken.
- Informative images must have meaningful alt text.
- Decorative images may use empty alt text only when semantically appropriate.
- Do not include a gallery navigation item unless the gallery exists and is reachable.

## CTA
- There must be at least one primary CTA in the hero.
- A fixed WhatsApp button must exist only when required by the spec.
- A phone CTA should exist in the hero when relevant to the business type.
- Primary CTA text must be action-oriented and specific.
- CTA style must remain consistent across all pages and sections.
- Every CTA must resolve correctly.
- Telephone CTAs must use valid `tel:` links.
- Email CTAs must use valid `mailto:` links.
- WhatsApp CTAs must use a valid WhatsApp URL format when enabled.
- Internal CTAs must point to an existing section or route.

## Responsive Rules
- Design starts from mobile viewport first.
- No horizontal scroll on any breakpoint.
- Touch targets must be large enough on mobile.
- Fixed CTAs must not cover essential content.
- Header must remain usable on small screens.
- Hero content must remain readable on small screens.
- Text blocks must not become too wide on desktop.
- Images must scale correctly without distortion.
- Grids must collapse cleanly across breakpoints.
- Test at least these breakpoints:
  - 360px
  - 768px
  - 1024px
  - 1440px

## Navigation Integrity
- Every navigation item must point to a real existing destination.
- Do not create links for pages, routes, or sections that do not exist.
- Before considering the implementation complete, verify that every header link, footer link, CTA, and internal navigation target resolves correctly.
- For single-page sections, verify that the target section `id` exists in the rendered page.
- For multi-page navigation, verify that the route exists and renders without 404 errors.
- If the project uses HashRouter, all internal navigation must be compatible with HashRouter.
- Do not mix plain absolute paths and hash-based routes incorrectly.
- If a section or page is not implemented, remove the corresponding navigation item instead of leaving a broken link.
- Navigation should be derived from the structure defined in `site-spec.json` whenever possible.
- Navigation must not be treated as freeform UI content.

## Accessibility
- Use semantic HTML: `header`, `main`, `section`, `footer`, `nav`.
- Ensure readable color contrast.
- All interactive elements must be keyboard accessible.
- Provide meaningful alt text for informative images.
- Decorative images may use empty alt text only when appropriate.
- Keep heading structure logical: `h1 -> h2 -> h3`.
- Buttons must be real buttons when they trigger actions.
- Links must be real links when they navigate.
- Avoid vague labels when the context is unclear.

## Performance
- Optimize and compress media assets.
- Prefer local or controlled assets over fragile third-party hotlinks when possible.
- Use lazy loading for below-the-fold images where appropriate.
- Minimize unnecessary re-renders in React components.
- Avoid heavy dependencies unless they add clear value.
- Keep the implementation lightweight and static-friendly.

## SEO and Content
- One clear `h1` per page.
- Descriptive page title.
- Descriptive meta description.
- Use meaningful section headings and internal links.
- Keep copy concise, scannable, and user-focused.
- Do not sacrifice usability for SEO tricks.

## Code Quality Rules
- Code must remain maintainable and readable.
- Use clear component names.
- Use clear prop names.
- Do not leave dead components in the project.
- Do not leave unused routes in the project.
- Avoid duplicated layout logic when a shared wrapper is appropriate.
- Reusable UI patterns should be extracted into shared primitives.

Preferred shared primitives:
- Button
- Container
- SectionWrapper
- HeadingBlock
- Card
- CTABlock

## Task Execution Constraints
- Modify only the files allowed for the current task.
- Respect protected files.
- Do not introduce unrelated refactors.
- Do not break previously validated functionality.
- Do not change router behavior unless the task explicitly requires it.
- Do not add speculative features.
- Each task must produce the smallest correct change that moves the project forward safely.

## Definition of Done for a Task
A task is complete only if:
- the requested feature is implemented
- the app builds successfully
- the affected UI renders correctly
- navigation remains valid
- no new console errors are introduced
- responsive behavior is not broken
- no placeholder content is left behind

A task is not complete if it only looks correct in code but is not validated in the browser.

## Quality Gates
### Technical Pass
A site passes technical validation only if:
- build succeeds
- required semantic structure exists
- no broken images
- no broken navigation
- no blocking console errors
- required core components are present

### Publishable Pass
A site passes publishable validation only if:
- content feels real and complete
- no placeholder or empty sections exist
- CTA strategy is visible and coherent
- hierarchy is clear
- layout feels intentional on mobile and desktop
- contact actions are usable
- the site does not feel unfinished

A site must not deploy unless it passes both levels.

## Quality Checklist Before Delivery
- Layout matches all required sections and CTA rules.
- Fully responsive and tested on key breakpoints.
- No console errors.
- No broken images.
- No broken navigation.
- No empty sections.
- No placeholder text.
- Hero is strong and readable.
- CTA is visible and functional.
- Contact actions work.
- Heading structure is valid.
- Page title and meta description are set.
- Lighthouse baseline checked for Performance, Accessibility, and Best Practices.
- Final pass completed for text, links, and contact actions.

## Priority Order for Decision Making
When rules conflict, apply this order:
1. source of truth correctness
2. navigation integrity
3. technical stability
4. responsive usability
5. content clarity
6. visual polish
7. implementation elegance


## Original project brief
# Original project prompt

Create a premium modern website for a professional dog educator and behavior consultant called Equilibrio Cinofilo.

The business helps dog owners improve communication, behavior, daily management, and emotional balance with their dogs through ethical, practical, and modern education.
The approach must feel professional, calm, trustworthy, and deeply human.
This is not a flashy “alpha dog” brand.
It must communicate competence, empathy, structure, and real-world results.

SERVICES OFFERED
The business offers:
- puppy education
- basic dog education
- leash work and recall
- behavioral consultations
- support for reactivity, anxiety, and management issues
- one-to-one sessions
- educational walks
- support for owners before and after adoption
- optional group classes if useful
- online consultation if suitable

GOAL
The website must feel like a real premium service business that a client would trust with their dog.
It must not feel cheap, aggressive, or gimmicky.
It must avoid stereotypes like domination language, punitive energy, or “miracle training” tone.
The final result should feel modern, clean, grounded, emotionally intelligent, and professional.

ARCHITECTURE
This must be a real multi-page website.
Do NOT build it as a single-page website with anchor links.
Do NOT collapse all content into the homepage.

Create these real pages with real routes:
- Home
- Services
- Percorsi
- Chi siamo
- FAQ
- Contatti

Required routes:
- /
- /services
- /percorsi
- /chi-siamo
- /faq
- /contatti

NAVIGATION
Header navigation must include:
- Home
- Services
- Percorsi
- Chi siamo
- FAQ
- Contatti

Navigation must use real routes, not homepage anchors.
Each navigation item must point to an actually existing page.
The mobile menu must work properly.
No broken links.

GENERAL BRAND DIRECTION
Brand name: Equilibrio Cinofilo
Target audience:
- first-time dog owners
- families with puppies
- people with adolescent or adult dogs showing difficult behaviors
- owners who want practical and respectful guidance
- people who want help understanding their dog better

Brand values:
- trust
- calm
- respect
- consistency
- education
- emotional balance
- clarity
- everyday practicality

TONE OF VOICE
The copy must feel:
- reassuring
- competent
- calm
- clear
- empathetic
- realistic
- never judgmental
- never macho
- never exaggerated

Avoid:
- aggressive dog training clichés
- fake urgency
- manipulative language
- miracle promises
- overcomplicated technical jargon

VISUAL STYLE
The design must feel:
- calm
- elegant
- natural
- modern
- clean
- spacious
- trustworthy
- warm but professional

Inspiration:
- premium wellness service websites
- boutique consulting brands
- nature-inspired modern service brands
- behavior / care services with a calm visual identity

COLOR PALETTE
Use a calm and refined palette such as:
- warm off-white / sand background
- muted sage or olive accents
- charcoal or deep warm gray for text
- soft earthy beige / taupe neutrals
- optional dusty terracotta accent used sparingly

Typography:
- refined modern serif or elegant humanist heading font
- clean sans serif for body copy
- excellent readability
- soft, premium hierarchy

LAYOUT RULES
- mobile first
- clear visual hierarchy
- spacious sections
- no visual clutter
- no cheap gradients
- no noisy icons everywhere
- premium use of whitespace
- content blocks must feel balanced and easy to scan
- all pages must feel coherent as one brand

IMAGE DIRECTION
Use high quality Unsplash images.
Search themes like:
- dog owner outdoors
- dog training positive reinforcement
- person with dog in park
- calm dog portrait
- dog and human connection
- puppy training
- dog walking training
- responsible dog education

Images must:
- feel natural and authentic
- avoid cheesy stock-photo energy
- use object-fit: cover
- never be stretched
- support a calm and trustworthy tone
- show healthy and respectful dog-human interaction

HOME PAGE
The homepage must be a true strategic overview, not a page that contains the whole site.

Include these sections:
1. Hero
2. Main services preview
3. Why work with Equilibrio Cinofilo
4. Percorsi preview
5. Short about preview
6. FAQ preview
7. Final CTA

HOME HERO
Large calm hero section with premium natural imagery.

Hero content:
Eyebrow:
"Educazione cinofila moderna, pratica e rispettosa"

Main title:
"Aiuto concreto per costruire una relazione più serena con il tuo cane"

Subtitle:
"Equilibrio Cinofilo accompagna cani e persone con percorsi educativi chiari, etici e personalizzati, pensati per la vita di tutti i giorni."

Primary CTA:
"Prenota una consulenza"

Secondary CTA:
"Scopri i percorsi"

SERVICES PAGE
Create a full dedicated Services page.

Include:
- hero section
- introduction to the service approach
- clear service cards or structured blocks
- puppy education
- adolescent dog education
- adult dog education
- behavioral consultation
- educational walks
- pre-adoption support
- post-adoption support
- online consultation if suitable
- CTA section

Each service block should include:
- service name
- short practical description
- who it is for
- outcome or benefit

This page must feel helpful, concrete, and non-generic.

PERCORSI PAGE
Create a dedicated Percorsi page.
This page should explain how the work is structured.

Include:
- hero
- intro explaining that every dog-owner pair is different
- examples of educational paths such as:
  - Cucciolo sereno
  - Passeggiate senza tensione
  - Richiamo e gestione in esterna
  - Convivenza equilibrata
  - Supporto per reattività e gestione emotiva
- each path should have:
  - title
  - who it is for
  - main goals
  - tone focused on progress, not miracles
- section explaining how a first consultation works
- CTA to contact

This page should help the user understand structure and professionalism.

CHI SIAMO PAGE
Create a dedicated About page.

Include:
- hero
- educator presentation
- philosophy and method
- values
- relationship-centered approach
- practical and respectful work style
- trust-building content
- image + text sections
- closing CTA

This page should make the educator feel real, competent, and approachable.
Avoid sounding self-important.

FAQ PAGE
Create a dedicated FAQ page.

Include realistic and useful questions such as:
- When should I contact a dog educator?
- Is it too late if my dog is already an adult?
- Do you also work with puppies?
- Do you use force-free or respectful methods?
- How many sessions are usually needed?
- Can the whole family participate?
- Do you offer home visits?
- Can online sessions be useful?
- Do you work with reactive dogs?

Answers must be realistic, reassuring, and professional.

CONTACT PAGE
Create a real Contact page.

Include:
- hero
- short welcoming intro
- contact info block
- phone
- email
- WhatsApp CTA if suitable
- city / service area
- optional service availability
- inquiry CTA or clean contact form block if appropriate

Use realistic placeholder details such as:
Service area:
Torino and surrounding areas

Phone:
+39 011 000000

Email:
ciao@equilibriocinofilo.it

WhatsApp:
available as a CTA if it fits the design

The contact page should feel easy, calm, and inviting.

CTA STRATEGY
The site must contain meaningful CTAs such as:
- Prenota una consulenza
- Scopri i percorsi
- Richiedi informazioni
- Contattami
- Inizia da qui

CTA style must be consistent across the site.
Buttons must feel elegant and clear.
No spammy conversion style.

FOOTER
Create a refined footer with:
- brand name
- short brand line
- navigation links
- contact info
- service area
- social placeholder links if useful
- copyright

SEO / CONTENT
- one clear H1 per page
- polished realistic copy in Italian
- no lorem ipsum
- no placeholder feel
- content should sound like a real premium dog education brand
- page titles and meta descriptions should exist
- heading structure must be logical
- copy should be concise but warm and credible

RESPONSIVE QUALITY
- fully responsive
- no horizontal scroll
- balanced spacing at all key breakpoints
- mobile navigation must work
- sections must stack cleanly
- cards must remain readable on mobile
- forms and CTAs must be easy to use on mobile

QUALITY EXPECTATION
The final website must feel like a real professional website for a modern dog educator.
It should be sellable to a real client.
It must look emotionally intelligent, calm, modern, and trustworthy.
It must not feel like a generic pet template.
It must not feel like a single-page site stretched into fake pages.
Each page must have a real purpose and distinct content.


## Brief summary
# Brief summary

## Original prompt
Create a premium modern website for a professional dog educator and behavior consultant called Equilibrio Cinofilo.

The business helps dog owners improve communication, behavior, daily management, and emotional balance with their dogs through ethical, practical, and modern education.
The approach must feel professional, calm, trustworthy, and deeply human.
This is not a flashy “alpha dog” brand.
It must communicate competence, empathy, structure, and real-world results.

SERVICES OFFERED
The business offers:
- puppy education
- basic dog education
- leash work and recall
- behavioral consultations
- support for reactivity, anxiety, and management issues
- one-to-one sessions
- educational walks
- support for owners before and after adoption
- optional group classes if useful
- online consultation if suitable

GOAL
The website must feel like a real premium service business that a client would trust with their dog.
It must not feel cheap, aggressive, or gimmicky.
It must avoid stereotypes like domination language, punitive energy, or “miracle training” tone.
The final result should feel modern, clean, grounded, emotionally intelligent, and professional.

ARCHITECTURE
This must be a real multi-page website.
Do NOT build it as a single-page website with anchor links.
Do NOT collapse all content into the homepage.

Create these real pages with real routes:
- Home
- Services
- Percorsi
- Chi siamo
- FAQ
- Contatti

Required routes:
- /
- /services
- /percorsi
- /chi-siamo
- /faq
- /contatti

NAVIGATION
Header navigation must include:
- Home
- Services
- Percorsi
- Chi siamo
- FAQ
- Contatti

Navigation must use real routes, not homepage anchors.
Each navigation item must point to an actually existing page.
The mobile menu must work properly.
No broken links.

GENERAL BRAND DIRECTION
Brand name: Equilibrio Cinofilo
Target audience:
- first-time dog owners
- families with puppies
- people with adolescent or adult dogs showing difficult behaviors
- owners who want practical and respectful guidance
- people who want help understanding their dog better

Brand values:
- trust
- calm
- respect
- consistency
- education
- emotional balance
- clarity
- everyday practicality

TONE OF VOICE
The copy must feel:
- reassuring
- competent
- calm
- clear
- empathetic
- realistic
- never judgmental
- never macho
- never exaggerated

Avoid:
- aggressive dog training clichés
- fake urgency
- manipulative language
- miracle promises
- overcomplicated technical jargon

VISUAL STYLE
The design must feel:
- calm
- elegant
- natural
- modern
- clean
- spacious
- trustworthy
- warm but professional

Inspiration:
- premium wellness service websites
- boutique consulting brands
- nature-inspired modern service brands
- behavior / care services with a calm visual identity

COLOR PALETTE
Use a calm and refined palette such as:
- warm off-white / sand background
- muted sage or olive accents
- charcoal or deep warm gray for text
- soft earthy beige / taupe neutrals
- optional dusty terracotta accent used sparingly

Typography:
- refined modern serif or elegant humanist heading font
- clean sans serif for body copy
- excellent readability
- soft, premium hierarchy

LAYOUT RULES
- mobile first
- clear visual hierarchy
- spacious sections
- no visual clutter
- no cheap gradients
- no noisy icons everywhere
- premium use of whitespace
- content blocks must feel balanced and easy to scan
- all pages must feel coherent as one brand

IMAGE DIRECTION
Use high quality Unsplash images.
Search themes like:
- dog owner outdoors
- dog training positive reinforcement
- person with dog in park
- calm dog portrait
- dog and human connection
- puppy training
- dog walking training
- responsible dog education

Images must:
- feel natural and authentic
- avoid cheesy stock-photo energy
- use object-fit: cover
- never be stretched
- support a calm and trustworthy tone
- show healthy and respectful dog-human interaction

HOME PAGE
The homepage must be a true strategic overview, not a page that contains the whole site.

Include these sections:
1. Hero
2. Main services preview
3. Why work with Equilibrio Cinofilo
4. Percorsi preview
5. Short about preview
6. FAQ preview
7. Final CTA

HOME HERO
Large calm hero section with premium natural imagery.

Hero content:
Eyebrow:
"Educazione cinofila moderna, pratica e rispettosa"

Main title:
"Aiuto concreto per costruire una relazione più serena con il tuo cane"

Subtitle:
"Equilibrio Cinofilo accompagna cani e persone con percorsi educativi chiari, etici e personalizzati, pensati per la vita di tutti i giorni."

Primary CTA:
"Prenota una consulenza"

Secondary CTA:
"Scopri i percorsi"

SERVICES PAGE
Create a full dedicated Services page.

Include:
- hero section
- introduction to the service approach
- clear service cards or structured blocks
- puppy education
- adolescent dog education
- adult dog education
- behavioral consultation
- educational walks
- pre-adoption support
- post-adoption support
- online consultation if suitable
- CTA section

Each service block should include:
- service name
- short practical description
- who it is for
- outcome or benefit

This page must feel helpful, concrete, and non-generic.

PERCORSI PAGE
Create a dedicated Percorsi page.
This page should explain how the work is structured.

Include:
- hero
- intro explaining that every dog-owner pair is different
- examples of educational paths such as:
  - Cucciolo sereno
  - Passeggiate senza tensione
  - Richiamo e gestione in esterna
  - Convivenza equilibrata
  - Supporto per reattività e gestione emotiva
- each path should have:
  - title
  - who it is for
  - main goals
  - tone focused on progress, not miracles
- section explaining how a first consultation works
- CTA to contact

This page should help the user understand structure and professionalism.

CHI SIAMO PAGE
Create a dedicated About page.

Include:
- hero
- educator presentation
- philosophy and method
- values
- relationship-centered approach
- practical and respectful work style
- trust-building content
- image + text sections
- closing CTA

This page should make the educator feel real, competent, and approachable.
Avoid sounding self-important.

FAQ PAGE
Create a dedicated FAQ page.

Include realistic and useful questions such as:
- When should I contact a dog educator?
- Is it too late if my dog is already an adult?
- Do you also work with puppies?
- Do you use force-free or respectful methods?
- How many sessions are usually needed?
- Can the whole family participate?
- Do you offer home visits?
- Can online sessions be useful?
- Do you work with reactive dogs?

Answers must be realistic, reassuring, and professional.

CONTACT PAGE
Create a real Contact page.

Include:
- hero
- short welcoming intro
- contact info block
- phone
- email
- WhatsApp CTA if suitable
- city / service area
- optional service availability
- inquiry CTA or clean contact form block if appropriate

Use realistic placeholder details such as:
Service area:
Torino and surrounding areas

Phone:
+39 011 000000

Email:
ciao@equilibriocinofilo.it

WhatsApp:
available as a CTA if it fits the design

The contact page should feel easy, calm, and inviting.

CTA STRATEGY
The site must contain meaningful CTAs such as:
- Prenota una consulenza
- Scopri i percorsi
- Richiedi informazioni
- Contattami
- Inizia da qui

CTA style must be consistent across the site.
Buttons must feel elegant and clear.
No spammy conversion style.

FOOTER
Create a refined footer with:
- brand name
- short brand line
- navigation links
- contact info
- service area
- social placeholder links if useful
- copyright

SEO / CONTENT
- one clear H1 per page
- polished realistic copy in Italian
- no lorem ipsum
- no placeholder feel
- content should sound like a real premium dog education brand
- page titles and meta descriptions should exist
- heading structure must be logical
- copy should be concise but warm and credible

RESPONSIVE QUALITY
- fully responsive
- no horizontal scroll
- balanced spacing at all key breakpoints
- mobile navigation must work
- sections must stack cleanly
- cards must remain readable on mobile
- forms and CTAs must be easy to use on mobile

QUALITY EXPECTATION
The final website must feel like a real professional website for a modern dog educator.
It should be sellable to a real client.
It must look emotionally intelligent, calm, modern, and trustworthy.
It must not feel like a generic pet template.
It must not feel like a single-page site stretched into fake pages.
Each page must have a real purpose and distinct content.

## Structured summary
- Site name: site-create-a-premium-modern-website-for-a-pr
- Business type: generic-business
- Routing mode: hash
- Pages: home, menu, chi-siamo, contatti
- Navigation: Home [route:/], Menu [route:/menu], Chi siamo [route:/chi-siamo], Contatti [route:/contatti]
- Validation checks: semantic-structure, navigation-integrity, cta-integrity, images-not-broken, responsive-layout, placeholder-content-absent
- Breakpoints: 360, 768, 1024, 1440
- Gallery: no
- WhatsApp CTA: yes
- Phone CTA: yes

## Pages and sections
- home: sections [hero (hero), signature-preview (grid-cards-preview), brand-story-preview (split-content-preview)], ctas [home-primary-cta (internal/hero), home-contact-cta (internal/hero), home-whatsapp (external/floating)]
- menu: sections [menu-hero (hero), menu-categories (menu-categories)], ctas [none]
- chi-siamo: sections [about-hero (hero), story (editorial-content), philosophy (split-content)], ctas [none]
- contatti: sections [contact-hero (hero), contact-details (contact-block), opening-hours (hours-block)], ctas [contatti-whatsapp (external/body), contatti-phone (external/body)]

## Notes
- Use the original prompt as the richest source of visual and branding intent.
- Use site-spec.json as the implementation contract.
- Use TASK_GRAPH.json as the execution structure.
- Do not invent pages, sections, routes, or navigation items outside the spec.


## Structured spec
```json
{
  "originalPrompt": "Create a premium modern website for a professional dog educator and behavior consultant called Equilibrio Cinofilo.\n\nThe business helps dog owners improve communication, behavior, daily management, and emotional balance with their dogs through ethical, practical, and modern education.\nThe approach must feel professional, calm, trustworthy, and deeply human.\nThis is not a flashy “alpha dog” brand.\nIt must communicate competence, empathy, structure, and real-world results.\n\nSERVICES OFFERED\nThe business offers:\n- puppy education\n- basic dog education\n- leash work and recall\n- behavioral consultations\n- support for reactivity, anxiety, and management issues\n- one-to-one sessions\n- educational walks\n- support for owners before and after adoption\n- optional group classes if useful\n- online consultation if suitable\n\nGOAL\nThe website must feel like a real premium service business that a client would trust with their dog.\nIt must not feel cheap, aggressive, or gimmicky.\nIt must avoid stereotypes like domination language, punitive energy, or “miracle training” tone.\nThe final result should feel modern, clean, grounded, emotionally intelligent, and professional.\n\nARCHITECTURE\nThis must be a real multi-page website.\nDo NOT build it as a single-page website with anchor links.\nDo NOT collapse all content into the homepage.\n\nCreate these real pages with real routes:\n- Home\n- Services\n- Percorsi\n- Chi siamo\n- FAQ\n- Contatti\n\nRequired routes:\n- /\n- /services\n- /percorsi\n- /chi-siamo\n- /faq\n- /contatti\n\nNAVIGATION\nHeader navigation must include:\n- Home\n- Services\n- Percorsi\n- Chi siamo\n- FAQ\n- Contatti\n\nNavigation must use real routes, not homepage anchors.\nEach navigation item must point to an actually existing page.\nThe mobile menu must work properly.\nNo broken links.\n\nGENERAL BRAND DIRECTION\nBrand name: Equilibrio Cinofilo\nTarget audience:\n- first-time dog owners\n- families with puppies\n- people with adolescent or adult dogs showing difficult behaviors\n- owners who want practical and respectful guidance\n- people who want help understanding their dog better\n\nBrand values:\n- trust\n- calm\n- respect\n- consistency\n- education\n- emotional balance\n- clarity\n- everyday practicality\n\nTONE OF VOICE\nThe copy must feel:\n- reassuring\n- competent\n- calm\n- clear\n- empathetic\n- realistic\n- never judgmental\n- never macho\n- never exaggerated\n\nAvoid:\n- aggressive dog training clichés\n- fake urgency\n- manipulative language\n- miracle promises\n- overcomplicated technical jargon\n\nVISUAL STYLE\nThe design must feel:\n- calm\n- elegant\n- natural\n- modern\n- clean\n- spacious\n- trustworthy\n- warm but professional\n\nInspiration:\n- premium wellness service websites\n- boutique consulting brands\n- nature-inspired modern service brands\n- behavior / care services with a calm visual identity\n\nCOLOR PALETTE\nUse a calm and refined palette such as:\n- warm off-white / sand background\n- muted sage or olive accents\n- charcoal or deep warm gray for text\n- soft earthy beige / taupe neutrals\n- optional dusty terracotta accent used sparingly\n\nTypography:\n- refined modern serif or elegant humanist heading font\n- clean sans serif for body copy\n- excellent readability\n- soft, premium hierarchy\n\nLAYOUT RULES\n- mobile first\n- clear visual hierarchy\n- spacious sections\n- no visual clutter\n- no cheap gradients\n- no noisy icons everywhere\n- premium use of whitespace\n- content blocks must feel balanced and easy to scan\n- all pages must feel coherent as one brand\n\nIMAGE DIRECTION\nUse high quality Unsplash images.\nSearch themes like:\n- dog owner outdoors\n- dog training positive reinforcement\n- person with dog in park\n- calm dog portrait\n- dog and human connection\n- puppy training\n- dog walking training\n- responsible dog education\n\nImages must:\n- feel natural and authentic\n- avoid cheesy stock-photo energy\n- use object-fit: cover\n- never be stretched\n- support a calm and trustworthy tone\n- show healthy and respectful dog-human interaction\n\nHOME PAGE\nThe homepage must be a true strategic overview, not a page that contains the whole site.\n\nInclude these sections:\n1. Hero\n2. Main services preview\n3. Why work with Equilibrio Cinofilo\n4. Percorsi preview\n5. Short about preview\n6. FAQ preview\n7. Final CTA\n\nHOME HERO\nLarge calm hero section with premium natural imagery.\n\nHero content:\nEyebrow:\n\"Educazione cinofila moderna, pratica e rispettosa\"\n\nMain title:\n\"Aiuto concreto per costruire una relazione più serena con il tuo cane\"\n\nSubtitle:\n\"Equilibrio Cinofilo accompagna cani e persone con percorsi educativi chiari, etici e personalizzati, pensati per la vita di tutti i giorni.\"\n\nPrimary CTA:\n\"Prenota una consulenza\"\n\nSecondary CTA:\n\"Scopri i percorsi\"\n\nSERVICES PAGE\nCreate a full dedicated Services page.\n\nInclude:\n- hero section\n- introduction to the service approach\n- clear service cards or structured blocks\n- puppy education\n- adolescent dog education\n- adult dog education\n- behavioral consultation\n- educational walks\n- pre-adoption support\n- post-adoption support\n- online consultation if suitable\n- CTA section\n\nEach service block should include:\n- service name\n- short practical description\n- who it is for\n- outcome or benefit\n\nThis page must feel helpful, concrete, and non-generic.\n\nPERCORSI PAGE\nCreate a dedicated Percorsi page.\nThis page should explain how the work is structured.\n\nInclude:\n- hero\n- intro explaining that every dog-owner pair is different\n- examples of educational paths such as:\n  - Cucciolo sereno\n  - Passeggiate senza tensione\n  - Richiamo e gestione in esterna\n  - Convivenza equilibrata\n  - Supporto per reattività e gestione emotiva\n- each path should have:\n  - title\n  - who it is for\n  - main goals\n  - tone focused on progress, not miracles\n- section explaining how a first consultation works\n- CTA to contact\n\nThis page should help the user understand structure and professionalism.\n\nCHI SIAMO PAGE\nCreate a dedicated About page.\n\nInclude:\n- hero\n- educator presentation\n- philosophy and method\n- values\n- relationship-centered approach\n- practical and respectful work style\n- trust-building content\n- image + text sections\n- closing CTA\n\nThis page should make the educator feel real, competent, and approachable.\nAvoid sounding self-important.\n\nFAQ PAGE\nCreate a dedicated FAQ page.\n\nInclude realistic and useful questions such as:\n- When should I contact a dog educator?\n- Is it too late if my dog is already an adult?\n- Do you also work with puppies?\n- Do you use force-free or respectful methods?\n- How many sessions are usually needed?\n- Can the whole family participate?\n- Do you offer home visits?\n- Can online sessions be useful?\n- Do you work with reactive dogs?\n\nAnswers must be realistic, reassuring, and professional.\n\nCONTACT PAGE\nCreate a real Contact page.\n\nInclude:\n- hero\n- short welcoming intro\n- contact info block\n- phone\n- email\n- WhatsApp CTA if suitable\n- city / service area\n- optional service availability\n- inquiry CTA or clean contact form block if appropriate\n\nUse realistic placeholder details such as:\nService area:\nTorino and surrounding areas\n\nPhone:\n+39 011 000000\n\nEmail:\nciao@equilibriocinofilo.it\n\nWhatsApp:\navailable as a CTA if it fits the design\n\nThe contact page should feel easy, calm, and inviting.\n\nCTA STRATEGY\nThe site must contain meaningful CTAs such as:\n- Prenota una consulenza\n- Scopri i percorsi\n- Richiedi informazioni\n- Contattami\n- Inizia da qui\n\nCTA style must be consistent across the site.\nButtons must feel elegant and clear.\nNo spammy conversion style.\n\nFOOTER\nCreate a refined footer with:\n- brand name\n- short brand line\n- navigation links\n- contact info\n- service area\n- social placeholder links if useful\n- copyright\n\nSEO / CONTENT\n- one clear H1 per page\n- polished realistic copy in Italian\n- no lorem ipsum\n- no placeholder feel\n- content should sound like a real premium dog education brand\n- page titles and meta descriptions should exist\n- heading structure must be logical\n- copy should be concise but warm and credible\n\nRESPONSIVE QUALITY\n- fully responsive\n- no horizontal scroll\n- balanced spacing at all key breakpoints\n- mobile navigation must work\n- sections must stack cleanly\n- cards must remain readable on mobile\n- forms and CTAs must be easy to use on mobile\n\nQUALITY EXPECTATION\nThe final website must feel like a real professional website for a modern dog educator.\nIt should be sellable to a real client.\nIt must look emotionally intelligent, calm, modern, and trustworthy.\nIt must not feel like a generic pet template.\nIt must not feel like a single-page site stretched into fake pages.\nEach page must have a real purpose and distinct content.",
  "siteName": "site-create-a-premium-modern-website-for-a-pr",
  "businessType": "generic-business",
  "architecture": "multi-page",
  "routing": {
    "mode": "hash"
  },
  "pages": [
    {
      "id": "home",
      "route": "/",
      "role": "landing",
      "sections": [
        {
          "id": "hero",
          "type": "hero"
        },
        {
          "id": "signature-preview",
          "type": "grid-cards-preview"
        },
        {
          "id": "brand-story-preview",
          "type": "split-content-preview"
        }
      ],
      "ctas": [
        {
          "id": "home-primary-cta",
          "kind": "internal",
          "placement": "hero",
          "target": {
            "type": "route",
            "value": "/menu"
          }
        },
        {
          "id": "home-contact-cta",
          "kind": "internal",
          "placement": "hero",
          "target": {
            "type": "route",
            "value": "/contatti"
          }
        },
        {
          "id": "home-whatsapp",
          "kind": "external",
          "placement": "floating",
          "target": {
            "type": "whatsapp",
            "value": "whatsapp"
          }
        }
      ]
    },
    {
      "id": "menu",
      "route": "/menu",
      "role": "core",
      "sections": [
        {
          "id": "menu-hero",
          "type": "hero"
        },
        {
          "id": "menu-categories",
          "type": "menu-categories"
        }
      ],
      "ctas": []
    },
    {
      "id": "chi-siamo",
      "route": "/chi-siamo",
      "role": "content",
      "sections": [
        {
          "id": "about-hero",
          "type": "hero"
        },
        {
          "id": "story",
          "type": "editorial-content"
        },
        {
          "id": "philosophy",
          "type": "split-content"
        }
      ],
      "ctas": []
    },
    {
      "id": "contatti",
      "route": "/contatti",
      "role": "conversion",
      "sections": [
        {
          "id": "contact-hero",
          "type": "hero"
        },
        {
          "id": "contact-details",
          "type": "contact-block"
        },
        {
          "id": "opening-hours",
          "type": "hours-block"
        }
      ],
      "ctas": [
        {
          "id": "contatti-whatsapp",
          "kind": "external",
          "placement": "body",
          "target": {
            "type": "whatsapp",
            "value": "whatsapp"
          }
        },
        {
          "id": "contatti-phone",
          "kind": "external",
          "placement": "body",
          "target": {
            "type": "phone",
            "value": "phone"
          }
        }
      ]
    }
  ],
  "navigation": [
    {
      "label": "Home",
      "type": "route",
      "target": "/"
    },
    {
      "label": "Menu",
      "type": "route",
      "target": "/menu"
    },
    {
      "label": "Chi siamo",
      "type": "route",
      "target": "/chi-siamo"
    },
    {
      "label": "Contatti",
      "type": "route",
      "target": "/contatti"
    }
  ],
  "theme": {
    "mode": "derived-from-prompt"
  },
  "validation": {
    "breakpoints": [
      360,
      768,
      1024,
      1440
    ],
    "checks": [
      "semantic-structure",
      "navigation-integrity",
      "cta-integrity",
      "images-not-broken",
      "responsive-layout",
      "placeholder-content-absent"
    ]
  },
  "features": {
    "gallery": false,
    "whatsappCta": true,
    "phoneCta": true,
    "bookingCta": true,
    "menuPage": true,
    "servicesPage": true
  }
}

```

## Current task id
validation-prep

## Current task title
Prepare site for final validation

## Current task type
validation-prep

## Current task target
```json
{
  "checks": [
    "semantic-structure",
    "navigation-integrity",
    "cta-integrity",
    "images-not-broken",
    "responsive-layout",
    "placeholder-content-absent"
  ]
}
```

## Depends on
- navigation-structure
- responsive-polish
- seo-basics

## Files allowed
- src
- index.html

## Definition of done
- required semantic structure exists
- required CTA structure exists
- required sections exist
- site is ready for final validation

## Strict execution rules
- Execute only this current task.
- Do not implement future tasks.
- Do not modify files outside the allowed list unless a truly minimal cross-file change is strictly required to preserve build integrity.
- Prefer the allowed files as the primary implementation scope.
- Keep the code modular, readable, and production-oriented.
- Follow the development method strictly.
- Respect the structured spec.
- If the original brief includes stylistic guidance not fully captured by the spec, follow the brief without violating the spec.
- Do not redesign unrelated sections.
- Do not remove already implemented valid work unless required for the current task.
- Keep routing and navigation coherent with the spec.
- Preserve compatibility with the project routing mode.

## Required completion behavior
- Implement the task.
- Run a build check.
- Update agent/AGENT_REPORT.md with a short summary of what was implemented.
- Do not manually change TASK_STATE.json.

## Required output
- Modified files
- What was implemented
- Build result

mcp startup: no servers
codex
I’m checking the current implementation against the validation-prep task, then I’ll patch only the gaps that affect semantic structure, navigation, CTAs, images, responsiveness, or placeholder content.
exec
/bin/zsh -lc "sed -n '1,220p' agent/CURRENT_TASK_PROMPT.md" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "sed -n '1,220p' site-spec.json" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc 'pwd && rg --files src index.html agent/AGENT_REPORT.md brief/original-prompt.md brief/brief-summary.md site-spec.json docs/DEVELOPMENT_METHOD.md agent/CURRENT_TASK_PROMPT.md agent/TASK_STATE.json agent/TASK_GRAPH.json' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr succeeded in 52ms:
{
  "originalPrompt": "Create a premium modern website for a professional dog educator and behavior consultant called Equilibrio Cinofilo.\n\nThe business helps dog owners improve communication, behavior, daily management, and emotional balance with their dogs through ethical, practical, and modern education.\nThe approach must feel professional, calm, trustworthy, and deeply human.\nThis is not a flashy “alpha dog” brand.\nIt must communicate competence, empathy, structure, and real-world results.\n\nSERVICES OFFERED\nThe business offers:\n- puppy education\n- basic dog education\n- leash work and recall\n- behavioral consultations\n- support for reactivity, anxiety, and management issues\n- one-to-one sessions\n- educational walks\n- support for owners before and after adoption\n- optional group classes if useful\n- online consultation if suitable\n\nGOAL\nThe website must feel like a real premium service business that a client would trust with their dog.\nIt must not feel cheap, aggressive, or gimmicky.\nIt must avoid stereotypes like domination language, punitive energy, or “miracle training” tone.\nThe final result should feel modern, clean, grounded, emotionally intelligent, and professional.\n\nARCHITECTURE\nThis must be a real multi-page website.\nDo NOT build it as a single-page website with anchor links.\nDo NOT collapse all content into the homepage.\n\nCreate these real pages with real routes:\n- Home\n- Services\n- Percorsi\n- Chi siamo\n- FAQ\n- Contatti\n\nRequired routes:\n- /\n- /services\n- /percorsi\n- /chi-siamo\n- /faq\n- /contatti\n\nNAVIGATION\nHeader navigation must include:\n- Home\n- Services\n- Percorsi\n- Chi siamo\n- FAQ\n- Contatti\n\nNavigation must use real routes, not homepage anchors.\nEach navigation item must point to an actually existing page.\nThe mobile menu must work properly.\nNo broken links.\n\nGENERAL BRAND DIRECTION\nBrand name: Equilibrio Cinofilo\nTarget audience:\n- first-time dog owners\n- families with puppies\n- people with adolescent or adult dogs showing difficult behaviors\n- owners who want practical and respectful guidance\n- people who want help understanding their dog better\n\nBrand values:\n- trust\n- calm\n- respect\n- consistency\n- education\n- emotional balance\n- clarity\n- everyday practicality\n\nTONE OF VOICE\nThe copy must feel:\n- reassuring\n- competent\n- calm\n- clear\n- empathetic\n- realistic\n- never judgmental\n- never macho\n- never exaggerated\n\nAvoid:\n- aggressive dog training clichés\n- fake urgency\n- manipulative language\n- miracle promises\n- overcomplicated technical jargon\n\nVISUAL STYLE\nThe design must feel:\n- calm\n- elegant\n- natural\n- modern\n- clean\n- spacious\n- trustworthy\n- warm but professional\n\nInspiration:\n- premium wellness service websites\n- boutique consulting brands\n- nature-inspired modern service brands\n- behavior / care services with a calm visual identity\n\nCOLOR PALETTE\nUse a calm and refined palette such as:\n- warm off-white / sand background\n- muted sage or olive accents\n- charcoal or deep warm gray for text\n- soft earthy beige / taupe neutrals\n- optional dusty terracotta accent used sparingly\n\nTypography:\n- refined modern serif or elegant humanist heading font\n- clean sans serif for body copy\n- excellent readability\n- soft, premium hierarchy\n\nLAYOUT RULES\n- mobile first\n- clear visual hierarchy\n- spacious sections\n- no visual clutter\n- no cheap gradients\n- no noisy icons everywhere\n- premium use of whitespace\n- content blocks must feel balanced and easy to scan\n- all pages must feel coherent as one brand\n\nIMAGE DIRECTION\nUse high quality Unsplash images.\nSearch themes like:\n- dog owner outdoors\n- dog training positive reinforcement\n- person with dog in park\n- calm dog portrait\n- dog and human connection\n- puppy training\n- dog walking training\n- responsible dog education\n\nImages must:\n- feel natural and authentic\n- avoid cheesy stock-photo energy\n- use object-fit: cover\n- never be stretched\n- support a calm and trustworthy tone\n- show healthy and respectful dog-human interaction\n\nHOME PAGE\nThe homepage must be a true strategic overview, not a page that contains the whole site.\n\nInclude these sections:\n1. Hero\n2. Main services preview\n3. Why work with Equilibrio Cinofilo\n4. Percorsi preview\n5. Short about preview\n6. FAQ preview\n7. Final CTA\n\nHOME HERO\nLarge calm hero section with premium natural imagery.\n\nHero content:\nEyebrow:\n\"Educazione cinofila moderna, pratica e rispettosa\"\n\nMain title:\n\"Aiuto concreto per costruire una relazione più serena con il tuo cane\"\n\nSubtitle:\n\"Equilibrio Cinofilo accompagna cani e persone con percorsi educativi chiari, etici e personalizzati, pensati per la vita di tutti i giorni.\"\n\nPrimary CTA:\n\"Prenota una consulenza\"\n\nSecondary CTA:\n\"Scopri i percorsi\"\n\nSERVICES PAGE\nCreate a full dedicated Services page.\n\nInclude:\n- hero section\n- introduction to the service approach\n- clear service cards or structured blocks\n- puppy education\n- adolescent dog education\n- adult dog education\n- behavioral consultation\n- educational walks\n- pre-adoption support\n- post-adoption support\n- online consultation if suitable\n- CTA section\n\nEach service block should include:\n- service name\n- short practical description\n- who it is for\n- outcome or benefit\n\nThis page must feel helpful, concrete, and non-generic.\n\nPERCORSI PAGE\nCreate a dedicated Percorsi page.\nThis page should explain how the work is structured.\n\nInclude:\n- hero\n- intro explaining that every dog-owner pair is different\n- examples of educational paths such as:\n  - Cucciolo sereno\n  - Passeggiate senza tensione\n  - Richiamo e gestione in esterna\n  - Convivenza equilibrata\n  - Supporto per reattività e gestione emotiva\n- each path should have:\n  - title\n  - who it is for\n  - main goals\n  - tone focused on progress, not miracles\n- section explaining how a first consultation works\n- CTA to contact\n\nThis page should help the user understand structure and professionalism.\n\nCHI SIAMO PAGE\nCreate a dedicated About page.\n\nInclude:\n- hero\n- educator presentation\n- philosophy and method\n- values\n- relationship-centered approach\n- practical and respectful work style\n- trust-building content\n- image + text sections\n- closing CTA\n\nThis page should make the educator feel real, competent, and approachable.\nAvoid sounding self-important.\n\nFAQ PAGE\nCreate a dedicated FAQ page.\n\nInclude realistic and useful questions such as:\n- When should I contact a dog educator?\n- Is it too late if my dog is already an adult?\n- Do you also work with puppies?\n- Do you use force-free or respectful methods?\n- How many sessions are usually needed?\n- Can the whole family participate?\n- Do you offer home visits?\n- Can online sessions be useful?\n- Do you work with reactive dogs?\n\nAnswers must be realistic, reassuring, and professional.\n\nCONTACT PAGE\nCreate a real Contact page.\n\nInclude:\n- hero\n- short welcoming intro\n- contact info block\n- phone\n- email\n- WhatsApp CTA if suitable\n- city / service area\n- optional service availability\n- inquiry CTA or clean contact form block if appropriate\n\nUse realistic placeholder details such as:\nService area:\nTorino and surrounding areas\n\nPhone:\n+39 011 000000\n\nEmail:\nciao@equilibriocinofilo.it\n\nWhatsApp:\navailable as a CTA if it fits the design\n\nThe contact page should feel easy, calm, and inviting.\n\nCTA STRATEGY\nThe site must contain meaningful CTAs such as:\n- Prenota una consulenza\n- Scopri i percorsi\n- Richiedi informazioni\n- Contattami\n- Inizia da qui\n\nCTA style must be consistent across the site.\nButtons must feel elegant and clear.\nNo spammy conversion style.\n\nFOOTER\nCreate a refined footer with:\n- brand name\n- short brand line\n- navigation links\n- contact info\n- service area\n- social placeholder links if useful\n- copyright\n\nSEO / CONTENT\n- one clear H1 per page\n- polished realistic copy in Italian\n- no lorem ipsum\n- no placeholder feel\n- content should sound like a real premium dog education brand\n- page titles and meta descriptions should exist\n- heading structure must be logical\n- copy should be concise but warm and credible\n\nRESPONSIVE QUALITY\n- fully responsive\n- no horizontal scroll\n- balanced spacing at all key breakpoints\n- mobile navigation must work\n- sections must stack cleanly\n- cards must remain readable on mobile\n- forms and CTAs must be easy to use on mobile\n\nQUALITY EXPECTATION\nThe final website must feel like a real professional website for a modern dog educator.\nIt should be sellable to a real client.\nIt must look emotionally intelligent, calm, modern, and trustworthy.\nIt must not feel like a generic pet template.\nIt must not feel like a single-page site stretched into fake pages.\nEach page must have a real purpose and distinct content.",
  "siteName": "site-create-a-premium-modern-website-for-a-pr",
  "businessType": "generic-business",
  "architecture": "multi-page",
  "routing": {
    "mode": "hash"
  },
  "pages": [
    {
      "id": "home",
      "route": "/",
      "role": "landing",
      "sections": [
        {
          "id": "hero",
          "type": "hero"
        },
        {
          "id": "signature-preview",
 succeeded in 52ms:
# CURRENT TASK EXECUTION PROMPT

You are the coding executor for this project.

## Project path
site-create-a-premium-modern-website-for-a-pr

## Source of truth files
- brief/original-prompt.md
- brief/brief-summary.md
- site-spec.json
- docs/DEVELOPMENT_METHOD.md
- agent/TASK_GRAPH.json
- agent/TASK_STATE.json
- agent/CURRENT_TASK_PROMPT.md

## Development method
# Development Method

All sites must follow these rules.
 succeeded in 52ms:
/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr
index.html
agent/TASK_GRAPH.json
agent/CURRENT_TASK_PROMPT.md
agent/TASK_STATE.json
docs/DEVELOPMENT_METHOD.md
site-spec.json
brief/brief-summary.md
brief/original-prompt.md
agent/AGENT_REPORT.md
src/pages/Home.jsx
src/pages/ChiSiamo.jsx
src/pages/Contatti.jsx
src/pages/Menu.jsx
src/assets/react.svg
src/App.jsx
src/main.jsx
src/components/FloatingWhatsAppButton.jsx
src/components/AboutHeroSection.jsx
src/components/StorySection.jsx
codex
I have the spec mismatch in view: the task prompt and `site-spec.json` define a smaller four-page hash-routed site, so I’m validating against that contract rather than the broader original brief. Next I’m reading the actual app structure to find any broken semantics, links, or placeholder content.
exec
/bin/zsh -lc "sed -n '1,220p' src/App.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "sed -n '1,260p' src/layout/Layout.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "sed -n '1,260p' src/pages/ChiSiamo.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "sed -n '1,260p' src/pages/Home.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "sed -n '1,260p' src/pages/Contatti.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "sed -n '1,260p' src/pages/Menu.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr succeeded in 52ms:
import { NavLink } from "react-router-dom"

export default function Layout({ children, navigationItems = [] }) {
  return (
    <>
      <header>
        <nav aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.target}
              to={item.target}
              end={item.target === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>{children}</main>
 succeeded in 52ms:
import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import ChiSiamo from "./pages/ChiSiamo"
import Contatti from "./pages/Contatti"

const navigationItems = [
  { label: "Home", target: "/" },
  { label: "Menu", target: "/menu" },
  { label: "Chi siamo", target: "/chi-siamo" },
  { label: "Contatti", target: "/contatti" },
]

const routes = [
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/chi-siamo", element: <ChiSiamo /> },
  { path: "/contatti", element: <Contatti /> },
]
 succeeded in 51ms:
import { useEffect } from "react"
import ContactHeroSection from "../components/ContactHeroSection"
import ContactDetailsSection from "../components/ContactDetailsSection"
import ContactPhoneCtaSection from "../components/ContactPhoneCtaSection"
import ContactWhatsAppCtaSection from "../components/ContactWhatsAppCtaSection"
import OpeningHoursSection from "../components/OpeningHoursSection"

export default function Contatti() {
  useEffect(() => {
    document.title = "Contatti | Equilibrio Cinofilo"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contatta Equilibrio Cinofilo per una consulenza educativa a Torino e dintorni: telefono, email, WhatsApp e disponibilita per iniziare con chiarezza.",
      )
    }
  }, [])

 succeeded in 51ms:
import { useEffect } from "react"
import AboutHeroSection from "../components/AboutHeroSection"
import PhilosophySection from "../components/PhilosophySection"
import StorySection from "../components/StorySection"

export default function ChiSiamo() {
  useEffect(() => {
    document.title = "Chi siamo | Equilibrio Cinofilo"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conosci l'approccio di Equilibrio Cinofilo: educazione relazionale, ascolto, chiarezza e lavoro pratico per accompagnare cani e persone con rispetto.",
      )
    }
  }, [])

  return (
    <div className="page-shell page-shell--about">
 succeeded in 51ms:
import { useEffect } from "react"
import HeroSection from "../components/HeroSection"
import SignaturePreviewSection from "../components/SignaturePreviewSection"
import BrandStoryPreviewSection from "../components/BrandStoryPreviewSection"
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton"

export default function Home() {
  useEffect(() => {
    document.title =
      "Equilibrio Cinofilo | Educazione cinofila moderna e rispettosa"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Aiuto concreto per migliorare relazione, gestione quotidiana e benessere del cane con percorsi educativi etici e personalizzati a Torino e dintorni.",
      )
    }
  }, [])

 succeeded in 51ms:
import { useEffect } from "react"
import MenuHeroSection from "../components/MenuHeroSection"
import MenuCategoriesSection from "../components/MenuCategoriesSection"

export default function Menu() {
  useEffect(() => {
    document.title = "Servizi | Equilibrio Cinofilo"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Scopri i servizi di Equilibrio Cinofilo: percorsi per cuccioli, cani adolescenti e adulti, consulenze comportamentali e supporto educativo su misura.",
      )
    }
  }, [])

  return (
    <div className="page-shell page-shell--menu">
      <MenuHeroSection />
exec
/bin/zsh -lc "sed -n '1,260p' index.html" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "sed -n '1,320p' src/index.css" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "for f in src/components/*.jsx; do echo 'FILE:' \""'$f"; sed -n '"'1,260p' \""'$f"; done' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr succeeded in 53ms:
@import "./App.css";

:root {
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #2f312d;
  background: #f8f3ea;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

 succeeded in 53ms:
<!doctype html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Equilibrio Cinofilo offre educazione cinofila moderna e consulenze comportamentali a Torino e dintorni, con un approccio pratico, etico e rispettoso."
    />
    <title>Equilibrio Cinofilo | Educazione cinofila a Torino</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
 succeeded in 53ms:
Total output lines: 1991

FILE: src/components/AboutHeroSection.jsx
const values = [
  "Lettura attenta del cane e del contesto familiare",
  "Indicazioni pratiche applicabili nella quotidianita",
  "Un lavoro rispettoso, progressivo e senza scorciatoie",
]

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4.5rem, 9vw, 7rem) 1.5rem",
    backgroundColor: "#f6f0e7",
    color: "#2d302a",
  },
  background: {
    position: "absolute",
    inset: 0,
codex
The app is mostly there, but the shell is still too bare for final validation. I’m checking the global layout, CTA targets, and any remaining accessibility or responsiveness issues before editing.
exec
/bin/zsh -lc "sed -n '1,260p' src/components/HeroSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "sed -n '1,320p' src/components/MenuCategoriesSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "sed -n '1,240p' src/components/FloatingWhatsAppButton.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "sed -n '1,320p' src/App.css" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-prexec
/bin/zsh -lc "sed -n '1,260p' src/components/ContactWhatsAppCtaSection.jsx" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr succeeded in 51ms:
const styles = {
  link: {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    zIndex: 50,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "3.5rem",
    padding: "0.95rem 1.2rem",
    borderRadius: "999px",
    border: "1px solid rgba(47, 49, 45, 0.12)",
    backgroundColor: "#5f7a57",
    color: "#f8f3ea",
    textDecoration: "none",
    boxShadow: "0 18px 30px rgba(39, 50, 35, 0.18)",
    fontSize: "0.98rem",
    fontWeight: 600,
    lineHeight: 1,
 succeeded in 53ms:
const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 6rem) 1.5rem",
    backgroundColor: "#f3ede3",
    color: "#2f312d",
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(90deg, rgba(243, 237, 227, 0.96) 0%, rgba(243, 237, 227, 0.9) 42%, rgba(243, 237, 227, 0.55) 70%, rgba(243, 237, 227, 0.2) 100%), url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=80')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  container: {
    position: "relative",
    zIndex: 1,
    width: "min(100%, 40rem)",
 succeeded in 53ms:
const categories = [
  {
    title: "Educazione quotidiana",
    description:
      "Percorsi dedicati a cani cuccioli, adolescenti o adulti che hanno bisogno di basi piu chiare nella vita di tutti i giorni.",
    details: [
      "Per chi vuole migliorare comunicazione, gestione in casa e collaborazione nelle routine.",
      "Focus su competenze pratiche come attenzione, calma, lettura del contesto e coerenza nelle richieste.",
    ],
  },
  {
    title: "Passeggiata, richiamo e gestione in esterna",
    description:
      "Un lavoro concreto per rendere le uscite piu serene, leggibili e sostenibili sia per il cane sia per la persona.",
    details: [
      "Indicato quando la passeggiata e fonte di tensione, confusione o fatica costante.",
      "Obiettivi centrati su guinzaglio, richiamo, orientamento e capacita di muoversi meglio nell'ambiente.",
    ],
  },
  {
 succeeded in 51ms:
#root {
  min-height: 100vh;
  width: 100%;
}

header {
  position: sticky;
  top: 0;
  z-index: 40;
  padding: 1rem 1rem 0;
  background: linear-gradient(180deg, rgba(248, 243, 234, 0.95), rgba(248, 243, 234, 0.78) 72%, rgba(248, 243, 234, 0));
  backdrop-filter: blur(12px);
}

nav[aria-label="Main navigation"] {
  width: min(100%, 72rem);
  margin: 0 auto;
  padding: 0.5rem;
  border: 1px solid rgba(47, 49, 45, 0.08);
  border-radius: 999px;
 succeeded in 52ms:
const styles = {
  section: {
    padding: "0 1.5rem 4rem",
    backgroundColor: "#fcf8f1",
    color: "#2f312d",
  },
  container: {
    width: "min(100%, 72rem)",
    margin: "0 auto",
  },
  panel: {
    display: "grid",
    gap: "1rem",
    padding: "1.75rem",
    borderRadius: "1.75rem",
    backgroundColor: "#e8efe2",
    border: "1px solid rgba(47, 49, 45, 0.08)",
    boxShadow: "0 18px 40px rgba(62, 52, 42, 0.08)",
  },
  eyebrow: {
codex
I’m patching the site shell now. The main validation gap is the placeholder header/footer structure, plus a few sections that need explicit labelling for cleaner semantics and safer validation.
exec
/bin/zsh -lc "sed -n '1,220p' agent/AGENT_REPORT.md" in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr succeeded in 53ms:
Total output lines: 220

# AGENT REPORT

Project created.

Prepared TASK page-home-shell (Create home page shell) for execution.

Launching Codex for TASK page-home-shell.

Completed TASK `page-home-shell`.
- Replaced home placeholder content with a semantic homepage shell in `src/pages/Home.jsx`.
- Kept required section ids: `hero`, `signature-preview`, and `brand-story-preview`.
- Added valid homepage CTAs targeting `#/menu`, `#/contatti`, and WhatsApp to match the current spec.

TASK page-home-shell executed by Codex.
Waiting for validation.

TASK page-home-shell completed successfully.
Build passed.
file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/layout/Layout.jsx
@@ -5,20 +5,64 @@
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
apply_patch(auto_approved=true) exited 0 in 47ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/layout/Layout.jsx
file update:
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update:
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/HeroSection.jsx
@@ -99,3 +99,8 @@
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
@@ -107,3 +112,3 @@
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
apply_patch(auto_approved=true) exited 0 in 48ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/HeroSection.jsx
file update:
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update:
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/SignaturePreviewSection.jsx
@@ -112,3 +112,8 @@
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
@@ -116,3 +121,5 @@
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
apply_patch(auto_approved=true) exited 0 in 55ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/SignaturePreviewSection.jsx
file update:
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update:
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/BrandStoryPreviewSection.jsx
@@ -87,3 +87,8 @@
   return (
-    <section id="brand-story-preview" className="content-section" style={styles.section}>
+    <section
+      id="brand-story-preview"
+      className="content-section"
+      aria-labelledby="brand-story-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
@@ -98,3 +103,3 @@
             <p style={styles.eyebrow}>Chi sono</p>
-            <h2 style={styles.title}>
+            <h2 id="brand-story-preview-title" style={styles.title}>
               Un supporto educativo che parte dalla relazione
apply_patch(auto_approved=true) exited 0 in 67ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/BrandStoryPreviewSection.jsx
file update:
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index 799c4f666a3b7eb759ea8ba5d43508c396c6f295..65ccbc98406a2d3dd71a1e798c7b1174a3bca7c9
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -85,7 +85,12 @@
 
 export default function BrandStoryPreviewSection() {
   return (
-    <section id="brand-story-preview" className="content-section" style={styles.section}>
+    <section
+      id="brand-story-preview"
+      className="content-section"
+      aria-labelledby="brand-story-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div
           className="split-layout split-layout--preview"
@@ -96,7 +101,7 @@
         >
           <div style={styles.textColumn}>
             <p style={styles.eyebrow}>Chi sono</p>
-            <h2 style={styles.title}>
+            <h2 id="brand-story-preview-title" style={styles.title}>
               Un supporto educativo che parte dalla relazione
             </h2>
             <p style={styles.description}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update:
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index 799c4f666a3b7eb759ea8ba5d43508c396c6f295..65ccbc98406a2d3dd71a1e798c7b1174a3bca7c9
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -85,7 +85,12 @@
 
 export default function BrandStoryPreviewSection() {
   return (
-    <section id="brand-story-preview" className="content-section" style={styles.section}>
+    <section
+      id="brand-story-preview"
+      className="content-section"
+      aria-labelledby="brand-story-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div
           className="split-layout split-layout--preview"
@@ -96,7 +101,7 @@
         >
           <div style={styles.textColumn}>
             <p style={styles.eyebrow}>Chi sono</p>
-            <h2 style={styles.title}>
+            <h2 id="brand-story-preview-title" style={styles.title}>
               Un supporto educativo che parte dalla relazione
             </h2>
             <p style={styles.description}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/App.css
@@ -5,3 +5,20 @@
 
-header {
+.skip-link {
+  position: absolute;
+  left: 1rem;
+  top: -3rem;
+  z-index: 100;
+  padding: 0.75rem 1rem;
+  border-radius: 999px;
+  background: #23251f;
+  color: #f8f3ea;
+  text-decoration: none;
+  transition: top 160ms ease;
+}
+
+.skip-link:focus {
+  top: 1rem;
+}
+
+.site-header {
   position: sticky;
@@ -14,5 +31,30 @@
 
-nav[aria-label="Main navigation"] {
+.site-header__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 0.75rem;
+}
+
+.site-brand {
+  display: grid;
+  gap: 0.1rem;
+  width: fit-content;
+  text-decoration: none;
+}
+
+.site-brand__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #23251f;
+}
+
+.site-brand__tagline {
+  font-size: 0.92rem;
+  color: #5e635a;
+}
+
+.site-nav {
   padding: 0.5rem;
@@ -29,3 +71,3 @@
 
-nav[aria-label="Main navigation"] a {
+.site-nav a {
   display: inline-flex;
@@ -41,4 +83,4 @@
 
-nav[aria-label="Main navigation"] a:hover,
-nav[aria-label="Main navigation"] a[aria-current="page"] {
+.site-nav a:hover,
+.site-nav a[aria-current="page"] {
   background: #6a7761;
@@ -51,3 +93,3 @@
 
-footer {
+.site-footer {
   padding: 1.75rem 1rem 2.5rem;
@@ -57,6 +99,49 @@
 
-footer p {
+.site-footer__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 1.5rem;
+}
+
+.site-footer__brand,
+.site-footer__contact {
+  display: grid;
+  gap: 0.45rem;
+}
+
+.site-footer__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #f8f3ea;
+}
+
+.site-footer__tagline,
+.site-footer__copyright,
+.site-footer__contact,
+.site-footer__contact a {
   font-size: 0.95rem;
+  line-height: 1.7;
+  color: rgba(248, 243, 234, 0.78);
+}
+
+.site-footer__nav {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.75rem 1rem;
+}
+
+.site-footer__nav a {
+  color: #f8f3ea;
+  text-decoration: none;
+}
+
+.site-footer__nav a[aria-current="page"] {
+  color: #c7d3bb;
+}
+
+.site-footer__contact {
+  font-style: normal;
 }
@@ -125,3 +210,3 @@
 @media (max-width: 767px) {
-  header {
+  .site-header {
     padding: 0.75rem 0.75rem 0;
@@ -129,3 +214,3 @@
 
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     border-radius: 1.4rem;
@@ -134,3 +219,3 @@
 
-  nav[aria-label="Main navigation"] a {
+  .site-nav a {
     flex: 1 1 calc(50% - 0.4rem);
@@ -199,3 +284,7 @@
 @media (min-width: 768px) and (max-width: 1023px) {
-  nav[aria-label="Main navigation"] {
+  .site-header__inner {
+    align-items: center;
+  }
+
+  .site-nav {
     justify-content: center;
@@ -218,3 +307,3 @@
 @media (min-width: 1024px) {
-  header {
+  .site-header {
     padding-top: 1.25rem;
@@ -222,2 +311,16 @@
 
+  .site-header__inner {
+    grid-template-columns: auto minmax(0, 1fr);
+    align-items: center;
+  }
+
+  .site-nav {
+    justify-content: flex-end;
+  }
+
+  .site-footer__inner {
+    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
+    align-items: start;
+  }
+
   .hero-section {
@@ -252,3 +355,3 @@
 @media (min-width: 1440px) {
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     padding: 0.65rem;
apply_patch(auto_approved=true) exited 0 in 72ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/App.css
file update:
diff --git a/src/App.css b/src/App.css
index 5ac1aa92641041100456bcb9e85a126982c7fa6e..a8d02b246b7a76b58b2834b51ad76c5a26e9aab6
--- a/src/App.css
+++ b/src/App.css
@@ -3,7 +3,24 @@
   width: 100%;
 }
 
-header {
+.skip-link {
+  position: absolute;
+  left: 1rem;
+  top: -3rem;
+  z-index: 100;
+  padding: 0.75rem 1rem;
+  border-radius: 999px;
+  background: #23251f;
+  color: #f8f3ea;
+  text-decoration: none;
+  transition: top 160ms ease;
+}
+
+.skip-link:focus {
+  top: 1rem;
+}
+
+.site-header {
   position: sticky;
   top: 0;
   z-index: 40;
@@ -12,9 +29,34 @@
   backdrop-filter: blur(12px);
 }
 
-nav[aria-label="Main navigation"] {
+.site-header__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 0.75rem;
+}
+
+.site-brand {
+  display: grid;
+  gap: 0.1rem;
+  width: fit-content;
+  text-decoration: none;
+}
+
+.site-brand__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #23251f;
+}
+
+.site-brand__tagline {
+  font-size: 0.92rem;
+  color: #5e635a;
+}
+
+.site-nav {
   padding: 0.5rem;
   border: 1px solid rgba(47, 49, 45, 0.08);
   border-radius: 999px;
@@ -27,7 +69,7 @@
   gap: 0.4rem;
 }
 
-nav[aria-label="Main navigation"] a {
+.site-nav a {
   display: inline-flex;
   align-items: center;
   justify-content: center;
@@ -39,8 +81,8 @@
   transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
 }
 
-nav[aria-label="Main navigation"] a:hover,
-nav[aria-label="Main navigation"] a[aria-current="page"] {
+.site-nav a:hover,
+.site-nav a[aria-current="page"] {
   background: #6a7761;
   color: #f8f3ea;
 }
@@ -49,16 +91,59 @@
   width: 100%;
 }
 
-footer {
+.site-footer {
   padding: 1.75rem 1rem 2.5rem;
   background: #23251f;
   color: rgba(248, 243, 234, 0.78);
 }
 
-footer p {
+.site-footer__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 1.5rem;
+}
+
+.site-footer__brand,
+.site-footer__contact {
+  display: grid;
+  gap: 0.45rem;
+}
+
+.site-footer__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #f8f3ea;
+}
+
+.site-footer__tagline,
+.site-footer__copyright,
+.site-footer__contact,
+.site-footer__contact a {
   font-size: 0.95rem;
+  line-height: 1.7;
+  color: rgba(248, 243, 234, 0.78);
+}
+
+.site-footer__nav {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.75rem 1rem;
+}
+
+.site-footer__nav a {
+  color: #f8f3ea;
+  text-decoration: none;
+}
+
+.site-footer__nav a[aria-current="page"] {
+  color: #c7d3bb;
+}
+
+.site-footer__contact {
+  font-style: normal;
 }
 
 .page-shell {
@@ -123,16 +208,16 @@
 }
 
 @media (max-width: 767px) {
-  header {
+  .site-header {
     padding: 0.75rem 0.75rem 0;
   }
 
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     border-radius: 1.4rem;
     justify-content: stretch;
   }
 
-  nav[aria-label="Main navigation"] a {
+  .site-nav a {
     flex: 1 1 calc(50% - 0.4rem);
     min-width: 0;
   }
@@ -197,7 +282,11 @@
 }
 
 @media (min-width: 768px) and (max-width: 1023px) {
-  nav[aria-label="Main navigation"] {
+  .site-header__inner {
+    align-items: center;
+  }
+
+  .site-nav {
     justify-content: center;
   }
 
@@ -216,10 +305,24 @@
 }
 
 @media (min-width: 1024px) {
-  header {
+  .site-header {
     padding-top: 1.25rem;
   }
 
+  .site-header__inner {
+    grid-template-columns: auto minmax(0, 1fr);
+    align-items: center;
+  }
+
+  .site-nav {
+    justify-content: flex-end;
+  }
+
+  .site-footer__inner {
+    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
+    align-items: start;
+  }
+
   .hero-section {
     min-height: min(78vh, 54rem);
     display: grid;
@@ -250,7 +353,7 @@
 }
 
 @media (min-width: 1440px) {
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     padding: 0.65rem;
   }
 
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index 799c4f666a3b7eb759ea8ba5d43508c396c6f295..65ccbc98406a2d3dd71a1e798c7b1174a3bca7c9
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -85,7 +85,12 @@
 
 export default function BrandStoryPreviewSection() {
   return (
-    <section id="brand-story-preview" className="content-section" style={styles.section}>
+    <section
+      id="brand-story-preview"
+      className="content-section"
+      aria-labelledby="brand-story-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div
           className="split-layout split-layout--preview"
@@ -96,7 +101,7 @@
         >
           <div style={styles.textColumn}>
             <p style={styles.eyebrow}>Chi sono</p>
-            <h2 style={styles.title}>
+            <h2 id="brand-story-preview-title" style={styles.title}>
               Un supporto educativo che parte dalla relazione
             </h2>
             <p style={styles.description}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update:
diff --git a/src/App.css b/src/App.css
index 5ac1aa92641041100456bcb9e85a126982c7fa6e..a8d02b246b7a76b58b2834b51ad76c5a26e9aab6
--- a/src/App.css
+++ b/src/App.css
@@ -3,7 +3,24 @@
   width: 100%;
 }
 
-header {
+.skip-link {
+  position: absolute;
+  left: 1rem;
+  top: -3rem;
+  z-index: 100;
+  padding: 0.75rem 1rem;
+  border-radius: 999px;
+  background: #23251f;
+  color: #f8f3ea;
+  text-decoration: none;
+  transition: top 160ms ease;
+}
+
+.skip-link:focus {
+  top: 1rem;
+}
+
+.site-header {
   position: sticky;
   top: 0;
   z-index: 40;
@@ -12,9 +29,34 @@
   backdrop-filter: blur(12px);
 }
 
-nav[aria-label="Main navigation"] {
+.site-header__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 0.75rem;
+}
+
+.site-brand {
+  display: grid;
+  gap: 0.1rem;
+  width: fit-content;
+  text-decoration: none;
+}
+
+.site-brand__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #23251f;
+}
+
+.site-brand__tagline {
+  font-size: 0.92rem;
+  color: #5e635a;
+}
+
+.site-nav {
   padding: 0.5rem;
   border: 1px solid rgba(47, 49, 45, 0.08);
   border-radius: 999px;
@@ -27,7 +69,7 @@
   gap: 0.4rem;
 }
 
-nav[aria-label="Main navigation"] a {
+.site-nav a {
   display: inline-flex;
   align-items: center;
   justify-content: center;
@@ -39,8 +81,8 @@
   transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
 }
 
-nav[aria-label="Main navigation"] a:hover,
-nav[aria-label="Main navigation"] a[aria-current="page"] {
+.site-nav a:hover,
+.site-nav a[aria-current="page"] {
   background: #6a7761;
   color: #f8f3ea;
 }
@@ -49,16 +91,59 @@
   width: 100%;
 }
 
-footer {
+.site-footer {
   padding: 1.75rem 1rem 2.5rem;
   background: #23251f;
   color: rgba(248, 243, 234, 0.78);
 }
 
-footer p {
+.site-footer__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 1.5rem;
+}
+
+.site-footer__brand,
+.site-footer__contact {
+  display: grid;
+  gap: 0.45rem;
+}
+
+.site-footer__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #f8f3ea;
+}
+
+.site-footer__tagline,
+.site-footer__copyright,
+.site-footer__contact,
+.site-footer__contact a {
   font-size: 0.95rem;
+  line-height: 1.7;
+  color: rgba(248, 243, 234, 0.78);
+}
+
+.site-footer__nav {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.75rem 1rem;
+}
+
+.site-footer__nav a {
+  color: #f8f3ea;
+  text-decoration: none;
+}
+
+.site-footer__nav a[aria-current="page"] {
+  color: #c7d3bb;
+}
+
+.site-footer__contact {
+  font-style: normal;
 }
 
 .page-shell {
@@ -123,16 +208,16 @@
 }
 
 @media (max-width: 767px) {
-  header {
+  .site-header {
     padding: 0.75rem 0.75rem 0;
   }
 
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     border-radius: 1.4rem;
     justify-content: stretch;
   }
 
-  nav[aria-label="Main navigation"] a {
+  .site-nav a {
     flex: 1 1 calc(50% - 0.4rem);
     min-width: 0;
   }
@@ -197,7 +282,11 @@
 }
 
 @media (min-width: 768px) and (max-width: 1023px) {
-  nav[aria-label="Main navigation"] {
+  .site-header__inner {
+    align-items: center;
+  }
+
+  .site-nav {
     justify-content: center;
   }
 
@@ -216,10 +305,24 @@
 }
 
 @media (min-width: 1024px) {
-  header {
+  .site-header {
     padding-top: 1.25rem;
   }
 
+  .site-header__inner {
+    grid-template-columns: auto minmax(0, 1fr);
+    align-items: center;
+  }
+
+  .site-nav {
+    justify-content: flex-end;
+  }
+
+  .site-footer__inner {
+    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
+    align-items: start;
+  }
+
   .hero-section {
     min-height: min(78vh, 54rem);
     display: grid;
@@ -250,7 +353,7 @@
 }
 
 @media (min-width: 1440px) {
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     padding: 0.65rem;
   }
 
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index 799c4f666a3b7eb759ea8ba5d43508c396c6f295..65ccbc98406a2d3dd71a1e798c7b1174a3bca7c9
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -85,7 +85,12 @@
 
 export default function BrandStoryPreviewSection() {
   return (
-    <section id="brand-story-preview" className="content-section" style={styles.section}>
+    <section
+      id="brand-story-preview"
+      className="content-section"
+      aria-labelledby="brand-story-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div
           className="split-layout split-layout--preview"
@@ -96,7 +101,7 @@
         >
           <div style={styles.textColumn}>
             <p style={styles.eyebrow}>Chi sono</p>
-            <h2 style={styles.title}>
+            <h2 id="brand-story-preview-title" style={styles.title}>
               Un supporto educativo che parte dalla relazione
             </h2>
             <p style={styles.description}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/index.html
@@ -4,3 +4,2 @@
     <meta charset="UTF-8" />
-    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
apply_patch(auto_approved=true) exited 0 in 83ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/index.html
file update:
diff --git a/index.html b/index.html
index 229ea1aa36ec7dca723ba6fbcc71bc8f41dfec31..7e971742816fbf0c083399a66a58e1a8a7609519
--- a/index.html
+++ b/index.html
@@ -2,7 +2,6 @@
 <html lang="it">
   <head>
     <meta charset="UTF-8" />
-    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta
       name="description"
diff --git a/src/App.css b/src/App.css
index 5ac1aa92641041100456bcb9e85a126982c7fa6e..a8d02b246b7a76b58b2834b51ad76c5a26e9aab6
--- a/src/App.css
+++ b/src/App.css
@@ -3,7 +3,24 @@
   width: 100%;
 }
 
-header {
+.skip-link {
+  position: absolute;
+  left: 1rem;
+  top: -3rem;
+  z-index: 100;
+  padding: 0.75rem 1rem;
+  border-radius: 999px;
+  background: #23251f;
+  color: #f8f3ea;
+  text-decoration: none;
+  transition: top 160ms ease;
+}
+
+.skip-link:focus {
+  top: 1rem;
+}
+
+.site-header {
   position: sticky;
   top: 0;
   z-index: 40;
@@ -12,9 +29,34 @@
   backdrop-filter: blur(12px);
 }
 
-nav[aria-label="Main navigation"] {
+.site-header__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 0.75rem;
+}
+
+.site-brand {
+  display: grid;
+  gap: 0.1rem;
+  width: fit-content;
+  text-decoration: none;
+}
+
+.site-brand__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #23251f;
+}
+
+.site-brand__tagline {
+  font-size: 0.92rem;
+  color: #5e635a;
+}
+
+.site-nav {
   padding: 0.5rem;
   border: 1px solid rgba(47, 49, 45, 0.08);
   border-radius: 999px;
@@ -27,7 +69,7 @@
   gap: 0.4rem;
 }
 
-nav[aria-label="Main navigation"] a {
+.site-nav a {
   display: inline-flex;
   align-items: center;
   justify-content: center;
@@ -39,8 +81,8 @@
   transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
 }
 
-nav[aria-label="Main navigation"] a:hover,
-nav[aria-label="Main navigation"] a[aria-current="page"] {
+.site-nav a:hover,
+.site-nav a[aria-current="page"] {
   background: #6a7761;
   color: #f8f3ea;
 }
@@ -49,16 +91,59 @@
   width: 100%;
 }
 
-footer {
+.site-footer {
   padding: 1.75rem 1rem 2.5rem;
   background: #23251f;
   color: rgba(248, 243, 234, 0.78);
 }
 
-footer p {
+.site-footer__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 1.5rem;
+}
+
+.site-footer__brand,
+.site-footer__contact {
+  display: grid;
+  gap: 0.45rem;
+}
+
+.site-footer__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #f8f3ea;
+}
+
+.site-footer__tagline,
+.site-footer__copyright,
+.site-footer__contact,
+.site-footer__contact a {
   font-size: 0.95rem;
+  line-height: 1.7;
+  color: rgba(248, 243, 234, 0.78);
+}
+
+.site-footer__nav {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.75rem 1rem;
+}
+
+.site-footer__nav a {
+  color: #f8f3ea;
+  text-decoration: none;
+}
+
+.site-footer__nav a[aria-current="page"] {
+  color: #c7d3bb;
+}
+
+.site-footer__contact {
+  font-style: normal;
 }
 
 .page-shell {
@@ -123,16 +208,16 @@
 }
 
 @media (max-width: 767px) {
-  header {
+  .site-header {
     padding: 0.75rem 0.75rem 0;
   }
 
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     border-radius: 1.4rem;
     justify-content: stretch;
   }
 
-  nav[aria-label="Main navigation"] a {
+  .site-nav a {
     flex: 1 1 calc(50% - 0.4rem);
     min-width: 0;
   }
@@ -197,7 +282,11 @@
 }
 
 @media (min-width: 768px) and (max-width: 1023px) {
-  nav[aria-label="Main navigation"] {
+  .site-header__inner {
+    align-items: center;
+  }
+
+  .site-nav {
     justify-content: center;
   }
 
@@ -216,10 +305,24 @@
 }
 
 @media (min-width: 1024px) {
-  header {
+  .site-header {
     padding-top: 1.25rem;
   }
 
+  .site-header__inner {
+    grid-template-columns: auto minmax(0, 1fr);
+    align-items: center;
+  }
+
+  .site-nav {
+    justify-content: flex-end;
+  }
+
+  .site-footer__inner {
+    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
+    align-items: start;
+  }
+
   .hero-section {
     min-height: min(78vh, 54rem);
     display: grid;
@@ -250,7 +353,7 @@
 }
 
 @media (min-width: 1440px) {
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     padding: 0.65rem;
   }
 
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index 799c4f666a3b7eb759ea8ba5d43508c396c6f295..65ccbc98406a2d3dd71a1e798c7b1174a3bca7c9
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -85,7 +85,12 @@
 
 export default function BrandStoryPreviewSection() {
   return (
-    <section id="brand-story-preview" className="content-section" style={styles.section}>
+    <section
+      id="brand-story-preview"
+      className="content-section"
+      aria-labelledby="brand-story-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div
           className="split-layout split-layout--preview"
@@ -96,7 +101,7 @@
         >
           <div style={styles.textColumn}>
             <p style={styles.eyebrow}>Chi sono</p>
-            <h2 style={styles.title}>
+            <h2 id="brand-story-preview-title" style={styles.title}>
               Un supporto educativo che parte dalla relazione
             </h2>
             <p style={styles.description}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update:
diff --git a/index.html b/index.html
index 229ea1aa36ec7dca723ba6fbcc71bc8f41dfec31..7e971742816fbf0c083399a66a58e1a8a7609519
--- a/index.html
+++ b/index.html
@@ -2,7 +2,6 @@
 <html lang="it">
   <head>
     <meta charset="UTF-8" />
-    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta
       name="description"
diff --git a/src/App.css b/src/App.css
index 5ac1aa92641041100456bcb9e85a126982c7fa6e..a8d02b246b7a76b58b2834b51ad76c5a26e9aab6
--- a/src/App.css
+++ b/src/App.css
@@ -3,7 +3,24 @@
   width: 100%;
 }
 
-header {
+.skip-link {
+  position: absolute;
+  left: 1rem;
+  top: -3rem;
+  z-index: 100;
+  padding: 0.75rem 1rem;
+  border-radius: 999px;
+  background: #23251f;
+  color: #f8f3ea;
+  text-decoration: none;
+  transition: top 160ms ease;
+}
+
+.skip-link:focus {
+  top: 1rem;
+}
+
+.site-header {
   position: sticky;
   top: 0;
   z-index: 40;
@@ -12,9 +29,34 @@
   backdrop-filter: blur(12px);
 }
 
-nav[aria-label="Main navigation"] {
+.site-header__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 0.75rem;
+}
+
+.site-brand {
+  display: grid;
+  gap: 0.1rem;
+  width: fit-content;
+  text-decoration: none;
+}
+
+.site-brand__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #23251f;
+}
+
+.site-brand__tagline {
+  font-size: 0.92rem;
+  color: #5e635a;
+}
+
+.site-nav {
   padding: 0.5rem;
   border: 1px solid rgba(47, 49, 45, 0.08);
   border-radius: 999px;
@@ -27,7 +69,7 @@
   gap: 0.4rem;
 }
 
-nav[aria-label="Main navigation"] a {
+.site-nav a {
   display: inline-flex;
   align-items: center;
   justify-content: center;
@@ -39,8 +81,8 @@
   transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
 }
 
-nav[aria-label="Main navigation"] a:hover,
-nav[aria-label="Main navigation"] a[aria-current="page"] {
+.site-nav a:hover,
+.site-nav a[aria-current="page"] {
   background: #6a7761;
   color: #f8f3ea;
 }
@@ -49,16 +91,59 @@
   width: 100%;
 }
 
-footer {
+.site-footer {
   padding: 1.75rem 1rem 2.5rem;
   background: #23251f;
   color: rgba(248, 243, 234, 0.78);
 }
 
-footer p {
+.site-footer__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 1.5rem;
+}
+
+.site-footer__brand,
+.site-footer__contact {
+  display: grid;
+  gap: 0.45rem;
+}
+
+.site-footer__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #f8f3ea;
+}
+
+.site-footer__tagline,
+.site-footer__copyright,
+.site-footer__contact,
+.site-footer__contact a {
   font-size: 0.95rem;
+  line-height: 1.7;
+  color: rgba(248, 243, 234, 0.78);
+}
+
+.site-footer__nav {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.75rem 1rem;
+}
+
+.site-footer__nav a {
+  color: #f8f3ea;
+  text-decoration: none;
+}
+
+.site-footer__nav a[aria-current="page"] {
+  color: #c7d3bb;
+}
+
+.site-footer__contact {
+  font-style: normal;
 }
 
 .page-shell {
@@ -123,16 +208,16 @@
 }
 
 @media (max-width: 767px) {
-  header {
+  .site-header {
     padding: 0.75rem 0.75rem 0;
   }
 
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     border-radius: 1.4rem;
     justify-content: stretch;
   }
 
-  nav[aria-label="Main navigation"] a {
+  .site-nav a {
     flex: 1 1 calc(50% - 0.4rem);
     min-width: 0;
   }
@@ -197,7 +282,11 @@
 }
 
 @media (min-width: 768px) and (max-width: 1023px) {
-  nav[aria-label="Main navigation"] {
+  .site-header__inner {
+    align-items: center;
+  }
+
+  .site-nav {
     justify-content: center;
   }
 
@@ -216,10 +305,24 @@
 }
 
 @media (min-width: 1024px) {
-  header {
+  .site-header {
     padding-top: 1.25rem;
   }
 
+  .site-header__inner {
+    grid-template-columns: auto minmax(0, 1fr);
+    align-items: center;
+  }
+
+  .site-nav {
+    justify-content: flex-end;
+  }
+
+  .site-footer__inner {
+    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
+    align-items: start;
+  }
+
   .hero-section {
     min-height: min(78vh, 54rem);
     display: grid;
@@ -250,7 +353,7 @@
 }
 
 @media (min-width: 1440px) {
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     padding: 0.65rem;
   }
 
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index 799c4f666a3b7eb759ea8ba5d43508c396c6f295..65ccbc98406a2d3dd71a1e798c7b1174a3bca7c9
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -85,7 +85,12 @@
 
 export default function BrandStoryPreviewSection() {
   return (
-    <section id="brand-story-preview" className="content-section" style={styles.section}>
+    <section
+      id="brand-story-preview"
+      className="content-section"
+      aria-labelledby="brand-story-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div
           className="split-layout split-layout--preview"
@@ -96,7 +101,7 @@
         >
           <div style={styles.textColumn}>
             <p style={styles.eyebrow}>Chi sono</p>
-            <h2 style={styles.title}>
+            <h2 id="brand-story-preview-title" style={styles.title}>
               Un supporto educativo che parte dalla relazione
             </h2>
             <p style={styles.description}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

codex
The structural edits are in place. I’m running a build now to catch any regressions before I update the task report.
exec
/bin/zsh -lc 'npm run build' in /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr succeeded in 963ms:

> site-create-a-premium-modern-website-for-a-pr@0.0.0 build
> vite build

vite v7.3.1 building client environment for production...
transforming...
✓ 60 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.65 kB │ gzip:  0.38 kB
dist/assets/index-DW47WRcW.css    5.87 kB │ gzip:  1.83 kB
dist/assets/index-CckmcOtr.js   277.56 kB │ gzip: 83.15 kB
✓ built in 694ms
file update:
diff --git a/index.html b/index.html
index 229ea1aa36ec7dca723ba6fbcc71bc8f41dfec31..7e971742816fbf0c083399a66a58e1a8a7609519
--- a/index.html
+++ b/index.html
@@ -2,7 +2,6 @@
 <html lang="it">
   <head>
     <meta charset="UTF-8" />
-    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta
       name="description"
diff --git a/src/App.css b/src/App.css
index 5ac1aa92641041100456bcb9e85a126982c7fa6e..a8d02b246b7a76b58b2834b51ad76c5a26e9aab6
--- a/src/App.css
+++ b/src/App.css
@@ -3,7 +3,24 @@
   width: 100%;
 }
 
-header {
+.skip-link {
+  position: absolute;
+  left: 1rem;
+  top: -3rem;
+  z-index: 100;
+  padding: 0.75rem 1rem;
+  border-radius: 999px;
+  background: #23251f;
+  color: #f8f3ea;
+  text-decoration: none;
+  transition: top 160ms ease;
+}
+
+.skip-link:focus {
+  top: 1rem;
+}
+
+.site-header {
   position: sticky;
   top: 0;
   z-index: 40;
@@ -12,9 +29,34 @@
   backdrop-filter: blur(12px);
 }
 
-nav[aria-label="Main navigation"] {
+.site-header__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 0.75rem;
+}
+
+.site-brand {
+  display: grid;
+  gap: 0.1rem;
+  width: fit-content;
+  text-decoration: none;
+}
+
+.site-brand__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #23251f;
+}
+
+.site-brand__tagline {
+  font-size: 0.92rem;
+  color: #5e635a;
+}
+
+.site-nav {
   padding: 0.5rem;
   border: 1px solid rgba(47, 49, 45, 0.08);
   border-radius: 999px;
@@ -27,7 +69,7 @@
   gap: 0.4rem;
 }
 
-nav[aria-label="Main navigation"] a {
+.site-nav a {
   display: inline-flex;
   align-items: center;
   justify-content: center;
@@ -39,8 +81,8 @@
   transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
 }
 
-nav[aria-label="Main navigation"] a:hover,
-nav[aria-label="Main navigation"] a[aria-current="page"] {
+.site-nav a:hover,
+.site-nav a[aria-current="page"] {
   background: #6a7761;
   color: #f8f3ea;
 }
@@ -49,16 +91,59 @@
   width: 100%;
 }
 
-footer {
+.site-footer {
   padding: 1.75rem 1rem 2.5rem;
   background: #23251f;
   color: rgba(248, 243, 234, 0.78);
 }
 
-footer p {
+.site-footer__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 1.5rem;
+}
+
+.site-footer__brand,
+.site-footer__contact {
+  display: grid;
+  gap: 0.45rem;
+}
+
+.site-footer__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #f8f3ea;
+}
+
+.site-footer__tagline,
+.site-footer__copyright,
+.site-footer__contact,
+.site-footer__contact a {
   font-size: 0.95rem;
+  line-height: 1.7;
+  color: rgba(248, 243, 234, 0.78);
+}
+
+.site-footer__nav {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.75rem 1rem;
+}
+
+.site-footer__nav a {
+  color: #f8f3ea;
+  text-decoration: none;
+}
+
+.site-footer__nav a[aria-current="page"] {
+  color: #c7d3bb;
+}
+
+.site-footer__contact {
+  font-style: normal;
 }
 
 .page-shell {
@@ -123,16 +208,16 @@
 }
 
 @media (max-width: 767px) {
-  header {
+  .site-header {
     padding: 0.75rem 0.75rem 0;
   }
 
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     border-radius: 1.4rem;
     justify-content: stretch;
   }
 
-  nav[aria-label="Main navigation"] a {
+  .site-nav a {
     flex: 1 1 calc(50% - 0.4rem);
     min-width: 0;
   }
@@ -197,7 +282,11 @@
 }
 
 @media (min-width: 768px) and (max-width: 1023px) {
-  nav[aria-label="Main navigation"] {
+  .site-header__inner {
+    align-items: center;
+  }
+
+  .site-nav {
     justify-content: center;
   }
 
@@ -216,10 +305,24 @@
 }
 
 @media (min-width: 1024px) {
-  header {
+  .site-header {
     padding-top: 1.25rem;
   }
 
+  .site-header__inner {
+    grid-template-columns: auto minmax(0, 1fr);
+    align-items: center;
+  }
+
+  .site-nav {
+    justify-content: flex-end;
+  }
+
+  .site-footer__inner {
+    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
+    align-items: start;
+  }
+
   .hero-section {
     min-height: min(78vh, 54rem);
     display: grid;
@@ -250,7 +353,7 @@
 }
 
 @media (min-width: 1440px) {
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     padding: 0.65rem;
   }
 
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index 799c4f666a3b7eb759ea8ba5d43508c396c6f295..65ccbc98406a2d3dd71a1e798c7b1174a3bca7c9
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -85,7 +85,12 @@
 
 export default function BrandStoryPreviewSection() {
   return (
-    <section id="brand-story-preview" className="content-section" style={styles.section}>
+    <section
+      id="brand-story-preview"
+      className="content-section"
+      aria-labelledby="brand-story-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div
           className="split-layout split-layout--preview"
@@ -96,7 +101,7 @@
         >
           <div style={styles.textColumn}>
             <p style={styles.eyebrow}>Chi sono</p>
-            <h2 style={styles.title}>
+            <h2 id="brand-story-preview-title" style={styles.title}>
               Un supporto educativo che parte dalla relazione
             </h2>
             <p style={styles.description}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

codex
The build passed. I’m adding the required task note to `agent/AGENT_REPORT.md`, keeping it limited to this validation-prep work.
file update
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/agent/AGENT_REPORT.md
@@ -220,2 +220,12 @@
 
+Completed TASK `validation-prep`.
+- Strengthened the shared shell in `src/layout/Layout.jsx` with a semantic header, skip link, brand block, footer navigation, and real contact details so validation can verify structure and destination integrity.
+- Added missing section labelling in `src/components/HeroSection.jsx`, `src/components/SignaturePreviewSection.jsx`, and `src/components/BrandStoryPreviewSection.jsx` to make the required sections easier to validate semantically.
+- Removed the broken default favicon reference from `index.html` and updated `src/App.css` so the header, footer, navigation, CTAs, and fixed WhatsApp button remain stable across the required responsive breakpoints.
+
+TASK validation-prep executed by Codex.
+Waiting for validation.
+
+TASK validation-prep completed successfully.
+Build passed.
 Completed TASK `responsive-polish`.
apply_patch(auto_approved=true) exited 0 in 102ms:
Success. Updated the following files:
M /Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/agent/AGENT_REPORT.md
file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index 9601e7fa192d1830ba147f8db2d34682f6cb3db6..90aea4727f487fbee35b710e30b113f686ed271d
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -218,6 +218,16 @@
 TASK section-chi-siamo-about-hero completed successfully.
 Build passed.
 
+Completed TASK `validation-prep`.
+- Strengthened the shared shell in `src/layout/Layout.jsx` with a semantic header, skip link, brand block, footer navigation, and real contact details so validation can verify structure and destination integrity.
+- Added missing section labelling in `src/components/HeroSection.jsx`, `src/components/SignaturePreviewSection.jsx`, and `src/components/BrandStoryPreviewSection.jsx` to make the required sections easier to validate semantically.
+- Removed the broken default favicon reference from `index.html` and updated `src/App.css` so the header, footer, navigation, CTAs, and fixed WhatsApp button remain stable across the required responsive breakpoints.
+
+TASK validation-prep executed by Codex.
+Waiting for validation.
+
+TASK validation-prep completed successfully.
+Build passed.
 Completed TASK `responsive-polish`.
 - Replaced the Vite starter global CSS with site-wide layout, reset, navigation, footer, and breakpoint rules in `src/index.css` and `src/App.css`.
 - Added targeted responsive hooks to the allowed section components so hero actions, split layouts, card grids, and floating WhatsApp CTA behave cleanly across `360px`, `768px`, `1024px`, and `1440px`.
diff --git a/index.html b/index.html
index 229ea1aa36ec7dca723ba6fbcc71bc8f41dfec31..7e971742816fbf0c083399a66a58e1a8a7609519
--- a/index.html
+++ b/index.html
@@ -2,7 +2,6 @@
 <html lang="it">
   <head>
     <meta charset="UTF-8" />
-    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta
       name="description"
diff --git a/src/App.css b/src/App.css
index 5ac1aa92641041100456bcb9e85a126982c7fa6e..a8d02b246b7a76b58b2834b51ad76c5a26e9aab6
--- a/src/App.css
+++ b/src/App.css
@@ -3,7 +3,24 @@
   width: 100%;
 }
 
-header {
+.skip-link {
+  position: absolute;
+  left: 1rem;
+  top: -3rem;
+  z-index: 100;
+  padding: 0.75rem 1rem;
+  border-radius: 999px;
+  background: #23251f;
+  color: #f8f3ea;
+  text-decoration: none;
+  transition: top 160ms ease;
+}
+
+.skip-link:focus {
+  top: 1rem;
+}
+
+.site-header {
   position: sticky;
   top: 0;
   z-index: 40;
@@ -12,9 +29,34 @@
   backdrop-filter: blur(12px);
 }
 
-nav[aria-label="Main navigation"] {
+.site-header__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 0.75rem;
+}
+
+.site-brand {
+  display: grid;
+  gap: 0.1rem;
+  width: fit-content;
+  text-decoration: none;
+}
+
+.site-brand__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #23251f;
+}
+
+.site-brand__tagline {
+  font-size: 0.92rem;
+  color: #5e635a;
+}
+
+.site-nav {
   padding: 0.5rem;
   border: 1px solid rgba(47, 49, 45, 0.08);
   border-radius: 999px;
@@ -27,7 +69,7 @@
   gap: 0.4rem;
 }
 
-nav[aria-label="Main navigation"] a {
+.site-nav a {
   display: inline-flex;
   align-items: center;
   justify-content: center;
@@ -39,8 +81,8 @@
   transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
 }
 
-nav[aria-label="Main navigation"] a:hover,
-nav[aria-label="Main navigation"] a[aria-current="page"] {
+.site-nav a:hover,
+.site-nav a[aria-current="page"] {
   background: #6a7761;
   color: #f8f3ea;
 }
@@ -49,16 +91,59 @@
   width: 100%;
 }
 
-footer {
+.site-footer {
   padding: 1.75rem 1rem 2.5rem;
   background: #23251f;
   color: rgba(248, 243, 234, 0.78);
 }
 
-footer p {
+.site-footer__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 1.5rem;
+}
+
+.site-footer__brand,
+.site-footer__contact {
+  display: grid;
+  gap: 0.45rem;
+}
+
+.site-footer__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #f8f3ea;
+}
+
+.site-footer__tagline,
+.site-footer__copyright,
+.site-footer__contact,
+.site-footer__contact a {
   font-size: 0.95rem;
+  line-height: 1.7;
+  color: rgba(248, 243, 234, 0.78);
+}
+
+.site-footer__nav {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.75rem 1rem;
+}
+
+.site-footer__nav a {
+  color: #f8f3ea;
+  text-decoration: none;
+}
+
+.site-footer__nav a[aria-current="page"] {
+  color: #c7d3bb;
+}
+
+.site-footer__contact {
+  font-style: normal;
 }
 
 .page-shell {
@@ -123,16 +208,16 @@
 }
 
 @media (max-width: 767px) {
-  header {
+  .site-header {
     padding: 0.75rem 0.75rem 0;
   }
 
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     border-radius: 1.4rem;
     justify-content: stretch;
   }
 
-  nav[aria-label="Main navigation"] a {
+  .site-nav a {
     flex: 1 1 calc(50% - 0.4rem);
     min-width: 0;
   }
@@ -197,7 +282,11 @@
 }
 
 @media (min-width: 768px) and (max-width: 1023px) {
-  nav[aria-label="Main navigation"] {
+  .site-header__inner {
+    align-items: center;
+  }
+
+  .site-nav {
     justify-content: center;
   }
 
@@ -216,10 +305,24 @@
 }
 
 @media (min-width: 1024px) {
-  header {
+  .site-header {
     padding-top: 1.25rem;
   }
 
+  .site-header__inner {
+    grid-template-columns: auto minmax(0, 1fr);
+    align-items: center;
+  }
+
+  .site-nav {
+    justify-content: flex-end;
+  }
+
+  .site-footer__inner {
+    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
+    align-items: start;
+  }
+
   .hero-section {
     min-height: min(78vh, 54rem);
     display: grid;
@@ -250,7 +353,7 @@
 }
 
 @media (min-width: 1440px) {
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     padding: 0.65rem;
   }
 
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index 799c4f666a3b7eb759ea8ba5d43508c396c6f295..65ccbc98406a2d3dd71a1e798c7b1174a3bca7c9
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -85,7 +85,12 @@
 
 export default function BrandStoryPreviewSection() {
   return (
-    <section id="brand-story-preview" className="content-section" style={styles.section}>
+    <section
+      id="brand-story-preview"
+      className="content-section"
+      aria-labelledby="brand-story-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div
           className="split-layout split-layout--preview"
@@ -96,7 +101,7 @@
         >
           <div style={styles.textColumn}>
             <p style={styles.eyebrow}>Chi sono</p>
-            <h2 style={styles.title}>
+            <h2 id="brand-story-preview-title" style={styles.title}>
               Un supporto educativo che parte dalla relazione
             </h2>
             <p style={styles.description}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index 9601e7fa192d1830ba147f8db2d34682f6cb3db6..90aea4727f487fbee35b710e30b113f686ed271d
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -218,6 +218,16 @@
 TASK section-chi-siamo-about-hero completed successfully.
 Build passed.
 
+Completed TASK `validation-prep`.
+- Strengthened the shared shell in `src/layout/Layout.jsx` with a semantic header, skip link, brand block, footer navigation, and real contact details so validation can verify structure and destination integrity.
+- Added missing section labelling in `src/components/HeroSection.jsx`, `src/components/SignaturePreviewSection.jsx`, and `src/components/BrandStoryPreviewSection.jsx` to make the required sections easier to validate semantically.
+- Removed the broken default favicon reference from `index.html` and updated `src/App.css` so the header, footer, navigation, CTAs, and fixed WhatsApp button remain stable across the required responsive breakpoints.
+
+TASK validation-prep executed by Codex.
+Waiting for validation.
+
+TASK validation-prep completed successfully.
+Build passed.
 Completed TASK `responsive-polish`.
 - Replaced the Vite starter global CSS with site-wide layout, reset, navigation, footer, and breakpoint rules in `src/index.css` and `src/App.css`.
 - Added targeted responsive hooks to the allowed section components so hero actions, split layouts, card grids, and floating WhatsApp CTA behave cleanly across `360px`, `768px`, `1024px`, and `1440px`.
diff --git a/index.html b/index.html
index 229ea1aa36ec7dca723ba6fbcc71bc8f41dfec31..7e971742816fbf0c083399a66a58e1a8a7609519
--- a/index.html
+++ b/index.html
@@ -2,7 +2,6 @@
 <html lang="it">
   <head>
     <meta charset="UTF-8" />
-    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta
       name="description"
diff --git a/src/App.css b/src/App.css
index 5ac1aa92641041100456bcb9e85a126982c7fa6e..a8d02b246b7a76b58b2834b51ad76c5a26e9aab6
--- a/src/App.css
+++ b/src/App.css
@@ -3,7 +3,24 @@
   width: 100%;
 }
 
-header {
+.skip-link {
+  position: absolute;
+  left: 1rem;
+  top: -3rem;
+  z-index: 100;
+  padding: 0.75rem 1rem;
+  border-radius: 999px;
+  background: #23251f;
+  color: #f8f3ea;
+  text-decoration: none;
+  transition: top 160ms ease;
+}
+
+.skip-link:focus {
+  top: 1rem;
+}
+
+.site-header {
   position: sticky;
   top: 0;
   z-index: 40;
@@ -12,9 +29,34 @@
   backdrop-filter: blur(12px);
 }
 
-nav[aria-label="Main navigation"] {
+.site-header__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 0.75rem;
+}
+
+.site-brand {
+  display: grid;
+  gap: 0.1rem;
+  width: fit-content;
+  text-decoration: none;
+}
+
+.site-brand__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #23251f;
+}
+
+.site-brand__tagline {
+  font-size: 0.92rem;
+  color: #5e635a;
+}
+
+.site-nav {
   padding: 0.5rem;
   border: 1px solid rgba(47, 49, 45, 0.08);
   border-radius: 999px;
@@ -27,7 +69,7 @@
   gap: 0.4rem;
 }
 
-nav[aria-label="Main navigation"] a {
+.site-nav a {
   display: inline-flex;
   align-items: center;
   justify-content: center;
@@ -39,8 +81,8 @@
   transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
 }
 
-nav[aria-label="Main navigation"] a:hover,
-nav[aria-label="Main navigation"] a[aria-current="page"] {
+.site-nav a:hover,
+.site-nav a[aria-current="page"] {
   background: #6a7761;
   color: #f8f3ea;
 }
@@ -49,16 +91,59 @@
   width: 100%;
 }
 
-footer {
+.site-footer {
   padding: 1.75rem 1rem 2.5rem;
   background: #23251f;
   color: rgba(248, 243, 234, 0.78);
 }
 
-footer p {
+.site-footer__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 1.5rem;
+}
+
+.site-footer__brand,
+.site-footer__contact {
+  display: grid;
+  gap: 0.45rem;
+}
+
+.site-footer__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #f8f3ea;
+}
+
+.site-footer__tagline,
+.site-footer__copyright,
+.site-footer__contact,
+.site-footer__contact a {
   font-size: 0.95rem;
+  line-height: 1.7;
+  color: rgba(248, 243, 234, 0.78);
+}
+
+.site-footer__nav {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.75rem 1rem;
+}
+
+.site-footer__nav a {
+  color: #f8f3ea;
+  text-decoration: none;
+}
+
+.site-footer__nav a[aria-current="page"] {
+  color: #c7d3bb;
+}
+
+.site-footer__contact {
+  font-style: normal;
 }
 
 .page-shell {
@@ -123,16 +208,16 @@
 }
 
 @media (max-width: 767px) {
-  header {
+  .site-header {
     padding: 0.75rem 0.75rem 0;
   }
 
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     border-radius: 1.4rem;
     justify-content: stretch;
   }
 
-  nav[aria-label="Main navigation"] a {
+  .site-nav a {
     flex: 1 1 calc(50% - 0.4rem);
     min-width: 0;
   }
@@ -197,7 +282,11 @@
 }
 
 @media (min-width: 768px) and (max-width: 1023px) {
-  nav[aria-label="Main navigation"] {
+  .site-header__inner {
+    align-items: center;
+  }
+
+  .site-nav {
     justify-content: center;
   }
 
@@ -216,10 +305,24 @@
 }
 
 @media (min-width: 1024px) {
-  header {
+  .site-header {
     padding-top: 1.25rem;
   }
 
+  .site-header__inner {
+    grid-template-columns: auto minmax(0, 1fr);
+    align-items: center;
+  }
+
+  .site-nav {
+    justify-content: flex-end;
+  }
+
+  .site-footer__inner {
+    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
+    align-items: start;
+  }
+
   .hero-section {
     min-height: min(78vh, 54rem);
     display: grid;
@@ -250,7 +353,7 @@
 }
 
 @media (min-width: 1440px) {
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     padding: 0.65rem;
   }
 
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index 799c4f666a3b7eb759ea8ba5d43508c396c6f295..65ccbc98406a2d3dd71a1e798c7b1174a3bca7c9
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -85,7 +85,12 @@
 
 export default function BrandStoryPreviewSection() {
   return (
-    <section id="brand-story-preview" className="content-section" style={styles.section}>
+    <section
+      id="brand-story-preview"
+      className="content-section"
+      aria-labelledby="brand-story-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div
           className="split-layout split-layout--preview"
@@ -96,7 +101,7 @@
         >
           <div style={styles.textColumn}>
             <p style={styles.eyebrow}>Chi sono</p>
-            <h2 style={styles.title}>
+            <h2 id="brand-story-preview-title" style={styles.title}>
               Un supporto educativo che parte dalla relazione
             </h2>
             <p style={styles.description}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

codex
Modified files: [src/layout/Layout.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/layout/Layout.jsx), [src/components/HeroSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/HeroSection.jsx), [src/components/SignaturePreviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/SignaturePreviewSection.jsx), [src/components/BrandStoryPreviewSection.jsx](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/components/BrandStoryPreviewSection.jsx), [src/App.css](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/src/App.css), [index.html](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/index.html), [agent/AGENT_REPORT.md](/Users/armandocosta/Desktop/ai-site-engine/site-create-a-premium-modern-website-for-a-pr/agent/AGENT_REPORT.md).

Implemented: the shared site shell now has a semantic header/footer with real brand and contact content, valid footer navigation, and a skip link; the homepage and preview sections now expose explicit semantic labels for validation; the broken default favicon reference was removed; and the shell CSS was tightened so navigation, CTAs, footer, and the floating WhatsApp button stay stable across responsive breakpoints.

Build result: `npm run build` passed with Vite production build success. I did not run browser-based manual validation in this turn.
file update:
diff --git a/agent/AGENT_REPORT.md b/agent/AGENT_REPORT.md
index 9601e7fa192d1830ba147f8db2d34682f6cb3db6..90aea4727f487fbee35b710e30b113f686ed271d
--- a/agent/AGENT_REPORT.md
+++ b/agent/AGENT_REPORT.md
@@ -218,6 +218,16 @@
 TASK section-chi-siamo-about-hero completed successfully.
 Build passed.
 
+Completed TASK `validation-prep`.
+- Strengthened the shared shell in `src/layout/Layout.jsx` with a semantic header, skip link, brand block, footer navigation, and real contact details so validation can verify structure and destination integrity.
+- Added missing section labelling in `src/components/HeroSection.jsx`, `src/components/SignaturePreviewSection.jsx`, and `src/components/BrandStoryPreviewSection.jsx` to make the required sections easier to validate semantically.
+- Removed the broken default favicon reference from `index.html` and updated `src/App.css` so the header, footer, navigation, CTAs, and fixed WhatsApp button remain stable across the required responsive breakpoints.
+
+TASK validation-prep executed by Codex.
+Waiting for validation.
+
+TASK validation-prep completed successfully.
+Build passed.
 Completed TASK `responsive-polish`.
 - Replaced the Vite starter global CSS with site-wide layout, reset, navigation, footer, and breakpoint rules in `src/index.css` and `src/App.css`.
 - Added targeted responsive hooks to the allowed section components so hero actions, split layouts, card grids, and floating WhatsApp CTA behave cleanly across `360px`, `768px`, `1024px`, and `1440px`.
diff --git a/index.html b/index.html
index 229ea1aa36ec7dca723ba6fbcc71bc8f41dfec31..7e971742816fbf0c083399a66a58e1a8a7609519
--- a/index.html
+++ b/index.html
@@ -2,7 +2,6 @@
 <html lang="it">
   <head>
     <meta charset="UTF-8" />
-    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta
       name="description"
diff --git a/src/App.css b/src/App.css
index 5ac1aa92641041100456bcb9e85a126982c7fa6e..a8d02b246b7a76b58b2834b51ad76c5a26e9aab6
--- a/src/App.css
+++ b/src/App.css
@@ -3,7 +3,24 @@
   width: 100%;
 }
 
-header {
+.skip-link {
+  position: absolute;
+  left: 1rem;
+  top: -3rem;
+  z-index: 100;
+  padding: 0.75rem 1rem;
+  border-radius: 999px;
+  background: #23251f;
+  color: #f8f3ea;
+  text-decoration: none;
+  transition: top 160ms ease;
+}
+
+.skip-link:focus {
+  top: 1rem;
+}
+
+.site-header {
   position: sticky;
   top: 0;
   z-index: 40;
@@ -12,9 +29,34 @@
   backdrop-filter: blur(12px);
 }
 
-nav[aria-label="Main navigation"] {
+.site-header__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 0.75rem;
+}
+
+.site-brand {
+  display: grid;
+  gap: 0.1rem;
+  width: fit-content;
+  text-decoration: none;
+}
+
+.site-brand__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #23251f;
+}
+
+.site-brand__tagline {
+  font-size: 0.92rem;
+  color: #5e635a;
+}
+
+.site-nav {
   padding: 0.5rem;
   border: 1px solid rgba(47, 49, 45, 0.08);
   border-radius: 999px;
@@ -27,7 +69,7 @@
   gap: 0.4rem;
 }
 
-nav[aria-label="Main navigation"] a {
+.site-nav a {
   display: inline-flex;
   align-items: center;
   justify-content: center;
@@ -39,8 +81,8 @@
   transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
 }
 
-nav[aria-label="Main navigation"] a:hover,
-nav[aria-label="Main navigation"] a[aria-current="page"] {
+.site-nav a:hover,
+.site-nav a[aria-current="page"] {
   background: #6a7761;
   color: #f8f3ea;
 }
@@ -49,16 +91,59 @@
   width: 100%;
 }
 
-footer {
+.site-footer {
   padding: 1.75rem 1rem 2.5rem;
   background: #23251f;
   color: rgba(248, 243, 234, 0.78);
 }
 
-footer p {
+.site-footer__inner {
   width: min(100%, 72rem);
   margin: 0 auto;
+  display: grid;
+  gap: 1.5rem;
+}
+
+.site-footer__brand,
+.site-footer__contact {
+  display: grid;
+  gap: 0.45rem;
+}
+
+.site-footer__name {
+  font-size: 1rem;
+  font-weight: 700;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  color: #f8f3ea;
+}
+
+.site-footer__tagline,
+.site-footer__copyright,
+.site-footer__contact,
+.site-footer__contact a {
   font-size: 0.95rem;
+  line-height: 1.7;
+  color: rgba(248, 243, 234, 0.78);
+}
+
+.site-footer__nav {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.75rem 1rem;
+}
+
+.site-footer__nav a {
+  color: #f8f3ea;
+  text-decoration: none;
+}
+
+.site-footer__nav a[aria-current="page"] {
+  color: #c7d3bb;
+}
+
+.site-footer__contact {
+  font-style: normal;
 }
 
 .page-shell {
@@ -123,16 +208,16 @@
 }
 
 @media (max-width: 767px) {
-  header {
+  .site-header {
     padding: 0.75rem 0.75rem 0;
   }
 
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     border-radius: 1.4rem;
     justify-content: stretch;
   }
 
-  nav[aria-label="Main navigation"] a {
+  .site-nav a {
     flex: 1 1 calc(50% - 0.4rem);
     min-width: 0;
   }
@@ -197,7 +282,11 @@
 }
 
 @media (min-width: 768px) and (max-width: 1023px) {
-  nav[aria-label="Main navigation"] {
+  .site-header__inner {
+    align-items: center;
+  }
+
+  .site-nav {
     justify-content: center;
   }
 
@@ -216,10 +305,24 @@
 }
 
 @media (min-width: 1024px) {
-  header {
+  .site-header {
     padding-top: 1.25rem;
   }
 
+  .site-header__inner {
+    grid-template-columns: auto minmax(0, 1fr);
+    align-items: center;
+  }
+
+  .site-nav {
+    justify-content: flex-end;
+  }
+
+  .site-footer__inner {
+    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
+    align-items: start;
+  }
+
   .hero-section {
     min-height: min(78vh, 54rem);
     display: grid;
@@ -250,7 +353,7 @@
 }
 
 @media (min-width: 1440px) {
-  nav[aria-label="Main navigation"] {
+  .site-nav {
     padding: 0.65rem;
   }
 
diff --git a/src/components/BrandStoryPreviewSection.jsx b/src/components/BrandStoryPreviewSection.jsx
index 799c4f666a3b7eb759ea8ba5d43508c396c6f295..65ccbc98406a2d3dd71a1e798c7b1174a3bca7c9
--- a/src/components/BrandStoryPreviewSection.jsx
+++ b/src/components/BrandStoryPreviewSection.jsx
@@ -85,7 +85,12 @@
 
 export default function BrandStoryPreviewSection() {
   return (
-    <section id="brand-story-preview" className="content-section" style={styles.section}>
+    <section
+      id="brand-story-preview"
+      className="content-section"
+      aria-labelledby="brand-story-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div
           className="split-layout split-layout--preview"
@@ -96,7 +101,7 @@
         >
           <div style={styles.textColumn}>
             <p style={styles.eyebrow}>Chi sono</p>
-            <h2 style={styles.title}>
+            <h2 id="brand-story-preview-title" style={styles.title}>
               Un supporto educativo che parte dalla relazione
             </h2>
             <p style={styles.description}>
diff --git a/src/components/HeroSection.jsx b/src/components/HeroSection.jsx
index 44fcb20afc482c01652a3012a8b14ee92b60d5ef..0f2473543b698b30aee6f6f7703cfb5aba58ea55
--- a/src/components/HeroSection.jsx
+++ b/src/components/HeroSection.jsx
@@ -97,7 +97,12 @@
   secondaryCta = defaultSecondaryCta,
 }) {
   return (
-    <section id="hero" className="hero-section" style={styles.section}>
+    <section
+      id="hero"
+      className="hero-section"
+      aria-labelledby="home-hero-title"
+      style={styles.section}
+    >
       <div aria-hidden="true" style={styles.background} />
 
       <div className="hero-section__container" style={styles.container}>
@@ -105,7 +110,7 @@
           Educazione cinofila moderna, pratica e rispettosa
         </p>
 
-        <h1 style={styles.title}>
+        <h1 id="home-hero-title" style={styles.title}>
           Aiuto concreto per costruire una relazione piu serena con il tuo cane
         </h1>
 
diff --git a/src/components/SignaturePreviewSection.jsx b/src/components/SignaturePreviewSection.jsx
index f0f739376d5423282e27ec8a8be73f8a23d950c1..841393f9e58fc093e3c5f0b0209d229e24abecbb
--- a/src/components/SignaturePreviewSection.jsx
+++ b/src/components/SignaturePreviewSection.jsx
@@ -110,11 +110,18 @@
 
 export default function SignaturePreviewSection() {
   return (
-    <section id="signature-preview" className="content-section" style={styles.section}>
+    <section
+      id="signature-preview"
+      className="content-section"
+      aria-labelledby="signature-preview-title"
+      style={styles.section}
+    >
       <div className="content-section__container" style={styles.container}>
         <div className="section-intro" style={styles.intro}>
           <p style={styles.eyebrow}>Come lavoro</p>
-          <h2 style={styles.title}>Un approccio chiaro, rispettoso e concreto</h2>
+          <h2 id="signature-preview-title" style={styles.title}>
+            Un approccio chiaro, rispettoso e concreto
+          </h2>
           <p style={styles.description}>
             Equilibrio Cinofilo propone un lavoro educativo costruito sulla
             relazione, sul contesto reale e su obiettivi utili nella quotidianita.
diff --git a/src/layout/Layout.jsx b/src/layout/Layout.jsx
index 5550c15a8943c6cd5619d56a9986e6c9ef338246..f4970c3819adf36eacc6dd1c46b7e37e6c62a4a8
--- a/src/layout/Layout.jsx
+++ b/src/layout/Layout.jsx
@@ -3,24 +3,68 @@
 export default function Layout({ children, navigationItems = [] }) {
   return (
     <>
-      <header>
-        <nav aria-label="Main navigation">
-          {navigationItems.map((item) => (
-            <NavLink
-              key={item.target}
-              to={item.target}
-              end={item.target === "/"}
-            >
-              {item.label}
-            </NavLink>
-          ))}
-        </nav>
+      <a className="skip-link" href="#main-content">
+        Vai al contenuto
+      </a>
+
+      <header className="site-header">
+        <div className="site-header__inner">
+          <NavLink className="site-brand" to="/" end>
+            <span className="site-brand__name">Equilibrio Cinofilo</span>
+            <span className="site-brand__tagline">
+              Educazione cinofila moderna e rispettosa
+            </span>
+          </NavLink>
+
+          <nav aria-label="Main navigation" className="site-nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={item.target}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+        </div>
       </header>
 
-      <main>{children}</main>
+      <main id="main-content">{children}</main>
 
-      <footer>
-        <p>© Website</p>
+      <footer className="site-footer">
+        <div className="site-footer__inner">
+          <div className="site-footer__brand">
+            <p className="site-footer__name">Equilibrio Cinofilo</p>
+            <p className="site-footer__tagline">
+              Percorsi educativi pratici, rispettosi e costruiti sulla vita reale.
+            </p>
+          </div>
+
+          <nav aria-label="Footer navigation" className="site-footer__nav">
+            {navigationItems.map((item) => (
+              <NavLink
+                key={`footer-${item.target}`}
+                to={item.target}
+                end={item.target === "/"}
+              >
+                {item.label}
+              </NavLink>
+            ))}
+          </nav>
+
+          <address className="site-footer__contact">
+            <a href="tel:+39011000000">+39 011 000000</a>
+            <a href="mailto:ciao@equilibriocinofilo.it">
+              ciao@equilibriocinofilo.it
+            </a>
+            <span>Torino e dintorni</span>
+          </address>
+
+          <p className="site-footer__copyright">
+            © Equilibrio Cinofilo
+          </p>
+        </div>
       </footer>
     </>
   )

tokens used
47.085