# Local SEO Design

## Goal

Add local SEO signals for yikamahizmetleri.com without changing the current single-page React structure.

## Scope

- Use `https://yikamahizmetleri.com/` as the canonical production URL.
- Target the core service terms: hali yikama, koltuk yikama, yerinde koltuk yikama, ofis koltugu temizligi, arac koltugu yikama.
- Target the service areas: Tuzla, Gebze, Pendik, Kartal, Maltepe, Bostanci, Kadikoy, Umraniye.
- Add metadata, social preview metadata, structured data, robots sitemap discovery, and visible service-area copy.

## Architecture

This is a Create React App single-page site. Static SEO metadata belongs in `public/index.html`, crawler discovery belongs in `public/robots.txt` and `public/sitemap.xml`, and visible service area copy belongs in the existing React content/data path.

## Components

- `public/index.html`: Title, description, canonical URL, Open Graph/Twitter metadata, and LocalBusiness JSON-LD.
- `public/robots.txt`: Sitemap reference for crawlers.
- `public/sitemap.xml`: Canonical `.com` URL.
- `package.json`: Align CRA homepage with the production domain.
- `src/data/data.json`: Add service-area copy to existing content data.
- `src/components/contact.jsx`: Render service-area copy near the region list.

## Testing

Run the production build with `npm run build`. Check generated `build/index.html`, `build/robots.txt`, and `build/sitemap.xml` for the SEO metadata and domain consistency.

