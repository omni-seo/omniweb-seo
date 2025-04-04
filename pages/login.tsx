// pages/login.tsx
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const { login, user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">ログイン</h1>
      {user ? (
        <p>ようこそ、{user.displayName || 'ユーザー'}さん！</p>
      ) : (
        <button
          onClick={login}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Googleでログイン
        </button>
      )}
    </div>
  );
}
