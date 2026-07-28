# House of Miloh — website

A marketing site built on the House of Miloh design system. Every page is a
self-contained `.html` file that runs entirely in the browser using relative paths, so
the whole thing is just static files — no build step, no dependencies to install.
`responsive.css` adds small-screen layout rules shared across all pages, including a
mobile hamburger menu below 420px.

## Pages
- `index.html` — landing page, served directly at `/`
- `about.html` — studio story, served at `/about`
- `portfolio.html` — work grid, served at `/portfolio`
- `services.html` — services + process, served at `/services`
- `contact.html` — working, validating enquiry form, served at `/contact`
- `journal.html` — notes / blog index, served at `/journal`
- `denia-guide.html` — journal article: "An Insider's Guide To Denia Like A Local", served at `/denia-guide`
- `valencia-guide.html` — journal article: "A Guide to Valencia", served at `/valencia-guide`

### Case studies
Each portfolio piece has its own dedicated page (served at `/project*`), chained
together with "Next Project" links that loop back to the first:
- `project.html` — Lucy Connelly Skin, served at `/project`
- `project-hidden-cala.html` — served at `/project-hidden-cala`
- `project-arc-skin.html` — served at `/project-arc-skin`
- `project-european-athletics.html` — served at `/project-european-athletics`
- `project-highmoodfood.html` — served at `/project-highmoodfood`
- `project-weddings-events.html` — served at `/project-weddings-events`
- `project-salt-house.html` — served at `/project-salt-house`
- `project-azure-escapes.html` — served at `/project-azure-escapes`
- `project-studio-sorelle.html` — served at `/project-studio-sorelle`

The clean URLs (e.g. `/portfolio` instead of `/portfolio.html`) work automatically on
GitHub Pages, which serves a matching `<name>.html` file for an extensionless request —
no redirects or extra config needed. Locally, a plain static server (see below) won't do
this extension resolution, so you'll need the full `.html` filename when testing on
localhost.

## Run it on localhost

You need a static file server (opening the files directly with `file://` won't work because
the pages load a shared runtime). Pick whichever you have:

**Python** (already on most machines):
```bash
python3 -m http.server 8000
```

**Node:**
```bash
npx serve .
```

**PHP:**
```bash
php -S localhost:8000
```

Then open <http://localhost:8000> in your browser.

## Deploy
Because it's fully static, you can drop the whole folder onto any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3, etc.) as-is. Set `index.html`
as the default document and you're live.
