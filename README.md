# MindMe! — website

Single static page (HTML/CSS/JS, no build step) for **mindme.me**, hosted free on **GitHub Pages**. Replaces the old six-page Squarespace site.

- Trilingual **EN / DE / IT** toggle (one language at a time; default EN).
- Sections: Hero → About → *capabilities* → **Beta** → Concept → Team → Contact.
- Responsive, keyboard-accessible, honours `prefers-reduced-motion`.

```
index.html
assets/
  css/styles.css        ← design tokens + components
  js/i18n.js            ← EN/DE/IT dictionaries
  js/main.js            ← language switch, scroll-spy, reveals, form, video
  img/  · video/        ← web-optimised assets (WebP + PNG fallback)
```

The working originals live in `MindMeWebsite_assets/` (git-ignored). To re-optimise, re-run the `sips`/`cwebp`/`ffmpeg` pipeline used to populate `assets/`.

---

## Run locally

```bash
python3 -m http.server 8000     # then open http://localhost:8000
```

(Open via a server, not `file://`, so fonts and `fetch` behave.)

---

## ⚠ Still needed before launch (placeholders are in the code, clearly marked)

Search the source for these tokens:

| What | Where | Token to replace |
|------|-------|------------------|
| **Public Google Form URL** for beta (the `…/viewform`, NOT `…/edit`) | `index.html` Beta button | `PUBLIC_FORM_ID` |
| **Concept video** (external embed — local file is 122 MB, over GitHub's limit) | `index.html` `.concept__video` | `data-embed="youtube:VIDEO_ID"` → real ID |
| **Founder photos** | `index.html` Team | `.member__photo--ph` placeholders |
| **Native DE / IT body copy** | `assets/js/i18n.js` | `DE` / `IT` inherit English — override body keys |
| **Impressum & privacy text** (legal — Antonino/DPZ) | `index.html` footer | placeholder `#` links |

**Contact:** the form currently emails the founders (`acalapai@dpz.eu`, `fschneider@dpz.eu`) via the visitor's mail app — no third-party service needed. To route it through Formspree/Web3Forms/Basin instead (hides the addresses, no mail-client needed), set `data-endpoint` on the `#contact-form` to the service URL.

> **i18n note:** chrome (nav, buttons, form labels) is translated; **body copy is English in all three languages** until native DE/IT arrives. A visible notice bar shows for DE/IT meanwhile. Do **not** machine-translate the body — fill `DE`/`IT` in `i18n.js`.

---

## Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `mindme-website`) and push this folder to `main`.
2. **Settings → Pages →** Source: *Deploy from a branch* · Branch: `main` · Folder: `/ (root)` → Save.
3. Site goes live at `https://<user>.github.io/<repo>/`. **Every push to `main` redeploys.**
4. Verify everything on that `github.io` URL **before** touching DNS.

## Custom domain `mindme.me` (do this only after the github.io site checks out)

The domain is registered at **Squarespace**. Switch DNS there:

1. Add a `CNAME` file to the repo root containing exactly:
   ```
   mindme.me
   ```
   and set the same domain under **Settings → Pages → Custom domain**.
2. At the Squarespace DNS panel, point the apex `mindme.me` at GitHub Pages:
   ```
   A     @   185.199.108.153
   A     @   185.199.109.153
   A     @   185.199.110.153
   A     @   185.199.111.153
   CNAME www <user>.github.io
   ```
   (Confirm the current GitHub Pages IPs in GitHub's docs at cutover time.)
3. Enable **Enforce HTTPS** in Pages once the cert provisions.
4. **Only after** `https://mindme.me` serves this site, cancel the Squarespace **website subscription**.

> **Do not let the domain *registration* lapse** when cancelling the website plan — they are billed separately. If the company mailbox is set up around the same time, add its email DNS records (MX/SPF/DKIM) in the same DNS sitting — keep website and email records separate and both present.
