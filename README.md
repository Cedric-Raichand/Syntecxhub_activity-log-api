# 📋 Activity Log / Audit Trail API

A RESTful API built with Node.js, Express, and MongoDB that records sensitive user activities such as updates and deletions into an audit trail system.

The API supports authentication, admin-only log access, filtering, and date-based querying.

---

## 🚀 Features

- User registration and login
- JWT authentication
- Secure password hashing with bcrypt
- Activity/Audit logging
- Track sensitive user actions
- Store logs in MongoDB
- Admin-only log access
- Filter logs by:
  - action
  - user
  - date range
- Link logs to affected resources
- Protected routes with middleware

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

---

## 📁 Project Structure

```text
activity-log-api/
│── server.js
│── middleware/
│   ├── authMiddleware.js
│   └── adminMiddleware.js
│── models/
│   ├── User.js
│   └── AuditLog.js
│── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   └── logRoutes.js
│── .env
│── package.json
```

---

## 📡 API Endpoints

---

### 🔐 Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

---

### 👤 User Actions

#### Update User

```http
PUT /api/users/:id
```

#### Delete User

```http
DELETE /api/users/:id
```

---

### 📋 Audit Logs

#### Get All Logs

```http
GET /api/logs
```

#### Filter by Action

```http
GET /api/logs?action=Deleted user
```

#### Filter by User

```http
GET /api/logs?user=admin@gmail.com
```

#### Filter by Date Range

```http
GET /api/logs?startDate=2026-05-01&endDate=2026-05-30
```

---

## 🔐 Authorization

Protected routes require JWT token:

```text
Authorization: Bearer YOUR_TOKEN
```

---

## 🧪 Testing

Use Postman or similar API testing tools.

---

## 🧠 Concepts Demonstrated

- JWT Authentication
- Role-Based Authorization
- Middleware Protection
- MongoDB Audit Logging
- REST API Design
- Query Filtering
- Date Range Queries
- Sensitive Action Tracking

---

## 👨‍💻 Author

Built as part of Backend Development Internship tasks.

---

## 📜 License

For educational purposes only.
