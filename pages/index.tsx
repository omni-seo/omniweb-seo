// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>トップページです</h1>
      <Link href="/login">ログインはこちら</Link>
    </div>
  );
}
