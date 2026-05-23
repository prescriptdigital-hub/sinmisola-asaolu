# CLAUDE.md

Guidance for Claude Code (and any developer) working in this repository.

## Project

This is the official website of **Firstlady Sinmisola Juliet Asaolu**: wife,
mother, leader, philanthropist and Chief Executive of Firstlady Collections in
Ile Ife, Osun State, Nigeria. It is a premium personal brand and portfolio
site. The visual language is deliberately elegant and editorial: deep black
backgrounds, antique gold accents and ivory text, paired with a high contrast
serif and a clean sans.

The client is non technical. Treat every change as client facing work and keep
the bar high.

## Tech stack

- **Next.js 14** (App Router, React 18), plain JavaScript with JSX. No TypeScript.
- **Custom CSS** in `app/globals.css`. No Tailwind, no CSS framework. The whole
  design system lives in that one well organised file.
- **next/font/google** for typography (Cormorant Garamond, Jost, Pinyon Script).
- No database and no CMS. Page content is defined as plain data arrays inside
  each page file.

## Commands

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the dev server at http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # run eslint (next/core-web-vitals)
```

The first `npm install` and `npm run dev` need an internet connection so
next/font can fetch the Google fonts. After that it works offline.

## Project structure

```
app/
  layout.jsx        Root layout: fonts, metadata, Header and Footer
  globals.css       The entire design system and all component styles
  page.jsx          Home
  about/page.jsx
  foundation/page.jsx
  collections/page.jsx
  gallery/page.jsx
  blog/page.jsx
  contact/page.jsx
  not-found.jsx     Branded 404
  icon.svg          Favicon (SA monogram)
components/
  Header.jsx        Sticky nav, active link, mobile menu (client component)
  Footer.jsx        Quote band, links, socials, contact
  Frame.jsx         Media frame; shows a gold placeholder until a photo exists
  Reveal.jsx        Fade and lift on scroll (IntersectionObserver, client)
  Ornament.jsx      Gold divider with a centre diamond
  PageBanner.jsx    Standard banner at the top of every inner page
  Icons.jsx         Inline SVG icon set (currentColor)
  ContactForm.jsx   No backend form that composes a mailto (client component)
lib/
  site.js           Single source of truth for name, email, address, nav, socials
public/
  images/           Drop real photos here. See public/images/README.md
```

## Design tokens

All colours, fonts and spacing are CSS custom properties at the top of
`app/globals.css` under `:root`. Always use the tokens, never hard code a hex
value in a component.

Core palette:

- `--black` `#0a0a0b`, `--black-soft` `#111012`, `--panel` `#16141a`
- `--gold` `#c9a24c`, `--gold-bright` `#e3c178`, `--gold-deep` `#9c7a2e`
- `--ivory` `#f3eee4`, `--white` `#ffffff`, `--muted` `#a79f91`

Type:

- `--font-display` Cormorant Garamond, for headings and large display text
- `--font-body` Jost, for body copy, labels and buttons
- `--font-script` Pinyon Script, for the signature flourish only

## Conventions

- **No em dashes or en dashes anywhere**, in code comments, copy or commit
  messages. This is a firm client preference. Use commas, full stops or a
  rewrite instead. A plain hyphen inside a compound word is fine.
- Keep the tone of all written copy warm, dignified and human. Avoid generic
  filler and anything that reads as templated. Write as a thoughtful person
  would, not as a content generator.
- Reusable visual patterns belong in `globals.css` as a named class. Only use
  inline `style` for small one off spacing tweaks.
- Components that use hooks, browser APIs or event handlers must start with
  `"use client"` (currently Header, Reveal and ContactForm).
- Edit shared facts (email, address, social links, nav) in `lib/site.js` only.
  Do not repeat them across pages.
- Wrap sections in `<Reveal>` for the scroll in animation, and stagger groups
  with the `delay` prop (for example `delay={i * 120}`).

## Adding or editing content

- **Text on a page**: edit the relevant file in `app/`. Most pages keep their
  content in a data array near the top, then map over it.
- **A new page**: create `app/<slug>/page.jsx`, export a `metadata` object and a
  default component, start it with `<PageBanner ... />`, then add the route to
  `navLinks` in `lib/site.js`.
- **Photos**: see `public/images/README.md` for exact filenames and sizes.
  `<Frame>` shows a placeholder until the matching file exists, so the layout is
  never broken while photos are pending.

## Deployment

The site deploys cleanly to Vercel (zero config) or any Node host via
`npm run build` then `npm run start`. For a fully static export, add
`output: "export"` to `next.config.js`; note the contact form already works
without a server because it uses a mailto link.

## Verifying changes

Before finishing any task, run `npm run build` and confirm it completes without
errors, then check the affected pages in `npm run dev`. Confirm no em dashes
were introduced.
