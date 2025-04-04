// components/Header.tsx
'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="text-white text-lg font-bold">OmniWeb SEO</span>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/pricing">
            <span className="text-gray-300 hover:text-white">料金</span>
          </Link>
          <Link href="/analyze">
            <span className="text-gray-300 hover:text-white">分析</span>
          </Link>
          {user ? (
            <>
              <Link href="/dashboard">
                <span className="text-gray-300 hover:text-white">ダッシュボード</span>
              </Link>
              <button
                onClick={logout}
                className="text-gray-300 hover:text-white"
              >
                ログアウト
              </button>
            </>
          ) : (
            <Link href="/login">
              <span className="text-gray-300 hover:text-white">ログイン</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
