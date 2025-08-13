# Les Sens de l'Harmonie - Website

A modern, SEO-optimized website for "Les Sens de l'Harmonie," a wellness business offering Reiki, Feng Shui, and Geobiology services in Troguéry, Bretagne, France.

## Features

- **Modern Design**: Clean, serene wellness aesthetic with soft earthy tones
- **Responsive**: Fully responsive design optimized for all devices
- **SEO Optimized**: Complete SEO setup with French keywords and structured data
- **Performance**: Optimized for Lighthouse scores 90+ (Performance, SEO, Accessibility)
- **Animations**: Smooth Framer Motion and GSAP animations
- **Contact System**: Functional contact form with validation
- **Accessibility**: WCAG 2.1 compliant design

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom wellness color palette
- **Animations**: Framer Motion + GSAP
- **Forms**: React Hook Form + Zod validation
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Playfair Display + Inter

## Pages

1. **Home** (`/`) - Hero, services overview, about, testimonials, CTA
2. **Reiki** (`/reiki`) - Complete Reiki information, benefits, pricing
3. **Feng Shui** (`/feng-shui`) - Tibetan Feng Shui details, elements, Bagua
4. **Geobiology** (`/geobiologie`) - Geobiology expertise, analysis process
5. **Contact** (`/contact`) - Contact info, pricing, form, map

## Services & Pricing

### Reiki Sessions
- Adults: 55€ (1h)
- Teens (12-17): 50€ (45min)
- Children/Babies (0-11): 45€ (30min)
- Remote sessions: 50€ (45min)

### Feng Shui & Geobiology
- Custom quotes based on surface area and complexity
- Free initial consultation

## Business Information

**Les Sens de l'Harmonie**
- Address: 6, Lotissement des 4 Vents, 22450 Troguéry, France
- Phone: 06 75 44 55 82
- Email: lessensdelharmonie@gmail.com
- Hours: Monday-Saturday, 9h00-19h00 (by appointment only)

## Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The static site will be generated in the `out` directory, ready for deployment to any static hosting service.

## SEO Features

- French language optimization
- Structured data (LocalBusiness schema)
- Open Graph and Twitter Card meta tags
- Automatic sitemap and robots.txt generation
- Semantic HTML5 markup
- Optimized images with lazy loading
- Fast loading times with Next.js optimization

## Key SEO Keywords

- Reiki Troguéry
- Feng Shui Bretagne
- Géobiologie maison
- Soins énergétiques France
- Wellness Côtes d'Armor

## Deployment

This site is configured for static export and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

The `next.config.js` is already configured for static export.

## Customization

### Colors
The wellness color palette is defined in `tailwind.config.ts`:
- Sage green variations (primary)
- Warm gold (accent)
- Cream (background)

### Fonts
- Headings: Playfair Display (serif)
- Body text: Inter (sans-serif)

### Animations
- Framer Motion for component animations
- GSAP for scroll-triggered effects and complex animations

## Contact Form

The contact form is fully functional with:
- Client-side validation (Zod schema)
- Server-side API route
- Toast notifications
- Responsive design

Form submissions are currently logged to console. In production, integrate with:
- Email service (SendGrid, etc.)
- Database storage
- CRM system

## Accessibility

The site follows WCAG 2.1 guidelines:
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation
- Sufficient color contrast
- Focus indicators
- Semantic HTML

## Performance Optimizations

- Next.js Image optimization
- Code splitting
- Lazy loading
- Optimized fonts loading
- Minimal bundle size
- Fast loading animations

## Browser Support

Supports all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is created for "Les Sens de l'Harmonie" wellness business.

## Support

For technical support or modifications, please contact the development team.