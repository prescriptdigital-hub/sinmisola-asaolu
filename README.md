# Firstlady Sinmisola Juliet Asaolu

The official website of Firstlady Sinmisola Juliet Asaolu: wife, mother,
leader, philanthropist and Chief Executive of Firstlady Collections, Ile Ife,
Osun State, Nigeria.

Built with Next.js 14 and a custom black, gold and ivory design system.

## Getting started

You will need [Node.js](https://nodejs.org) version 18.17 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. The page reloads as you edit.

## Available scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Check the code with eslint |

## Pages

Home, About, Foundation, Collections, Gallery, Blog and Contact.

## Adding your photos

Open the `public/images` folder and drop your photos in using the filenames
listed in `public/images/README.md`. Each image has a recommended size. Until a
photo is added, the site shows a tasteful gold placeholder so it always looks
complete.

## Editing content

- Your name, email, address, social links and the navigation menu live in one
  file: `lib/site.js`.
- The words on each page live in that page's file inside the `app` folder.
- Colours and fonts are defined once at the top of `app/globals.css`.

For deeper guidance, see `CLAUDE.md`.

## Deploying

The easiest option is [Vercel](https://vercel.com): connect the repository and
it builds automatically. Any host that runs Node will also work using
`npm run build` followed by `npm run start`.
