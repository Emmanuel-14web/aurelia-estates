# Aurelia Estates

A fictional, noindex portfolio concept for a boutique luxury real-estate agency. The experience includes a cinematic homepage, eight fictional listings, working filters, localStorage favorites, property detail presentation, buyer/seller/neighborhood/about/agent/journal/contact pages, lead forms, responsive navigation, sitemap, robots policy and accessible interaction states.

## Run locally

Requires Node 22.13+. Install with `npm ci`, then run `npm run dev`. Build with `npm run build`.

## Structure

- `app/page.tsx` — homepage, dataset, filtering, favorites and alerts
- `app/properties/ocean-house` — developed property detail template
- `app/[...slug]` — supporting editorial and conversion pages
- `app/robots.ts`, `app/sitemap.ts` — search architecture
- `app/globals.css`, `app/inner.css` — responsive design system
- `public` — icons and social preview assets

## Production handoff

Replace every fictional listing, advisor, address, phone number, image and illustrative figure. Connect forms to a validated server endpoint such as Formspree, HubSpot or a custom API with spam protection and consent logging. Replace the portfolio privacy notice with counsel-approved terms.

For an MLS/IDX integration, keep the UI layer and replace the local `homes` array with a server-side adapter for an authorized RESO Web API/MLS feed. Normalize images, prices, statuses and attribution, and follow the provider’s display rules.

The demo intentionally uses `noindex, follow` plus a blocking `robots.txt`. For a real launch, set metadata robots to `index, follow`, allow crawling in `app/robots.ts`, change the canonical hostname, regenerate the sitemap and submit it in Google Search Console.

## Client-launch SEO checklist

- Set verified domain, canonical URLs, office NAP and social profiles
- Replace demo Organization/RealEstateAgent details and add licensed brokerage data
- Give every listing, neighborhood and article unique metadata and structured data
- Confirm image rights, descriptive alt text and stable dimensions
- Validate schema, sitemap, redirects, Core Web Vitals and analytics consent

## Deployment

For Vercel, import the repository, retain the detected framework settings and deploy. For Netlify, connect the repository and use the framework integration or set the production build to `npm run build`. Add form/API environment variables in the host dashboard—never commit secrets.
