# Job Portal Website 🚀

A full-stack **Job Portal Web Application** where job seekers can register, upload resumes, and apply for jobs, while employers can post and manage job listings. Built using **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend.

---

## 🔗 Live Demo

Check it out on : https://job-portal-website-rouge-three.vercel.app/

> ⚠️ Note: Backend may take a few seconds to respond initially due to free-tier cold start.

---

## 🧩 Tech Stack

### Frontend

* React.js (Vite)
* React Router DOM
* Tailwind CSS
* Axios
* Context API

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Multer (for file uploads)

### Deployment

* **Frontend**: Vercel
* **Backend**: Render
* **Database**: MongoDB Atlas

---

## ✨ Features

### 👤 Job Seekers

* Register & Login
* View job listings
* Apply for jobs
* Upload & manage resume
* Update profile

### 🧑‍💼 Employers

* Register & Login
* Post new jobs
* Manage job listings
* View applicants
* Update Applicant job status

### 🔐 Authentication

* JWT-based authentication
* Protected routes
* Secure API access

---

## 🛠️ Local Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/siva-sanker/job-portal-website.git
cd job-portal-website
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend/jobportal
npm install
npm run dev
```

---

## 🚀 Deployment Steps (Summary)

1. Deploy backend to **Render**
2. Connect backend to **MongoDB Atlas**
3. Set backend env variables on Render
4. Deploy frontend to **Vercel**
5. Add `VITE_API_BASE_URL` in Vercel env vars
6. Add `vercel.json` for React Router rewrite

---

## 🧪 Common Issues & Fixes

* **404 on refresh (/login)** → Add `vercel.json` rewrite
* **Auth works in Postman but not browser** → Fix CORS & cookies
* **API URL undefined** → Check Vercel env variables & redeploy

---

## 📌 Future Enhancements

* Cloudinary integration for file uploads
* Email notifications
* Admin dashboard
* Job filtering & search
* Role-based access control

---

## 👨‍💻 Author

**Siva Sanker S**

* GitHub: [https://github.com/siva-sanker](https://github.com/siva-sanker)
* LinkedIn: [https://www.linkedin.com/in/siva-sanker-s-b3594b233/](https://www.linkedin.com/in/siva-sanker-s-b3594b233/)
* Portfolio: [https://siva-sanker.github.io/PortFolio/](https://siva-sanker.github.io/PortFolio/)

---

⭐ If you like this project, consider giving it a star on GitHub!
