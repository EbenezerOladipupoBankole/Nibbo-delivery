# Níbbo Delivery 🛵✨

A premium, localized delivery and marketplace platform for Abeokuta. Níbbo combines express logistics with a direct-from-market shopping experience, optimized for the WhatsApp era.

[![Website](https://img.shields.io/badge/Website-níbbodeliv.store-1B3B2B?style=for-the-badge&logo=googlechrome&logoColor=white)](https://níbbodeliv.store)

---

## 🚀 Key Features

### 🛒 Níbbo Market
A curated marketplace showcasing fresh produce and essentials from **Lafenwa**, **Kuto**, and **Panseke** markets. 
- **Direct Vendor Sourcing**: Browse items posted by local vendors.
- **Glassmorphism UI**: High-end, transparent design for a modern shopping feel.
- **Category Filtering**: Easily switch between Rice & Grains, Fresh Proteins, Tubers, and more.

### 🧺 Smart Basket & WhatsApp Checkout
- **Global Shopping Cart**: Add items as you browse and manage your basket from any page.
- **One-Click Ordering**: Automatically formats a professional itemized list and sends it directly to the Níbbo logistics team on WhatsApp.

### ⚡ Express Logistics
- **Three-Pillar Service Model**: Food & Groceries, Express Errands, and Corporate Logistics.
- **Animated Workflow**: Intersection-observed animations that introduce users to the delivery process.

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite (Fast & Modern)
- **Routing**: React Router 7 (Clean SPAs)
- **Styling**: Vanilla CSS with custom design tokens (Glassmorphism, High Contrast)
- **Deployment**: Custom GitHub Pages Pipeline (Windows Optimized)

---

## 📦 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📤 Deployment

Since this project uses a custom domain with special characters (Punycode), a standard `gh-pages` deployment might fail on Windows. We use a custom, robust script:

```bash
# Build and push to GitHub Pages
npm run deploy
```

> [!NOTE] 
> This command automatically generates a `404.html` to handle React Router paths and updates the `gh-pages` branch on GitHub.

---

## 🌐 Domain Configuration

- **Human Domain**: `níbbodeliv.store`
- **Punycode Name**: `xn--nbbodeliv-m5a.store`

The `CNAME` file in the `public` folder is configured with the Punycode version to ensure 100% browser compatibility across all global DNS servers.

---

## 📄 License
Custom built for Níbbo Delivery Service. All rights reserved © 2026.
