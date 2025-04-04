// pages/login.tsx
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { login, logout } from '@/lib/auth';
import { auth } from '@/lib/firebase';

export default function LoginPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser);
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">ログインページ</h1>
      {user ? (
        <>
          <p className="mb-2">ようこそ、{user.displayName}さん</p>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            ログアウト
          </button>
        </>
      ) : (
        <button
          onClick={login}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Googleでログイン
        </button>
      )}
    </div>
  );
}
