import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { session, signOut } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    if (loading) return; // 중복 실행 방지
    try {
      setLoading(true);
      await signOut();
      console.log('Logout successful'); // 로그 확인용
    } catch (error) {
      console.error('Logout error:', error); // 에러 핸들링
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">📊 Dashboard</h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">📧 {session?.user.email}</span>
              <button
                onClick={handleLogout}
                disabled={loading}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                }`}
              >
                <LogOut className="h-4 w-4 mr-2" />
                {loading ? 'Logging out... ⏳' : 'Log out 🚪'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 flex justify-center">
          {/* User Info Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">👋 Welcome, {session?.user.email}!</h2>
              <p className="text-gray-700 text-lg mb-4">You're logged in and ready to go 🚀.</p>
              <div className="bg-gray-100 p-4 rounded-md shadow-inner">
                <p className="text-sm text-gray-600">🔐 Securely logged in as:</p>
                <p className="text-indigo-600 font-medium">{session?.user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
