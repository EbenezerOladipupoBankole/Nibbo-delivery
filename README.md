# Níbbo - Delivery & Logistics Platform

A modern, production-ready React application for **Níbbo Logistics**, a super app for errands, logistics, and shopping serving Abeokuta, Nigeria.

## 🚀 Features

### Hero Section
- Location badge (🚀 Now Live in Abeokuta)
- Compelling headline and tagline
- "Errands & Logistics, Simplified."
- Direct call-to-action to get started

### Choose Your Path (Three User Types)
1. **Customer** 🛍️ - Send packages, book personal shoppers, order food and tech
2. **Rider** 🏍️ - Turn vehicles into income by delivering packages
3. **Vendor** 🏪 - Expand business reach across Abeokuta

### Get Started Form
- Collects: Name, Email, Phone, User Role
- Role selection dropdown (Customer/Rider/Vendor)
- Success notification on submission

### Additional Features
- Fixed header with smooth scroll navigation
- Mobile-responsive hamburger menu
- Scroll animations and hover effects
- SEO-optimized meta tags
- Modern gradient backgrounds

## 🎨 Design System

**Colors:**
- Primary: `#10B981` (Emerald Green)
- Secondary: `#FF6600` (Vibrant Orange)
- Dark: `#064E3B` (Deep Emerald)
- Light backgrounds with fresh, clean gradients

**Typography:**
- Font: Inter (Google Fonts)
- Modern, clean, professional

## 🛠️ Tech Stack

- **React 18** - Component-based UI
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styles with CSS variables
- **Vanilla JavaScript** - No heavy frameworks

## 📦 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or 5174 if 5173 is busy)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx/css       # Navigation with mobile menu
│   ├── Hero.jsx/css         # Hero section
│   ├── ChooseYourPath.jsx/css # Three user paths
│   ├── GetStarted.jsx/css   # Signup form
│   └── Footer.jsx/css       # Footer
├── App.jsx                   # Main component
├── App.css                   # Global utilities
├── index.css                 # CSS variables
└── main.jsx                  # React entry point
```

## ⚙️ Customization

### Modify Brand Colors
Edit `src/index.css`:
```css
:root {
  --primary: #10B981;
  --secondary: #FF6600;
  /* ... */
}
```

### Connect Waitlist to Backend
Update `src/components/Waitlist.jsx` in the `handleSubmit` function:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  // Add your API call here
  await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
}
```

## 🌐 Deployment

This is a static React app that can be deployed to:
- **Vercel** - `npm run build` then upload dist folder
- **Netlify** - Connect GitHub repo for automatic deploys
- **GitHub Pages** - Use `gh-pages` package
- **Any static hosting** - Deploy the `dist` folder after build

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 992px`
- Desktop: `> 992px`

## 📄 License

© 2026 Níbbo Logistics. All rights reserved.

---

**Built with ❤️ in React**
