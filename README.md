# 🚀 Express.js Product CRUD API

A simple Express.js CRUD API using **in-memory array** (no DB).  
Includes **Jest + Supertest tests** and **GitHub Actions CI pipeline**.

---

## 📦 Install

```bash
npm install
npm run dev
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | /api/products | List all products |
| POST | /api/products | Create product |
| GET | /api/products/:id | Get product |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |

## 🧪 Run tests
```bash
npm test
```

## ⚙️ Environment

Create .env:

```
PORT=5000
```
