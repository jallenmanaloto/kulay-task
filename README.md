# React Native Shopping Cart App

A simple shopping cart application built with **React Native**, **Expo**, and **NativeWind (TailwindCSS)**. Demonstrates product listing, cart management, and voucher discounts using React Context.

---

 **Download APK**  
[➡️ Download the Android APK here](https://github.com/jallenmanaloto/kulay-task/releases/tag/v1.0.0)

---

## Features

- Browse products with name, description, and price (PHP currency).
- Add products to the cart.
- Adjust quantities with `+` / `-` buttons.
- Remove items from the cart using a trash icon.
- Apply voucher codes for discounts.
- Real-time total and discounted price calculation.
- Toast notifications when products are added to the cart.

---

## Tech Stack

- React Native + Expo
- TypeScript
- NativeWind (TailwindCSS for styling)
- React Context for cart state and actions
- React Native Toast for notifications
- Expo Router for navigation

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/shopping-cart-app.git
cd shopping-cart-app
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the Expo development server:
```bash
npm start
# or
yarn start
```

4. Open the app on your simulator or physical device using Expo Go.

## Project Structure
```bash
app/
 ├─ _layout.tsx          # Root layout, CartProvider and Toast
 ├─ index.tsx            # Product list page
 ├─ cart.tsx             # Cart page
components/
└─ CartIcon.tsx          # Cart icon
└─ CheckoutItem.tsx      # Individual product on checkout
└─ ProductCard.tsx       # Individual product card
context/
└─ CartContext.tsx       # Cart state and actions
lib/
└─ types.ts              # Type definitions
```

## Usage
- Browse the product list on the index page.
- Add products to the cart by clicking Add to Cart.
- View the cart using the cart icon.
- Adjust item quantities or remove items in the cart.
- Apply vouchers (e.g., `discount10`) to see discounted totals.
