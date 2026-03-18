<h1 align="center">AI-Based Transaction Monitoring & Fraud Detection System</h1>

<p align="center">
  A full-stack MERN application for monitoring financial transactions, detecting suspicious activity, and providing an interactive dashboard for fraud analysis.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Framework-Express-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/API-REST-orange?style=for-the-badge" />
</p>

---

## 📌 Project Overview

The **AI-Based Transaction Monitoring & Fraud Detection System** is a full-stack web application built using the **MERN stack**. It allows users to manage financial transactions and automatically flags suspicious transactions using fraud detection rules.

The system provides a user-friendly dashboard with features like:

- Adding, editing, and deleting transactions
- Fraud detection for risky transactions
- Fraud transaction highlighting
- Dashboard summary cards
- Filtering by transaction type and category
- Searching transactions by category
- Real-time UI refresh after actions

This project simulates a simplified transaction monitoring solution inspired by real-world banking and financial systems.

---

## 🚀 Features

### ✅ Core Features
- Add new transactions
- Update existing transactions
- Delete transactions
- View all transactions
- View fraud-only transactions

### ✅ Fraud Detection
- Transactions are flagged based on rule-based logic
- Fraud transactions are highlighted in the dashboard
- Separate fraud transactions section for monitoring

### ✅ Dashboard Features
- Total transactions count
- Total fraud transactions count
- Total debit amount
- Total credit amount

### ✅ Filtering & Search
- Filter by transaction type
- Filter by category
- Search by category name

### ✅ User Experience
- Auto-refresh after add/edit/delete
- Clean and responsive UI
- Easy-to-use transaction management system

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Tools Used
- Postman
- Git
- GitHub
- VS Code

---

## 📂 Project Structure

```bash
transaction-monitoring-system/
│
├── backend/
│   ├── models/
│   │   └── Transaction.js
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TransactionForm.js
│   │   │   ├── TransactionList.js
│   │   │   ├── FraudList.js
│   │   │   └── DashboardCards.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│
├── README.md
└── .gitignore
