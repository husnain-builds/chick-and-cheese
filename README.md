# Chick’n Cheese

A modern, responsive restaurant website for Chick’n Cheese, built with Next.js App Router. The site showcases the restaurant’s menu and meal deals, introduces the brand, and helps guests contact or find its Lahore branches.

## Features

- **Animated home page:** rotating hero slides feature burgers, pizza, and wraps, with manual controls and a pause/resume option.
- **Menu browsing:** six food categories, image-led menu item cards, prices in Pakistani rupees, and in-page category navigation.
- **Meal deals:** a dedicated page presenting the restaurant’s current deal selection and prices.
- **About page:** restaurant story, values, and calls to action.
- **Contact and branch details:** phone and WhatsApp links, plus the two branch addresses listed on the printed menu.
- **Shared site navigation and footer:** consistent navigation and contact links across routes, including a responsive mobile menu.
- **Responsive styling:** layouts adapt to desktop, tablet, and mobile viewports.
- **Motion and accessibility considerations:** interactive controls have accessible names, and decorative/animated effects respect reduced-motion preferences.
- **Page metadata:** route-level titles and descriptions, with shared site metadata and Open Graph details.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home page, featured menu categories, food favorites, deals feature, and restaurant call to action |
| `/menu` | Food menu with category links, product images, descriptions, and prices |
| `/deals` | Meal deals and their prices |
| `/about` | Brand story and restaurant values |
| `/contact` | Phone, WhatsApp, and Lahore branch information |

## Branches

The contact page lists these locations, transcribed from the restaurant’s printed menu:

- **DHA Rahbar:** Sector 2, Food Court Area, J-Block, Gate #4, Defence Road, Lahore.
- **AWT Society:** B-Block Commercial, AWT Society, Adda Plot, Lahore.

The contact page and footer also include the phone number and WhatsApp contact link currently configured by the site.

## Tech stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) with the app’s visual system implemented in `app/globals.css`
- `next/font` for the Nunito Sans family

## Project structure

```text
app/
├── about/
│   └── page.tsx          # Brand story and values
├── components/
│   └── site.tsx          # Shared header, hero slider, promo strip, and footer
├── contact/
│   └── page.tsx          # Contact details and branch addresses
├── deals/
│   └── page.tsx          # Deal listing
├── lib/
│   └── menu.ts           # Menu categories, items, prices, and deals
├── menu/
│   └── page.tsx          # Image-led menu page
├── globals.css           # Global design system and responsive styles
├── layout.tsx            # Root layout, fonts, metadata, shared site chrome
└── page.tsx               # Home page
main/
├── IMG_3730.jpeg          # Printed menu reference
└── IMG_3731.jpeg          # Printed menu reference
```

## Getting started

### Requirements

- Node.js compatible with the installed Next.js version
- npm (or another compatible package manager)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. Changes to files in `app/` are reflected during development.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build; run `npm run build` first |
| `npm run lint` | Run ESLint |

## Updating site content

- **Menu categories, item descriptions, labels, and prices:** edit `app/lib/menu.ts`.
- **Menu item images:** update the `menuImages` mapping in `app/menu/page.tsx`. The current menu cards use Unsplash image URLs.
- **Home page hero slides:** edit the `slides` data in `app/components/site.tsx`.
- **Branch addresses and contact details:** edit `app/contact/page.tsx`; the shared footer is in `app/components/site.tsx`.
- **Typography, colors, layout, and breakpoints:** edit `app/globals.css`.
- **Page titles and descriptions:** edit the route’s `metadata` export or the shared metadata in `app/layout.tsx`.

The `main/` folder contains reference photos of the printed menu. These are source references and are not currently rendered as page images.

## Images and external services

Menu cards and featured food visuals currently reference images hosted by Unsplash. Those images require an internet connection to load. If replacing them with local images, place the files in `public/` and update the corresponding image paths.

The site currently provides phone and WhatsApp contact links; it does not include online ordering, payment processing, a database, or a content-management system.

## Production build and deployment

Check the production build locally:

```bash
npm run build
npm run start
```

The project can be deployed to a Next.js-compatible host such as [Vercel](https://vercel.com/). See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for deployment options and configuration details.
