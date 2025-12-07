# Food Brothers - Premium Burger Restaurant Website

A fully functional, production-ready restaurant ordering platform built for a high-end burger restaurant in Amsterdam. This project showcases a complete end-to-end food ordering experience with a stunning modern design, optimized for both desktop and mobile users.

**Live Demo:** [foodbrothers.loc-nguyen.com](https://foodbrothers.loc-nguyen.com/)

---

## Lighthouse Performance Scores

Achieving near-perfect scores across all metrics:

| Metric | Score |
|--------|:-----:|
| Performance | **95** |
| Accessibility | **96** |
| Best Practices | **96** |
| SEO | **100** |

---

## Project Overview

Food Brothers is a complete restaurant ordering solution designed for an upscale burger establishment. The website features a premium aesthetic with smooth animations, intuitive navigation, and a seamless ordering flow that takes customers from menu browsing to checkout in just a few taps.

### Production Ready

This website is **100% functional** and ready for deployment. The only missing component is payment gateway integration (Stripe, Mollie, or iDEAL). Once connected, this becomes a fully operational ordering system.

---

## Pages & Screens

### 1. Homepage
The landing page sets the premium tone with:
- **Hero Section** - Eye-catching headline with Google Reviews integration (4.8 stars, 1,522 reviews)
- **Featured Burgers** - Showcase of signature dishes with quick-add functionality
- **Homemade Sauces Section** - Highlighting artisanal house-made sauces
- **Fresh Ingredients Section** - Emphasizing quality and freshness
- **Full Menu Preview** - Complete menu with search and category filtering
- **Order Delivery Panel** - Live cart preview with order summary

### 2. Menu Page
A dedicated menu experience featuring:
- **13 Categories** - Grill Beef, Grill Chicken, Double Burgers, Vega, Fried Chicken, Fries, Loaded Fries, Chicken Sides, Buckets, Cold Drinks, Warm Drinks, and Sauces
- **50+ Menu Items** - Comprehensive menu with descriptions and dietary icons
- **Real-time Search** - Instant filtering across all menu items
- **Category Navigation** - Horizontal scrollable tabs with smooth animations
- **Quick Add to Cart** - One-tap ordering with quantity indicators

### 3. Product Customization Modal
For items with customization options:
- **Topping Selection** - 11+ toppings including premium options like truffle mayo and halal veal bacon
- **Quantity Selector** - Intuitive +/- controls
- **Live Price Calculation** - Real-time total updates as options are selected
- **Dietary Information** - Allergen and dietary icons (halal, gluten, egg, etc.)

### 4. Checkout Page
A complete checkout flow with:
- **Delivery/Pickup Toggle** - Choose between home delivery or store pickup
- **Address Form** - Full Dutch address entry (postal code, street, city, house number)
- **Personal Information** - Name, phone, email, company (optional), order notes
- **Delivery Time Selection** - Choose preferred time slot
- **Payment Method** - iDEAL and cash on delivery options
- **Discount Code Field** - Promo code support
- **Order Summary** - Complete breakdown with item details and toppings

### 5. About Us Page (Over Ons)
Brand storytelling featuring:
- **Company History** - "Since 2010" heritage story
- **Mission Statement** - Quality, freshness, and family values
- **Core Values** - Quality, Freshness, Halal, Family - displayed in cards
- **Call-to-Action** - Direct link to menu

### 6. Contact Page
Full contact functionality:
- **Contact Form** - Name, email, phone, subject, message fields
- **Business Information** - Address, phone, email with clickable links
- **Opening Hours** - Complete weekly schedule
- **Google Maps Integration** - Embedded interactive map

---

## Key Features

### Shopping Cart System
- **Persistent Cart** - Items saved across page navigation
- **Floating Cart Button** - Always-visible cart with item count and total
- **Slide-out Drawer** - Full cart management without leaving the page
- **Quantity Controls** - Increase, decrease, or remove items
- **Topping Details** - See customizations for each item

### Multi-Language Support
- **Dutch (NL)** - Native language for local customers
- **English (EN)** - For international visitors
- **Instant Switching** - No page reload required

### Responsive Design
- **Mobile-First** - Optimized for smartphone ordering
- **Tablet Support** - Beautiful on iPad and Android tablets
- **Desktop Experience** - Full-width layout with sidebar cart

### Accessibility (WCAG 2.1 Compliant)
- **ARIA Labels** - Screen reader support for all interactive elements
- **Keyboard Navigation** - Full keyboard accessibility
- **Color Contrast** - AA compliant color ratios
- **Focus Indicators** - Clear focus states for all controls

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| React | React 19 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI Primitives |
| State Management | Zustand |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Animations | Tailwind CSS Animate |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Menu Categories

| Category | Items | Price Range |
|----------|:-----:|-------------|
| Grill Beef Burgers | 8 | €12.50 - €26.00 |
| Grill Chicken Burgers | 7 | €12.50 - €15.00 |
| Double Grill Beef | 6 | €26.00 |
| Double Grill Chicken | 6 | €26.00 |
| Vega Burgers | 2 | €12.50 - €13.50 |
| Fried Chicken | 2 | €12.50 - €13.50 |
| Fresh Fries | 2 | €5.50 - €7.00 |
| Loaded Fries | 6 | €15.00 - €23.00 |
| Chicken Sides | 4 | €3.75 - €8.50 |
| Chicken Buckets | 2 | €17.50 - €23.00 |
| Cold Drinks | 6 | €3.00 - €3.75 |
| Warm Drinks | 5 | €2.80 - €3.50 |
| Sauces | 6 | €0.75 - €1.00 |

---

## What's Needed to Go Live

This project is **deployment-ready**. To make it a fully operational ordering system, you need:

1. **Payment Gateway Integration**
   - Stripe, Mollie, or iDEAL integration
   - Webhook handlers for payment confirmation

2. **Backend API** (Optional)
   - Order management system
   - Email notifications
   - Kitchen display integration

3. **Domain & Hosting**
   - Already deployed on Vercel
   - Custom domain configuration

---

## Getting Started

### Prerequisites
- Node.js 18.17+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/foodbrothers.git
cd foodbrothers

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── menu/              # Menu page
│   ├── checkout/          # Checkout flow
│   ├── contact/           # Contact page
│   └── over-ons/          # About us page
├── components/            # React components
│   ├── ui/               # Reusable UI (Button, Card, etc.)
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── hero-section.tsx  # Landing hero
│   ├── menu-section.tsx  # Menu with categories
│   ├── product-modal.tsx # Customization modal
│   ├── checkout-drawer.tsx # Cart drawer
│   └── floating-cart.tsx # Floating cart button
├── store/                 # Zustand stores
│   ├── cart-store.ts     # Shopping cart state
│   ├── checkout-store.ts # Checkout form state
│   └── language-store.ts # i18n state
├── data/                  # Static data
│   └── menu.json         # Full menu with 50+ items
└── lib/                   # Utilities
```

---

## Perfect For

- **Restaurant Owners** - Looking for a modern online ordering presence
- **Food Delivery Startups** - Template for food ordering platforms
- **Web Developers** - Reference for e-commerce/food ordering UX patterns
- **Agencies** - White-label solution for restaurant clients

---

## Contact

Interested in a similar website for your restaurant or business?

**Loc Nguyen** - [loc-nguyen.com](https://loc-nguyen.com)

---

*Built with Next.js and deployed on Vercel*
