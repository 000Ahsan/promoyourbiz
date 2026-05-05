# Promo Your Biz - Eleventy Static Site

This is the Eleventy (11ty) static site version of the Promo Your Biz marketing agency website, converted from Next.js.

## Project Structure

```
eleventy/
├── .eleventy.js              # Eleventy configuration
├── package.json             # Dependencies and scripts
├── README.md               # This file
├── _includes/              # Reusable components
│   ├── layouts/
│   │   └── base.njk       # Base layout template
│   ├── header.njk         # Header component
│   ├── footer.njk         # Footer component
│   ├── menu.njk           # Mobile menu component
│   ├── services.njk       # Services section
│   ├── testimonials.njk   # Testimonials section
│   └── our-partners.njk   # Partners section
├── _data/                 # Data files
│   └── portfolio.json     # Portfolio data
├── pages/                 # Page templates
│   ├── index.njk         # Home page
│   ├── about.njk         # About page
│   ├── services.njk      # Services page
│   ├── portfolio.njk     # Portfolio page
│   └── contact.njk       # Contact page
└── public/               # Static assets (copied from original)
    ├── assets/          # Images, CSS, JS
    └── common/          # Shared resources
```

## Conversion Notes

### What Was Converted

- **Next.js Pages → Eleventy Templates**: All pages converted from React/TSX to Nunjucks (.njk) templates
- **React Components → Eleventy Includes**: Header, Footer, Menu, Services, Testimonials, and Partners converted to reusable partials
- **Data Extraction**: Portfolio data extracted from TypeScript to JSON in `_data/portfolio.json`
- **Routing**: Next.js file-based routing converted to Eleventy's static file structure
- **Links**: `next/link` replaced with standard `<a>` tags
- **Images**: `next/image` replaced with standard `<img>` tags
- **Head/Meta**: Next.js metadata converted to static meta tags in layout

### What Cannot Be Directly Converted

1. **React Hooks & State**: 
   - The OnboardingModal component used `useState` for modal open/close
   - **Solution**: Added inline `onclick` alert as placeholder. For full functionality, implement with vanilla JS or a lightweight library like Alpine.js

2. **API Routes**:
   - Next.js API route at `/api/contact` used nodemailer for email sending
   - **Solution**: Replaced with Formspree form integration. You need to:
     - Sign up at https://formspree.io/
     - Create a form
     - Replace `YOUR_FORMSPREE_ID` in `pages/contact.njk` with your actual form ID

3. **usePathname Hook**:
   - Header component used `usePathname` for active link highlighting
   - **Solution**: Implemented using Eleventy's `page.url` variable with Nunjucks conditionals

4. **Client-Side Interactivity**:
   - Swiper carousels, GSAP animations, menu toggles rely on existing JavaScript
   - **Solution**: All existing JS files are preserved and loaded via the layout

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   cd eleventy
   npm install
   ```

2. **Configure Contact Form**:
   - Sign up at https://formspree.io/
   - Create a new form
   - Copy your form ID
   - Open `pages/contact.njk`
   - Replace `YOUR_FORMSPREE_ID` with your actual form ID in the form action URL

3. **Run Development Server**:
   ```bash
   npm start
   ```
   This will start Eleventy's dev server at http://localhost:8080

4. **Build for Production**:
   ```bash
   npm run build
   ```
   Output will be in the `_site` directory

## Custom Filters

The `.eleventy.js` config includes custom filters:
- `year()`: Returns current year for copyright
- `shuffle(array)`: Randomizes array order (used for portfolio)
- `slice(array, start, end)`: Slices array (used for portfolio display)

## Styling

All existing CSS and assets are preserved:
- Tailwind CSS classes are maintained
- Custom CSS files in `/public/assets/css/` and `/public/common/css/`
- All images and videos copied from original `/public` directory

## Deployment

The `_site` folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## Notes

- The Eleventy site is a pure static site - no server-side rendering
- All JavaScript animations and interactions from the original site are preserved
- The site structure mirrors the original Next.js routing
- Form submission now uses Formspree instead of a custom API route
