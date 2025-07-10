# CaptionIt Frontend

A modern React + Vite web app for captioning videos, featuring authentication, dashboard, and video management.

## Features
- User authentication (Firebase)
- Dashboard to view and manage captioned videos
- Upload or link videos for captioning
- Auto-refreshing video status
- Responsive, modern UI (Tailwind CSS)

## Tech Stack
- React
- Vite
- Firebase Auth
- Axios (API calls)
- Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
```bash
git clone <your-repo-url>
cd captionit-frontend
npm install
```

### Development
```bash
npm run dev
```
App runs at [http://localhost:5173](http://localhost:5173) by default.

### Production Build
```bash
npm run build
```

### Deployment
- **Vercel/Netlify:** Connect your repo, set build command to `npm run build` and output directory to `dist`.
- **Static Hosting:** Upload the contents of the `dist` folder after build.

## Project Structure
```
src/
  api/           # API calls (videoApi.js)
  components/    # React components
  containers/    # Page containers
  context/       # Auth context
  data/          # Mock data
  Common/        # Shared components (Header, etc)
  App.jsx        # Main app
  main.jsx       # Entry point
```

## API
- Uses a mock video API: https://reely-json-server.onrender.com/videos

## License
MIT
