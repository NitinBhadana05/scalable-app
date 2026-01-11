# 📝 Todo Dashboard Application

A full-stack **Todo Dashboard** built with **Next.js App Router**, **MongoDB**, and **JWT authentication**.  
The project demonstrates secure authentication, protected routes, CRUD operations, and a modern animated dashboard UI.

---

## 🚀 Live Overview

This application allows users to:
- Register and log in securely
- Access a protected dashboard
- Create, update, complete, and delete tasks
- Manage tasks inside a modern, responsive UI

---

## 🧩 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

### Backend
- Next.js API Routes
- MongoDB + Mongoose
- JWT Authentication
- bcrypt (password hashing)

---

## ✨ Features

- ✅ User Registration & Login
- 🔐 JWT-based Authentication
- 🔒 Protected Dashboard Routes
- 🧑 User Profile Fetching
- 📝 Task CRUD Operations
- ✏️ Inline Task Editing
- 📌 Task Completion Status
- 🎨 Modern Neon-Styled UI
- 📱 Fully Responsive Design
- ⚠️ Proper Error Handling
- 🧱 Scalable Project Structure

---

## 📁 Project Structure

```text
├── app
│   ├── api
│   │   ├── auth
│   │   ├── profile
│   │   └── tasks
│   ├── dashboard
│   ├── login
│   └── register
│
├── components
│   ├── Navbar.tsx
│   ├── TaskSection.tsx
│   ├── NeonBackground.tsx
│
├── lib
│   ├── db.ts
│   ├── auth.ts
│   └── requireAuth.ts
│
├── models
│   ├── User.ts
│   └── Task.ts
│
├── middleware.ts
├── .env.local
└── README.md
```


##⚙️ Setup Instructions (Step-by-Step)
###1️⃣ Clone the Repository
- git clone https://github.com/NitinBhadana05/scalable-app.git
- cd todo-dashboard

##2️⃣ Install Dependencies
- npm install

## 3️⃣ Environment Variables

- Create a .env.local file in the root:

-- MONGODB_URI=your_mongodb_connection_string
-- JWT_SECRET=your_jwt_secret_key


####⚠️ Never commit .env.local to GitHub

## 4️⃣ Run the Development Server
- npm run dev


Open in browser:

http://localhost:3000

## 🔐 Authentication Flow

- User registers with email & password

- Password is hashed using bcrypt

- JWT token is generated on login

- Token is stored in HTTP-only cookies

- Middleware protects dashboard routes

## 📝 Task Management Flow

- Create task

- Edit task title inline

- Toggle completion status

- Delete task

- Tasks are user-specific and protected

## 🛡️ Security Practices

- Password hashing with bcrypt

- JWT authentication

- HTTP-only cookies

- Protected API routes

- Environment variables for secrets

## 🎯 Why This Project?

- This project was built to demonstrate:

- Full-stack development skills

- Authentication & authorization

- REST API design

- Database integration

- Modern UI/UX principles

- Scalable project architecture

## 🧪 Possible Improvements

- Drag & drop tasks

- Task priorities

- light mode toggle

- Notifications

- Pagination

- Unit & integration tests

## 👨‍💻 Author

- Built with ❤️ to demonstrate real-world full-stack development skills.

## 📄 License

- This project is open-source and free to use
