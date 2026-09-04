# 🛍️ Simple Store

A modern, responsive e-commerce web application built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Zustand** for state management. The app fetches real-time product data from DummyJSON, features dynamic product details, an interactive shopping cart, and theme switching (Light / Dark mode).

---
[DEMO](https://simple-store-sooty-eight.vercel.app/)
<img width="1884" height="912" alt="Image" src="https://github.com/user-attachments/assets/c5795111-b5fb-42d5-af36-7de0758716e4" />

<img width="1789" height="879" alt="Image" src="https://github.com/user-attachments/assets/4d4c1e29-bab1-447d-8365-d982051bba44" />

<img width="1894" height="852" alt="Image" src="https://github.com/user-attachments/assets/776484e6-88c8-4668-b109-28aab4361748" />

## ✨ Features

- ⚡ **Next.js App Router**: Built using the modern Next.js App Router architecture.
- 📦 **Dynamic Product Catalog**: Server-side data fetching directly from [DummyJSON](https://dummyjson.com/products).
- 🔍 **Product Details (`/[slug]`)**: Dedicated page for viewing detailed descriptions, images, pricing, and ratings.
- 🛒 **Shopping Cart with Zustand**:
  - Add items to cart with automatic count increments.
  - Update quantities or remove items dynamically.
  - Real-time order summary calculation (subtotal, shipping, and total).
- 🌓 **Dark & Light Mode**: Seamless theme toggling powered by `next-themes` and Tailwind CSS.
- 🎨 **Modern UI & Responsive Design**: Styled with Tailwind CSS v4 and `lucide-react` icons.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API:** [DummyJSON API](https://dummyjson.com/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17 or higher recommended) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/elyasforghani/simple-store.git
   cd simple-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📁 Project Structure

```text
simple-store/
├── public/                 # Static assets
├── src/
│   └── app/
│       ├── [slug]/         # Dynamic product detail page
│       │   └── page.jsx
│       ├── cart/           # Shopping cart page
│       │   └── page.jsx
│       ├── components/     # Reusable UI components
│       │   ├── Fullstory.jsx
│       │   ├── ShortStory.jsx
│       │   ├── theme-provider.jsx
│       │   └── theme-toggle.jsx
│       ├── store/          # Zustand global store
│       │   └── Store.jsx
│       ├── globals.css     # Global styles & Tailwind setup
│       ├── layout.js       # Root layout & theme wrapper
│       └── page.jsx        # Homepage & product catalog
├── jsconfig.json           # Path aliases configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies and scripts
└── postcss.config.mjs      # PostCSS configuration
```

---

## 👨‍💻 Author

**Elyas Forghani**

- Website: [elyasforghani.com](https://elyasforghani.com)
- GitHub: [@elyasforghani](https://github.com/elyasforghani)
- LinkedIn: [Elyas Forghani](https://www.linkedin.com/in/elyas-forghani-b4746b263/)
- Instagram: [@elyasforghani.dev](https://www.instagram.com/elyasforghani.dev)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
