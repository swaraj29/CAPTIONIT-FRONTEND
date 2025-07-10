# CaptionIt (Reely AI) Frontend

A modern, production-ready video captioning platform built with React, Vite, and Firebase. CaptionIt (Reely AI) lets users upload or link videos, customize caption styles, and manage their captioned content with a beautiful, responsive dashboard.

---

## 🔗 GitHub Repository
https://github.com/swaraj29/CAPTIONIT-FRONTEND

## 🚀 Deployed Link
https://captionit-frontend.vercel.app/

---

## 🗄️ Backend API Used
This project uses a mock video API for demonstration and development:

- **API Base URL:** [https://reely-json-server.onrender.com/videos](https://reely-json-server.onrender.com/videos)
- The API provides endpoints for listing, uploading, and updating video caption jobs.
- You can replace this with your own backend for production use.

---

## ✨ Features
- **User Authentication:** Secure Google sign-in via Firebase Auth
- **Dashboard:** View, filter, and manage all your captioned videos
- **Video Upload:** Upload files or paste public video URLs (YouTube, Vimeo, etc.)
- **Custom Styling:** Choose fonts, colors, outlines, and more for captions
- **Status Tracking:** Real-time video processing status with auto-refresh
- **Chatbot Assistant:** Built-in AI chatbot for onboarding, support, and FAQs
- **Responsive UI:** Mobile-first, modern design with Tailwind CSS
- **Feedback System:** Collect user feedback on chatbot answers
- **Accessibility:** Designed for inclusivity and easy navigation

---

## 🛠️ Tech Stack
- **React** (Vite)
- **Firebase Auth** (Google sign-in)
- **Axios** (API calls)
- **Tailwind CSS** (UI styling)
- **React Router** (routing)
- **React Firebase Hooks** (auth state)
- **React Toastify** (notifications)

---

## 📁 Folder Structure
```
captionit-frontend/
├── public/                # Static assets
│   └── vite.svg
├── src/
│   ├── api/               # API calls (videoApi.js)
│   ├── assets/            # Images, SVGs, etc.
│   ├── components/        # Main React components
│   │   ├── Chatbot/       # Chatbot UI, logic, intents, feedback
│   │   ├── Dashboard/     # Video table, dashboard widgets
│   │   ├── Home/          # Home page hero, landing
│   │   └── NewCaption/    # Video upload/caption form
│   ├── containers/        # Page containers (Dashboard.jsx, Home.jsx, etc.)
│   ├── context/           # AuthContext (user state, provider)
│   ├── data/              # Mock data (mockVideos.json)
│   ├── Common/            # Shared UI (Header, etc.)
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   ├── firebase.js        # Firebase config
│   ├── App.css, index.css # Global styles
├── package.json           # Project metadata & scripts
├── vite.config.js         # Vite config
├── eslint.config.js       # Linting rules
├── README.md              # This file
└── ...
```

---

## 🚀 Implementation Highlights
- **Authentication:**
  - Google sign-in via Firebase Auth
  - AuthContext for global user state
- **Dashboard & Video Table:**
  - Fetches videos from mock API (JSON server)
  - Status color-coding, icons, and auto-refresh every 10s
  - Filter by status (All, Completed, Processing, etc.)
  - Responsive table (desktop) and card (mobile) layouts
- **Video Upload & Captioning:**
  - Upload local files or paste video URLs
  - Supports MP4, MOV, AVI, and more
  - Custom caption styling (fonts, colors, outlines)
- **Chatbot Assistant:**
  - Modern, animated UI with typing effect
  - Intents for onboarding, support, pricing, features, etc.
  - Step-by-step rich responses for "How to use"
  - Feedback options after each answer
  - Quick-reply intent suggestions (clickable)
- **UI/UX:**
  - Beautiful gradients, glassmorphism, and smooth transitions
  - Mobile-friendly navigation and layouts
  - Toast notifications for actions and errors
- **Accessibility:**
  - Keyboard navigation, color contrast, and ARIA-friendly components

---

## 🌐 Deployment
- **Vercel/Netlify:**
  - Connect your repo, set build command to `npm run build`, output directory to `dist`
  - Add your deployed domain to Firebase Auth > Authorized domains for Google sign-in
- **Static Hosting:**
  - Upload the contents of the `dist` folder after build

---

## 🔗 API
- Uses a mock video API: [https://reely-json-server.onrender.com/videos](https://reely-json-server.onrender.com/videos)
- Replace with your backend for production

---

## 📝 How to Run Locally
1. **Clone the repo:**
   ```bash
   git clone <your-repo-url>
   cd captionit-frontend
   npm install
   ```
2. **Set up Firebase:**
   - Create a Firebase project
   - Enable Google sign-in in Authentication
   - Add your local and deployed domains to Authorized domains
   - Copy your Firebase config to `src/firebase.js`
3. **Start the app:**
   ```bash
   npm run dev
   ```
   App runs at [http://localhost:5173](http://localhost:5173)

---

## 📣 Credits & License
- UI/UX: Inspired by modern SaaS and AI tools
- License: MIT

---

## 💡 Want to contribute or need help?
Open an issue or pull request, or use the built-in chatbot for onboarding and support!
