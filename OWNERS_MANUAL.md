# Níbbo Delivery: Owner's Manual 📘

Welcome to the controls of your new website! This guide helps you manage the daily operations of [níbbodeliv.store](https://níbbodeliv.store).

---

## 🏬 Managing the Marketplace

The Marketplace is currently driven by a data array in the code. To change products or vendors:

1.  Open `src/pages/Marketplace.jsx`.
2.  Locate the `products` list.
3.  **To change a price**: Update the `price` field (e.g., `'₦8,500'`).
4.  **To add an item**: Copy an existing item block and update the `name`, `vendor`, and `image` link.
5.  **Images**: Use high-quality links from sites like Unsplash or your own hosted images.

---

## 📲 How the WhatsApp Checkout Works

When a customer clicks "Checkout on WhatsApp":
1.  The site reads the items in their basket.
2.  It formats them into a professional list.
3.  It opens WhatsApp Web or the WhatsApp App with the message pre-typed.
4.  The customer just has to hit **Send**.

> [!IMPORTANT]
> **To change the receiving number**: 
> Open `src/context/CartContext.jsx` and update the phone number in the `whatsappCheckout` function (currently set to your business line).

---

## 📈 Growing the Platform

The site is built to grow. Here are a few things you can do next:
- **Registration Form**: The "Join as Vendor" button can be linked to a Google Form to collect vendor details.
- **Promo Banners**: You can add temporary banners to the Hero section for holidays or special market days.

---

## 🌍 Domain & HTTPS Settings

**GitHub Pages & Hostinger**:
- **HTTPS**: Once the DNS check turns green in GitHub Settings, click **"Enforce HTTPS"**. This gives your site the padlock icon.
- **Punycode**: If you ever see `xn--...` in a settings box, don't worry! That is just the technical version of your accented name (`níbbo`).

---

## 🛠️ Need a quick update?

If you make a change to the text or prices:
1.  Run `npm run deploy` in your terminal.
2.  Wait 1 minute.
3.  The live site will update automatically.

---

*Success to Níbbo Delivery! 🛵💨*
