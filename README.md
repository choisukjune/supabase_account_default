# 🚀 Modern React Authentication App

A beautiful and production-ready authentication system built with React, TypeScript, and Supabase.

## ✨ Features

- 🔐 Secure email & password authentication
- 🎨 Beautiful UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Fast and lightweight
- 🛡️ Protected routes
- 🌐 Session management
- 🔄 Real-time authentication state
- 📝 Form validation
- 🎯 TypeScript support
- 🚨 Error handling with toast notifications

## 🛠️ Tech Stack

- ⚛️ React 18
- 🏗️ TypeScript
- 🎨 Tailwind CSS
- 🔑 Supabase Auth
- 📦 Vite
- 🎭 Lucide React Icons
- 🍞 React Hot Toast

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Set up your Supabase environment variables in `.env`:
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```
4. Start the development server:
```bash
npm run dev
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

## 🏗️ Project Structure

```
src/
├── contexts/      # React contexts including auth
├── lib/           # Utility functions and configurations
├── pages/         # Page components
│   ├── Login
│   ├── Register
│   └── Dashboard
└── main.tsx       # Application entry point
```

## 🔒 Authentication Flow

1. Users can register with email and password
2. Login with registered credentials
3. Protected dashboard route for authenticated users
4. Secure session management
5. Automatic redirect to login for unauthenticated users

## 🎨 UI Features

- Clean and modern design
- Responsive layout
- Loading states
- Error notifications
- Smooth transitions
- Intuitive navigation

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is MIT licensed.