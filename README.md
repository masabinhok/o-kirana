
---

# oKIRANA

**oKIRANA** is a small-scale e-commerce web application designed for a local shop outside my house, built as a practice project. The platform allows customers to browse and order products, with seamless customer-client communication features, including video chat and different interfaces for customers and sellers.

## Features

- **Customer & Seller Interfaces**: 
  - Separate, user-friendly dashboards for both customers and sellers.
- **User Authentication**:
  - Secure login for customers and sellers.
  - Role-based login for customers and sellers with dedicated login pages.
- **Customer-Client Communication**:
  - In-app messaging and video chat to enhance the shopping experience.
- **Product Ordering**:
  - Customers can browse the shop and place orders for available items.
- **Payment Integration**:
  - Integrated payment gateway to handle secure transactions.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT for user authentication
- **Real-time Communication**: WebRTC (for video chat) and WebSockets
- **Payment Integration**: TBD (e.g., Stripe, PayPal)

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install` (for both frontend and backend).
3. Create a `.env` file with necessary configurations (e.g., MongoDB URI, JWT Secret, etc.).
4. Run the app locally: 
   - Backend: `npm run server`
   - Frontend: `npm start`
5. Visit `localhost:3000` to see the project in action.

---
