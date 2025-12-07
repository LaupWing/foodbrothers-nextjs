# Food Brothers

A modern, high-performance restaurant ordering web application built with Next.js 16 and React 19. Food Brothers is a fictional burger restaurant based in Amsterdam, showcasing a beautiful UI with a seamless ordering experience.

**Live Demo:** [foodbrothers.loc-nguyen.com](https://foodbrothers.loc-nguyen.com/)

## Lighthouse Scores

This project achieves excellent Lighthouse scores across all metrics:

| Metric | Score |
|--------|-------|
| Performance | 95 |
| Accessibility | 96+ |
| Best Practices | 96 |
| SEO | 100 |

## Features

- **Responsive Design** - Fully responsive layout optimized for mobile, tablet, and desktop
- **Multi-language Support** - Available in Dutch (NL) and English (EN)
- **Shopping Cart** - Full-featured cart with add, remove, and quantity management
- **Product Customization** - Customize menu items with toppings and extras
- **Checkout Flow** - Complete checkout experience with delivery options
- **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation
- **Fast Performance** - Optimized for Core Web Vitals (LCP, FCP, CLS, TBT)

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **React:** React 19
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Forms:** React Hook Form + Zod validation
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** Tailwind CSS Animate
- **Analytics:** Vercel Analytics

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── menu/              # Menu page
│   ├── checkout/          # Checkout page
│   ├── contact/           # Contact page
│   └── over-ons/          # About us page
├── components/            # React components
│   ├── ui/               # Reusable UI components (Button, Card, etc.)
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── hero-section.tsx  # Landing hero
│   ├── menu-section.tsx  # Menu listing
│   └── ...
├── store/                 # Zustand state stores
│   ├── cart-store.ts     # Shopping cart state
│   ├── checkout-store.ts # Checkout form state
│   └── language-store.ts # i18n state
├── data/                  # Static data (menu items)
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/foodbrothers.git
   cd foodbrothers
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |

## Accessibility

This project follows WCAG 2.1 guidelines and includes:

- Proper semantic HTML structure
- ARIA labels for all interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Screen reader friendly content
- Focus indicators for interactive elements

## Performance Optimizations

- Static page generation where possible
- Optimized images with Next.js Image component
- Minimal JavaScript bundle size
- Efficient CSS with Tailwind
- Lazy loading for off-screen content

## License

This project is for demonstration purposes only. All branding and images are fictional.

---

Built with Next.js and deployed on Vercel.
