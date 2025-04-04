// components/Header.tsx
'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">OmniWeb SEO</span>
        </Link>
        <nav className="space-x-4">
          <Link href="/pricing">料金</Link>
          <Link href="/analyze">分析</Link>
          {user ? (
            <>
              <Link href="/dashboard">ダッシュボード</Link>
              <button
                onClick={logout}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                ログアウト
              </button>
            </>
          ) : (
            <Link href="/login">ログイン</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
