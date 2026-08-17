# Megha Gupta — Portfolio Site

A responsive, single-page portfolio site (plain HTML/CSS/JS, no build step) with an
ink / ivory / gold palette and a faceted-diamond signature motif, matching the visual
language of the Angara PDP case study.

## Files
- `index.html` — all page content
- `styles.css` — all styling (responsive, mobile nav, scroll reveals)
- `script.js` — mobile nav toggle, scroll-reveal animation, cursor facet effect
- `assets/` — put your résumé PDF and any real project images here

## Before you publish — 3 things to update

1. **Behance links.** Each project row in `index.html` currently links out —
   replace the `href` on each `<a class="project-row ...">` with the direct
   Behance gallery URL for that case study (e.g. `https://www.behance.net/gallery/12345678/PDP-Redesign`).
   The PDP project currently points to your Behance profile as a placeholder.

2. **Résumé.** Drop your résumé PDF into `assets/` and name it
   `Megha-Gupta-Resume.pdf` (or update the `href` in the header/mobile nav).

3. **Project thumbnails.** Each project currently shows a simple line-art
   diamond placeholder instead of a screenshot. To swap in real imagery:
   - Add an image to `assets/` (e.g. `assets/pdp-cover.jpg`)
   - Replace the `<svg class="media-placeholder">...</svg>` block inside that
     project's `.media-frame` with `<img src="assets/pdp-cover.jpg" alt="...">`
   - Recommended: crop to a 4:3 ratio for a consistent grid.

## Running locally
No build tools needed — just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing on GitHub Pages

1. Create a new GitHub repo (e.g. `megha-portfolio`) and push these files to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/megha-portfolio.git
   git push -u origin main
   ```
2. On GitHub: go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
4. Your site will be live in a minute or two at:
   `https://<your-username>.github.io/megha-portfolio/`

   (If you want it at the root of `https://<your-username>.github.io`, name the
   repo exactly `<your-username>.github.io` instead.)

## Notes
- Fonts (Fraunces + Inter) load from Google Fonts via CDN — no local font files needed.
- The site respects `prefers-reduced-motion` and has visible keyboard focus states.
- Fully responsive down to small mobile widths, with a slide-down mobile nav.
