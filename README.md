# CSH Engineering Services & Trading

Business website for CSH Engineering Services & Trading, a small local business in Malaysia. Job scopes include redesign the webpage structure with a new domain name and redirect traffic from the old domain to this new domain.

🌐 **Live site:** [cshengineering.com](https://cshengineering.com)

<br>

## Tech Stack

| | |
| --- | --- |
| **Frontend** | HTML5, Bootstrap 5.3, Bootstrap Icons, Vanilla JS |
| **Hosting** | Netlify (auto-deploy via GitHub) |
| **Domain & DNS** | Cloudflare |

<br>

> No build step — pure static frontend.

<br>

## Project Structure

```
/
├── index.html              # Landing page
├── controllers.html        # Air compressor controllers showcase
├── packaging.html          # Packaging machinery showcase
├── metalworks.html         # Laser cut metal works showcase
├── reconditioned.html      # Reconditioned items (search + filter + pagination)
├── about.html              # About us + contact + map
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── favicon-32x32.png
├── favicon-16x16.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── apple-touch-icon.png
├── favicon.ico
├── css/
│   └── style.css           # All styles
├── js/
│   ├── navbar.js           # Shared navbar (injected into every page)
│   └── footer.js           # Shared footer + modals (injected into every page)
├── data/
│   ├── controllers.json    # Controller product data
│   ├── packaging.json      # Packaging machine data
│   ├── metalworks.json     # Metal works product data
│   └── reconditioned.json  # Reconditioned items data
└── images/
    ├── logo.webp
    ├── building.webp
    ├── banner-homepage.webp
    ├── wechat-qr.webp
    ├── line-qr.webp
    └── products/           # All product images (.webp)
```

<br>

## Local Development

No install required. Run a local server from the project root:

```bash
python -m http.server 3000
```

Then open `http://localhost:3000` in your browser.

> `fetch()` requires HTTP — opening `index.html` directly via `file://` will not load product data.

<br>

## Content Management

All product data lives in JSON files under `data/`. No backend or CMS — edit the JSON directly.

### Adding a product

1. Add image to `images/products/` — filename format: `item-index.webp`
2. Add entry to the relevant JSON file following the existing schema
3. Commit and push — Netlify auto-deploys in ~30 seconds

### Removing a product

1. Remove the entry from the JSON file
2. Optionally delete the image file
3. Commit and push

### JSON schemas

**controllers.json**
```json
{
  "id": 1,
  "name": "Product Name",
  "brand": "Brand Name",
  "brandUrl": "https://brand.com",
  "models": ["Model A", "Model B"],
  "description": "Short description.",
  "commonProblems": ["Problem 1", "Problem 2"],
  "serviceLeadTime": "TBA",
  "images": ["images/products/image-1.webp"]
}
```

**packaging.json**
```json
{
  "id": 1,
  "name": "Product Name",
  "category": "Category",
  "brand": "OEM",
  "description": "Short description.",
  "models": ["Model A"],
  "images": ["images/products/image-1.webp"]
}
```

**metalworks.json**
```json
{
  "id": 1,
  "name": "Product Name",
  "category": "Category",
  "brand": "OEM",
  "description": "Short description.",
  "models": ["Custom"],
  "images": ["images/products/image-1.webp"]
}
```

**reconditioned.json**
```json
{
  "id": 1,
  "name": "Product Name",
  "category": "Air Compressor",
  "brand": "Brand Name",
  "condition": "Reconditioned",
  "description": "Short description.",
  "images": ["images/products/image-1.webp"]
}
```

<br>

## Shared Components

Navbar and footer are injected via JS into every page — edit once, applies everywhere.

| File | What it controls |
|---|---|
| `js/navbar.js` | Navbar, nav links, dual contact badge groups |
| `js/footer.js` | Footer, contact details, WeChat/LINE modals |

Each page sets its active nav link via `data-page` on `<body>`:

```html
<body data-page="controllers">
```

Valid values: `home`, `controllers`, `packaging`, `metalworks`, `reconditioned`, `about`

<br>

## Contact Details

| Division | WhatsApp | Email |
|---|---|---|
| Controllers / Packaging | +60 12-291 1125 | s_cheng_88@hotmail.com |
| Metal Works | +60 12-231 1781 | stephyee8666@gmail.com |

To update contact details — edit `js/navbar.js` and `js/footer.js`.

<br>

## Deployment

Auto-deploys via Netlify on every push to `main`.

To deploy manually — drag and drop the project folder onto the Netlify dashboard.

**Netlify settings:**
- Build command: *(empty)*
- Publish directory: *(empty / root)*
- Pretty URLs: On

<br>

## Domain & DNS


Old domain (`csh-engineerings.com`) was originally registered under Wild West Domains (GoDaddy reseller) by a previous handler and transferred back to the business owner. To facilitate the transfer, domain nameservers were updated to Cloudflare, and the domain was subsequently transferred to **Cloudflare Registrar** using the EPP/auth code provided by the previous handler.

**Nameservers:**
```
meg.ns.cloudflare.com
vicente.ns.cloudflare.com
```
New Domain is registered and managed on **Cloudflare Registrar** (`cshengineering.com`).

**DNS records pointing to Netlify:**
```
Type: ALIAS  Name: @    Value: apex-loadbalancer.netlify.com
Type: CNAME  Name: www  Value: csh-engineering.netlify.app
```

<br>

## 301 Redirects

Redirects are configured in the **Cloudflare dashboard** (Rules → Redirect Rules).

Current redirects:
- Old domain (`csh-engineerings.com`) → `cshengineering.com`
- `www.cshengineering.com` → `cshengineering.com` (non-www canonical)

To add or modify redirects: Cloudflare Dashboard → your domain → Rules → Redirect Rules.

<br>

## Google Search Console

Site has been submitted to Google Search Console for indexing.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add domain → verify ownership via Cloudflare DNS TXT record
3. Submit sitemap: `https://cshengineering.com/sitemap.xml`

Sitemap covers all 6 pages. `reconditioned.html` is set to `weekly` changefreq as stock updates more frequently than the other pages.

To verify indexing status, search Google for:
```
site:cshengineering.com