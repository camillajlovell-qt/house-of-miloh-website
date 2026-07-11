# House of Miloh — Design System

## Company & context

House of Miloh is a design studio founded after a decade of design experience across fast-paced agencies, wedding/event branding, and digital marketing. It crafts brand identities for **conscious spaces, hospitality concepts, and lifestyle brands** globally, based by the Mediterranean but working internationally. The studio's stated priorities: clarity, real connection, a stress-free creative process, and a "tactile warmth" rooted in the sun-drenched Mediterranean.

There is one product in scope: the **marketing website** (Home, About, Portfolio, Services, Contact).

**Sources provided:**
- Figma file "House of Miloh.fig" (mounted read-only), Page-1, 4 frames: `Html-Body` (home page), `contact-page`, `portfolio-grid-example`, `portfolio-grid-example-2`.
- `uploads/house of miloh logo.svg`, `uploads/miloh_logo.png` — the client's real wordmark lockup.
- Written company description (this turn's brief).
- Aesthetic reference: thesurcollective.com (editorial, full-bleed photography, warm neutrals, magazine-style sections).

**Important caveat about the Figma source:** the file's nav/logo already reads "House of Miloh" and its layout/type/color system is what this design system is built from — but its body *copy* is leftover template content (a fictional founder "Camilla Lovell", the handle `@SUR_COLLECTIVE`, a footer copyright reading "AVANT-GARDE TRAVEL", hotel-review style project rows). That copy was not reused; the pages in `ui_kits/website/` use House of Miloh's real company description instead, while every structural/visual decision (spacing, type scale, color, component shapes) is copied verbatim from the source file.

The Figma file defines no formal component library (`METADATA.md` lists 0 components, no token/variable collections, no text-style catalog) — it is four full-page mockups. The component set below was derived by identifying the repeating structural patterns across all four frames (nav, buttons, footer columns, project cards, form fields), not invented from a generic template.

## Content fundamentals

- **Voice:** warm, personal, first-person ("I design brands…", "I'm here to breathe life into your ideas"). Confident but unhurried — never salesy or urgent.
- **Casing:** sentence case for body copy and headlines; navigation, CTAs, eyebrow labels and photo captions are UPPERCASE with wide letter-spacing (0.6–1.4px).
- **Tone words:** *seamless, stress-free, intentional, tactile, effortless, sun-drenched, quiet, considered.* Avoid hustle-culture or hard-sell language.
- **Address:** mixes "I" (founder voice, About page) and "we"/studio voice (Services, Contact) — both are in use in the source and are fine; About should stay personal, Services/Contact can be studio-voice.
- **No emoji.** No exclamation points in the source copy. Punctuation is calm — em dashes and periods, rarely a question mark.
- **Example lines (from the brief, representative of the voice):** "beautiful design is a given, but what I truly care about is clarity, real connection, and making the whole journey feel like a total dream," and "design brands that feel like home, with a tactile warmth you won't forget."

## Visual foundations

- **Color:** a warm, sun-bleached neutral palette — cream page background (`#FFFDF2`), a slightly deeper ivory for alternating sections (`#F6F4E9`), a muted sand for image placeholders (`#F0EEE3`). Ink is a deep maroon/oxblood (`#330D0D`) for headings, borders and the one solid button fill; body copy sits in a warm brown (`#524342`), never pure black. A dusty rose hairline (`#D6C2C0`) borders the footer. No bright accent color anywhere — warmth comes from photography, not color.
- **Type:** EB Garamond (serif) carries every headline, hero statement, and italic pull-quote/caption — the studio's editorial voice. Hanken Grotesk (sans) carries all UI chrome: nav, buttons, form labels, and body paragraphs. Display sizes run large (48–72px) with tight/negative letter-spacing (-1 to -1.6px); UI/label text runs small (12–14px) with wide positive tracking (0.6–1.4px) and uppercase. This large-serif / small-tracked-sans contrast is the core typographic signature.
- **Spacing:** generous, editorial — section padding is 120–160px vertically, 64px gutters, 24px grid gaps. Nothing is snapped to a 4/8px grid; the source uses odd decimals (e.g. 31.1px gaps, 585.83px heights) because it's built from real content, not a spacing system — component tokens round these into a clean 4/8/12/16/24/32/48/64/80/120/160 scale without changing the visual effect.
- **Backgrounds:** full-bleed photography is central — hero sections, a full-bleed mid-page CTA band, and project cards are all photo-led. No gradients except a subtle 10–15% black overlay on hero photography for text legibility, and one soft radial vignette in the Figma inventory (not used in rebuilt pages). No illustration, no repeating pattern/texture, no noise.
- **Animation:** the source is a static mock — no motion was specified. Components here use only simple, fast (0.2s ease) hover transitions (background/color/opacity); no bounce, no fade-in-on-scroll choreography implied by the source.
- **Hover / press states:** solid buttons fade slightly (opacity 0.85); outline buttons invert to solid maroon-on-cream; nav links darken from brown to maroon. No press/active-state shrink was observed — keep hover states subtle.
- **Borders & shape:** every corner is square (radius 0) — cards, images, buttons, form fields, the header/footer. The single exception is the circular social-icon button (border-radius: 9999px). Borders are always 1px, either an outline (buttons, form fields, portfolio nav's "active" state) or a hairline divider (footer top border). No drop shadows or inner glows anywhere in the source.
- **Transparency & blur:** used exactly once, intentionally — the sticky nav header is cream at 80% opacity with a 12px backdrop blur, so page content is legible scrolling underneath it. Not used elsewhere.
- **Imagery color vibe:** warm, sun-lit, naturalistic color photography — turquoise Mediterranean water, terracotta and wood interiors, soft golden-hour light. No black-and-white, no heavy grain/filter, no desaturation.
- **Cards:** no shadow, no rounding, no border by default — a portfolio/project card is simply a full-bleed photo over an uppercase serif title and an italic tagline underneath. The only bordered "card"-like elements are buttons and form fields (1px inset border).

## Iconography

The source Figma file defines no icon font, icon library, or SVG icon set beyond a handful of one-off decorative vector marks embedded directly in the hero photograph layer (not real UI icons) and a single unlabeled social/contact glyph in the footer (rendered as `./Icon.svg`, not extracted — its meaning wasn't legible from the JSX). **No icon system is defined by the source.** No emoji, no unicode-glyph icons, and no PNG icon sprite were found either.

For the one recurring UI need — a social link glyph inside `SocialIconButton` — this design system does not invent an icon; the component accepts an `icon` prop (`ReactNode`) so a consuming project can drop in whatever real social icon (Instagram, etc.) it has, or plain text initials as a placeholder (as the demo cards do). If a small, consistent CDN icon set is needed later (e.g. Lucide, matching the thin 1px line-weight used elsewhere), that would be an **intentional addition** — not yet made, since the source doesn't call for one.

## Intentional additions

- `Eyebrow` component — the source repeats a small-caps italic label pattern (`FOLLOW ALONG @…`, hotel taglines, footer headings) dozens of times without ever naming it as a component; extracted here because it's a real, repeated pattern.
- `SiteHeader` / `SiteFooter` — the nav and footer repeat verbatim across all four source frames; componentized rather than copy-pasted per page.
- Font substitution: the source's "Liberation Serif" (bold/bold-italic, 12px eyebrow labels) is Figma/LibreOffice's stand-in for a missing font (likely Times New Roman), not an intentional brand typeface — see **Font substitution flag** below.

## Font substitution flag ⚠️

EB Garamond and Hanken Grotesk are both real Google Fonts and are loaded as-is — no substitution needed for either. The source file's third font, **"Liberation Serif" (Bold / Bold Italic)**, used only for small 12px uppercase eyebrow labels, is almost certainly Figma's automatic substitute for a font that wasn't available when the file was inspected (commonly Times New Roman) — not a deliberate brand choice. This system uses **EB Garamond Italic** for that role instead, to stay inside the two-typeface system. If House of Miloh actually intends a third serif for eyebrow labels, please supply the font file/name and it'll be swapped in directly.

## Index

- `styles.css` — root stylesheet (imports everything below).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `base.css` — global reset + shared utility classes.
- `assets/logo/` — client-provided wordmark lockup (SVG + PNG). No standalone icon mark was provided — see Iconography.
- `assets/imagery/` — photography extracted from the Figma file (hero, about, project/portfolio images, full-bleed CTA band).
- `components/core/` — `Button`, `NavLink`, `Eyebrow`, `SocialIconButton`.
- `components/forms/` — `Input`.
- `components/media/` — `PortfolioCard`, `ServiceTile`.
- `components/navigation/` — `SiteHeader`, `SiteFooter`.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand/shape).
- `ui_kits/website/` — click-through Home / About / Portfolio / Services / Contact recreation.
- `SKILL.md` — Claude Code-compatible skill wrapper for this design system.

## Caveats & ask

- The Figma file had no formal component library, token collections, or text-style catalog — the component set, token values, and page structure above were reverse-engineered from the four page mockups' repeating patterns, not read from a Figma component/variable system.
- No standalone logo *mark* (icon-only lockup) was found — only the full wordmark lockup in `uploads/`. If a mark exists, please attach it.
- The footer's single social icon glyph (`Icon.svg` in the source) wasn't legible/extractable as a clean standalone asset — `SocialIconButton` ships icon-agnostic; please supply the real social icons (Instagram, Pinterest, etc.) you use.
- Please review the **Font substitution flag** above and confirm EB Garamond Italic is an acceptable stand-in for the eyebrow-label role, or supply the intended third typeface.
- This is a first pass — happy to iterate on copy voice, imagery selection, or add more page states (e.g. a Portfolio case-study detail page, a Journal/blog template) if useful.
