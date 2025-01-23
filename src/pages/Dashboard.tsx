import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { session, signOut } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    if (loading) return;
    setLoading(true);
    await signOut();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">대시보드</h1>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">{session?.user.email}</span>
              <button
                onClick={handleLogout}
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                <LogOut className="h-4 w-4 mr-2" />
                {loading ? '로그아웃 중...' : '로그아웃'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500 text-lg">환영합니다! 로그인에 성공하셨습니다.</p>
          </div>
        </div>
      </main>
    </div>
  );
}