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
section-menu-menu-categories

## Current task title
Create menu-categories section on menu

## Current task type
section

## Current task target
```json
{
  "pageId": "menu",
  "sectionId": "menu-categories",
  "sectionType": "menu-categories"
}
```

## Depends on
- page-menu-shell

## Files allowed
- src/pages/Menu.jsx
- src/components/MenuCategoriesSection.jsx
- src/components

## Definition of done
- section menu-categories exists on menu
- section menu-categories matches type menu-categories
- section menu-categories is rendered in page menu

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
