# House of Miloh — website

A seven-page marketing site built on the House of Miloh design system. Every page is a
self-contained `.dc.html` file that runs entirely in the browser using relative paths, so
the whole thing is just static files — no build step, no dependencies to install.

## Pages
- `Home.dc.html` — landing page (this is the entry point)
- `About.dc.html` — studio story
- `Portfolio.dc.html` — work grid
- `Project.dc.html` — case-study detail (Casa Luna)
- `Services.dc.html` — services + process
- `Contact.dc.html` — working, validating enquiry form
- `Journal.dc.html` — notes / blog index

`index.html` redirects to `Home.dc.html`.

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
