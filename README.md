# 🚀 TaskForge – Role-Based Assignment Management System

> A secure, production-ready **Role-Based Assignment Management System** built with **Node.js, Express.js, MongoDB, and JWT Authentication**, designed to streamline task assignment, employee management, and team collaboration through enterprise-level Role-Based Access Control (RBAC).

## 🛠 Tech Stack

<h2 align="center">🛠 Tech Stack</h2>

<p align="center">
<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,npm,git,javascript,jwt,github,vscode,postman&theme=dark" />

  
</p>

---

# 📌 Project Overview

TaskForge is an enterprise-level backend application developed using **Node.js**, **Express.js**, and **MongoDB** that enables organizations to efficiently manage employees, managers, and task assignments.

The application follows **Role-Based Access Control (RBAC)** to ensure that every user only has access to the resources and actions permitted by their role.

The project demonstrates real-world backend architecture including authentication, authorization, task management, secure API development, email verification, and file uploads.

---

# 🚀 Business Problem

Imagine a software company with multiple departments and employees.

Without a centralized task management system:

- Managers struggle to assign work efficiently.
- Employees lose track of assigned tasks.
- Admins cannot monitor organizational progress.
- Task ownership becomes unclear.
- Deadlines are missed due to poor communication.

TaskForge solves these challenges by providing a secure role-based platform where managers assign tasks, employees update progress, and administrators oversee the entire workflow.

---

# 👥 User Roles

The application supports three user roles.

| Role | Permissions |
|------|-------------|
| 👑 Admin | Full control over users, managers, employees, and tasks |
| 👨‍💼 Manager | Create, assign, and monitor tasks |
| 👨‍💻 Employee | View assigned tasks and update progress |

---

# ✨ Key Features

## 🔐 Authentication

- JWT Authentication
- Password Hashing (bcrypt)
- Secure Login
- Email Verification
- Protected Routes
- Role-Based Authorization

---

## 👑 Admin Module

The Admin can

- Create Managers
- Create Employees
- View All Users
- Update User Information
- Delete Users
- View All Tasks
- Manage Organization

---

## 👨‍💼 Manager Module

Managers can

- Create Tasks
- Assign Tasks
- Set Priority
- Set Due Dates
- Update Task Details
- Monitor Employee Progress

---

## 👨‍💻 Employee Module

Employees can

- Login Securely
- View Assigned Tasks
- Update Task Progress
- Upload Task Attachments
- Mark Tasks as Completed

---

## 📦 Task Management

Each Task contains

- Title
- Description
- Assigned By
- Assigned To
- Priority
- Due Date
- Status
- Attachments

Task Status

- Pending
- In Progress
- Completed
- Rejected

Priority Levels

- Low
- Medium
- High
- Urgent

---

## 📁 File Upload

Employees can upload task-related documents.

Uses

- Multer
- Cloudinary

---

## 📧 Email Verification

When a user registers

✔ Verification email is sent

✔ Account is activated after verification

---

# 🔄 Workflow

```
                👑 Admin
                    │
        Creates Managers & Employees
                    │
                    ▼
              👨‍💼 Manager
                    │
          Creates & Assigns Tasks
                    │
                    ▼
             👨‍💻 Employee
                    │
        Updates Progress & Uploads Files
                    │
                    ▼
            👑 Admin Monitors Progress
```

---

# 🏗 Database Design

Collections

- Users
- Tasks

Relationships

```
Admin
   │
Creates
   │
Manager
   │
Assigns
   │
Task
   │
Assigned To
   │
Employee
```

---

# 🔐 Authentication Flow

```
Register
      │
      ▼
Email Verification
      │
      ▼
Login
      │
      ▼
JWT Token Generated
      │
      ▼
Protected Routes
      │
      ▼
Role Verification
      │
      ▼
Access Granted
```

---

# 🛠 Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- bcryptjs

### File Upload

- Multer
- Cloudinary

### Email

- Nodemailer

### Security

- CORS
- dotenv

### API Testing

- Postman

---

# 📂 Project Structure

```
app
│
├── config
│   ├── db.js
│   ├── cloudinary.js
│   └── emailVerify.js
│
├── controller
│   ├── auth.controller.js
│   ├── task.controller.js
│   └── user.controller.js
│
├── middleware
│   ├── auth.js
│   ├── allowRoles.js
│   └── fileUploades.js
│
├── model
│   ├── userModel.js
│   └── task.model.js
│
├── routes
│   ├── auth.routes.js
│   ├── user.routes.js
│   ├── task.routes.js
│   └── index.js
│
├── utils
│   ├── sendEmail.js
│   └── httpStatusCode.js
│
├── app.js
│
public/
upload/
views/

.env
package.json
```

---

# 📌 API Modules

## 🔐 Authentication

- Register User
- Login
- Verify Email

---

## 👤 User

- Create Manager
- Create Employee
- Get Users
- Update User
- Delete User

---

## 📦 Task

- Create Task
- Assign Task
- Update Task
- Delete Task
- Get Task Details
- Update Task Status

---

# 📬 Postman Collection

A complete Postman collection is included for testing all APIs.

```
Postman-Response/
```

---

# ▶️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_jwt_secret

JWT_REFRESH_SECRET=your_refresh_secret

EMAIL=your_email

EMAIL_PASSWORD=your_email_password

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

Start the server

```bash
npm run dev
```

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Role-Based Authorization (RBAC)
- Protected APIs
- Environment Variables
- Email Verification
- Secure File Upload
- Cloudinary Integration

---

# 💡 Skills Demonstrated

- REST API Development
- Authentication & Authorization
- JWT Authentication
- RBAC (Role-Based Access Control)
- MongoDB Relationships
- CRUD Operations
- MVC Architecture
- Email Verification
- File Upload
- Cloudinary Integration
- Middleware Development
- Express.js Routing
- Production Folder Structure
- Environment Variable Management

---

# 🚀 Future Improvements

- Refresh Token Rotation
- Dashboard Analytics
- Assignment History
- Search & Filtering
- Pagination
- Redis Caching
- Swagger API Documentation
- Jest Testing
- Docker Deployment
- CI/CD Pipeline
- WebSocket Notifications
- Team Chat
- Calendar Integration

---

# 📖 Learning Outcomes

Building TaskForge helped me understand

- Enterprise Backend Architecture
- Authentication & Authorization
- Role-Based Access Control
- Express Middleware
- MongoDB Relationships
- REST API Development
- Email Verification
- File Upload Handling
- Secure API Design
- Real-world Workflow Management

---

# 👨‍💻 Author

**Srinu**

Backend Developer

### 💻 Tech Stack

Node.js • Express.js • MongoDB • JavaScript • REST APIs

If you found this project helpful, don't forget to ⭐ star the repository.

---
