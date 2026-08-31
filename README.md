# Space Commerce

An e-commerce application that makes shopping easy for you. Built with Next.js, React, and Tailwind CSS.

## Features

- **Product discovery** — browse and search products, brands, and categories
- **Search** — real-time search bar with accessible, responsive form
- **Authentication** — login, register, and splash screens
- **Cart & Wishlist** — manage items you intend to buy or save for later
- **Responsive design** — mobile-first layout with bottom navigation
- **Typography** — Poppins font via `next/font`

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com) 4
- [ESLint](https://eslint.org) with `eslint-config-next`
- [pnpm](https://pnpm.io) as the package manager

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

| Script      | Description                  |
|-------------|------------------------------|
| `dev`       | Start the Next.js dev server |
| `build`     | Build the production app     |
| `start`     | Start the production server  |
| `lint`      | Run ESLint                   |

## Project Structure

```
.
├── app/                    # App Router pages and layout
│   ├── (auth)/             # Login, register, splash routes
│   ├── account/            # Account page
│   ├── cart/               # Shopping cart
│   ├── categories/         # Product categories
│   ├── wishlist/           # Saved items
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Home / store page
├── components/             # Shared UI components
│   ├── bottom-navigation.tsx
│   ├── icons.tsx
│   ├── search-bar.tsx
│   ├── store-header.tsx
│   └── store-page.tsx
├── public/                 # Static assets
└── styles/                 # Global CSS
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Next.js Learn](https://nextjs.org/learn) - an interactive Next.js tutorial
