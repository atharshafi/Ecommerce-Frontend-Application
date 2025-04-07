# 💼 E-Commerce Frontend

This is the **frontend** of a full-stack e-commerce application built using **React**, **Tailwind CSS**, and **React Router**. It connects to a FastAPI backend and allows users to register, login, browse products, manage cart, place orders, and view order history.

---

## 🚀 Features

- User Authentication (Register/Login)
- View Products & Add to Cart
- Checkout & Place Orders
- View Order History
- Responsive UI with Tailwind CSS
- Admin product management support (image URL based)

---

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── api/
│   │   └── api.js             # All API-related functions (can expand later)
│   ├── components/
│   │   ├── Navbar.jsx         # Top navigation bar
│   │   ├── ProductCard.jsx    # Component to show individual product
│   │   └── ProductList.js     # Component to render product grid
│   ├── pages/
│   │   ├── Cart.jsx           # Cart page
│   │   ├── Login.jsx          # Login page
│   │   ├── Orders.jsx         # Orders page
│   │   ├── Products.jsx       # Product listing page
│   │   └── Register.jsx       # Signup/Register page
│   ├── styles/
│   │   ├── App.css            # App-level styles
│   │   └── index.css          # Global styles
│   ├── App.jsx                # Root React component
│   ├── main.jsx               # ReactDOM entry point (modern entry)
│   └── index.js               # Optional: entry point if using CRA (React 17 style)



```

---

## 💠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/atharshafi/ecommerce-frontend.git
cd ecommerce-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

> Runs the app on [http://localhost:5173](http://localhost:5173) using Vite.

---

## 🔧 Environment Setup

Make sure your FastAPI backend is running on `http://127.0.0.1:8000`.

If needed, update the base URL in `src/api/api.js`:

```js
const API_BASE_URL = "http://127.0.0.1:8000";
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🧪 Planned Improvements

- ✅ Add Unit & Integration Tests (Jest + React Testing Library)
- 🖼️ Admin Panel for Adding Products with Images

---

## 🙇‍♂️ Author

**Athar Shafi**  
📍 Dubai, UAE  
🔗 [LinkedIn](https://www.linkedin.com/in/athar-shafi-3873a61a6)

## 📄 License

This project is licensed under the MIT License.
