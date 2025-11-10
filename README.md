# Full-Stack Food Delivery Website

This is a complete MERN stack (MongoDB, Express, React, Node.js) project for a food delivery service. It features a full authentication system and a clean, modern frontend built with React and Vite.

## 🚀 Key Features

* **Full Authentication:** User signup, login, and logout.
* **JWT Security:** Backend routes are protected using JSON Web Tokens.
* **Password Hashing:** Passwords are securely hashed using `bcryptjs`.
* **MERN Stack:** Utilizes a modern, full-stack JavaScript-based architecture.
* **Global State Management:** Uses React Context for managing auth state.

---

## 🛠️ Technologies Used

### Backend

* **Node.js:** Server-side runtime
* **Express:** Web framework
* **MongoDB:** NoSQL database
* **Mongoose:** Object Data Modeler (ODM)
* **JSON Web Token (JWT):** For authorization
* **bcryptjs:** For password hashing
* **dotenv:** For environment variables
* **cors:** For cross-origin requests

### Frontend

* **React:** UI library
* **Vite:** Frontend build tool
* **React Router:** For client-side routing
* **Axios:** For making API requests
* **React Context:** For global state management
* **react-hot-toast:** For notifications

---

## 📂 Project Structure
fullstack-food-app/ │ ├── backend/ │ ├── config/ │ ├── controllers/ │ ├── middleware/ │ ├── models/ │ ├── routes/ │ ├── utils/ │ ├── .env │ ├── package.json │ └── server.js │ ├── frontend/ │ ├── public/ │ ├── src/ │ │ ├── components/ │ │ ├── context/ │ │ ├── pages/ │ │ └── services/ │ ├── package.json │ └── vite.config.js │ ├── .gitignore └── README.md

---

## 🏁 Getting Started

### Prerequisites

* Node.js (v18 or later)
* MongoDB Atlas Account (or a local MongoDB instance)

### 1. Clone the Repository

```bash
git clone [https://github.com/siddoboi/IFSD_food_delivery_website.git](https://github.com/siddoboi/IFSD_food_delivery_website.git)
cd IFSD_food_delivery_website
cd backend
npm install
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
npm run dev

cd frontend
npm install
npm run dev
---

Once you've saved this file, your project structure is 100% complete!

We've finished all the files you listed. We could now create the `ProtectedRoute.jsx` component, or start building the "Restaurant" features. What would you like to do?
