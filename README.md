[<div align="center">

# 🚀 TaskForge
### Enterprise Role-Based Assignment Management System (RBAC)

<img src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=600&size=22&pause=1000&color=0EA5E9&center=true&vCenter=true&width=600&lines=Production+Ready+Backend+Project;Node.js+%7C+Express.js+%7C+MongoDB;JWT+Authentication+%7C+RBAC;RESTful+API+Architecture" />

---

A **production-level backend application** built with **Node.js**, **Express.js**, and **MongoDB** that enables organizations to securely manage employees, managers, and task assignments using **Role-Based Access Control (RBAC)**.

Designed following enterprise backend architecture with secure authentication, authorization, file uploads, and scalable REST APIs.

</div>

---

## 🚀 Built With

<p align="center">

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,js,npm,git,github,vscode,postman" /><br><br>

<img src="https://img.shields.io/badge/JWT-Authentication-black?style=for-the-badge&logo=jsonwebtokens"/>

<img src="https://img.shields.io/badge/MVC-Architecture-success?style=for-the-badge"/>

<img src="https://img.shields.io/badge/RBAC-Authorization-red?style=for-the-badge"/>

<img src="https://img.shields.io/badge/Multer-File%20Upload-orange?style=for-the-badge"/>

<img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white"/>

<img src="https://img.shields.io/badge/Nodemailer-Email-green?style=for-the-badge"/>

<img src="https://img.shields.io/badge/REST-API-blue?style=for-the-badge"/>

</p>

# 📖 Table of Contents

- Project Overview
- Features
- Tech Stack
- System Workflow
- Folder Structure
- Database Models
- Authentication Flow
- API Endpoints
- Installation
- Environment Variables
- Security Features
- Future Improvements
- Author

---

# 📌 Project Overview

TaskForge is an enterprise-grade Assignment Management System where different users have different permissions according to their role.

The application allows organizations to securely manage users and assign work while maintaining proper authorization and authentication.

There are **three different roles**:

### 👑 Admin
- Create Managers
- Create Employees
- View all users
- Manage users
- Delete users
- View every task

### 👨‍💼 Manager
- Create Tasks
- Assign Tasks
- Update Task Details
- Track Employee Progress

### 👨‍💻 Employee
- Login
- View Assigned Tasks
- Update Task Status
- Upload Task Files

---

# ✨ Features

## Authentication

- JWT Authentication
- Secure Password Hashing
- Login
- Register
- Email Verification
- Protected Routes

---

## Authorization (RBAC)

Only authorized users can access specific APIs.

Example

```
Admin
    ↓
Create Manager

Manager
    ↓
Assign Task

Employee
    ↓
Update Task Status
```

---

## User Management

✔ Register Users

✔ Login

✔ Update Profile

✔ Soft Delete Users

✔ Role Management

✔ User Status Management

---

## Task Management

- Create Tasks
- Update Tasks
- Delete Tasks
- Assign Employees
- Due Date
- Priority
- Status Tracking

Task Status

- Pending
- In Progress
- Completed
- Rejected

Priority

- Low
- Medium
- High
- Urgent

---

## File Upload

Employees can upload files related to assigned tasks.

Uses

- Multer
- Cloudinary

---

## Email Verification

Users verify their email before accessing protected resources.

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

### Security

- CORS
- dotenv

### API Testing

- Postman

---

# 🧠 System Workflow

```
                    Admin
                      │
          ┌───────────┴────────────┐
          │                        │
     Create Manager         Create Employee
          │
          ▼
      Manager Login
          │
          ▼
      Create Task
          │
          ▼
    Assign to Employee
          │
          ▼
     Employee Login
          │
          ▼
     Update Progress
          │
          ▼
     Upload Attachment
          │
          ▼
     Complete Task
```

---

# 📂 Folder Structure

```text
app/
│
├── config/
│   ├── cloudinary.js
│   ├── db.js
│   └── emailVerify.js
│
├── controller/
│   ├── auth.controller.js
│   ├── task.controller.js
│   └── user.controller.js
│
├── middleware/
│   ├── allowRoles.js
│   ├── auth.js
│   └── fileUploades.js
│
├── model/
│   ├── task.model.js
│   └── userModel.js
│
├── routes/
│   ├── auth.routes.js
│   ├── task.routes.js
│   ├── user.routes.js
│   └── index.js
│
├── utils/
│   ├── httpStatusCode.js
│   └── sendEmail.js
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

# 📁 Folder Explanation

## 📂 config

Contains all application configuration files.

| File | Purpose |
|------|----------|
| db.js | MongoDB Connection |
| cloudinary.js | Cloudinary Configuration |
| emailVerify.js | Email Verification Logic |

---

## 📂 controller

Contains business logic.

### auth.controller.js

- Register
- Login
- Verify Email

### user.controller.js

- Create User
- Update User
- Delete User

### task.controller.js

- Create Task
- Update Task
- Delete Task
- Assign Task

---

## 📂 middleware

Contains middleware functions.

### auth.js

Verifies JWT Token.

### allowRoles.js

Restricts API access based on user role.

Example

```
allowRoles("admin")
```

or

```
allowRoles("admin","manager")
```

### fileUploades.js

Handles file uploads using Multer.

---

## 📂 model

Contains MongoDB Schemas.

### User

Stores

- Name
- Email
- Password
- Role
- Status

### Task

Stores

- Title
- Description
- Assigned By
- Assigned To
- Priority
- Status
- Due Date

---

## 📂 routes

Defines all API routes.

```
Authentication APIs

User APIs

Task APIs
```

---

## 📂 utils

Reusable helper functions.

### sendEmail.js

Sends verification emails.

### httpStatusCode.js

Stores all HTTP status codes.

---

# 🔐 Authentication Flow

```
Register
    │
    ▼
Hash Password
    │
    ▼
Save User
    │
    ▼
Send Verification Email
    │
    ▼
Verify Email
    │
    ▼
Login
    │
    ▼
Generate JWT
    │
    ▼
Access Protected Routes
```

---

# 🗄 Database Models

## User

```javascript
{
    name,
    email,
    password,
    role,
    phone,
    avatar,
    status,
    isDeleted
}
```

---

## Task

```javascript
{
    title,
    description,
    assignedBy,
    assignedTo,
    priority,
    status,
    dueDate,
    attachments
}
```

---

# 🌐 API Endpoints

## Authentication

| Method | Endpoint |
|----------|--------------------|
| POST | /auth/register |
| POST | /auth/login |
| GET | /auth/verify |

---

## Users

| Method | Endpoint |
|----------|----------------|
| GET | /users |
| GET | /users/:id |
| PUT | /users/:id |
| DELETE | /users/:id |

---

## Tasks

| Method | Endpoint |
|----------|----------------|
| GET | /tasks |
| GET | /tasks/:id |
| POST | /tasks |
| PUT | /tasks/:id |
| DELETE | /tasks/:id |

---

# ⚙ Installation

Clone Repository

```bash
git clone https://github.com/yourusername/taskforge.git
```

Install Dependencies

```bash
npm install
```

Run Development Server

```bash
npm run dev
```

Production

```bash
npm start
```

---

# 🔑 Environment Variables

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

JWT_REFRESH_SECRET=

EMAIL=

EMAIL_PASSWORD=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Role Based Authorization
- Protected Routes
- Environment Variables
- Input Validation
- Secure File Upload
- Cloudinary Storage

---

# 🚀 Future Improvements

- Refresh Tokens
- Dashboard Analytics
- Notifications
- Pagination
- Search & Filtering
- Redis Caching
- Swagger Documentation
- Jest Testing
- Docker Deployment
- CI/CD Pipeline
- WebSocket Notifications

---

# 📈 Learning Outcomes

✔ REST API Development

✔ Authentication

✔ Authorization

✔ MongoDB Relationships

✔ Express Middleware

✔ MVC Architecture

✔ File Upload

✔ Email Verification

✔ Production Backend Structure

---

# 👨‍💻 Author

**Srinu**

Backend Developer

Node.js • Express.js • MongoDB

If you found this project helpful, don't forget to ⭐ the repository.

---

<div align="center">

### ⭐ Star this repository if you found it useful!

Made with ❤️ using Node.js & MongoDB

</div>
](https://github.com/Raktim-b/Role-Based-TaskManagement-System.git)
