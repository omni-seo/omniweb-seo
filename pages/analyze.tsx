// pages/analyze.tsx
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function AnalyzePage() {
  const { user } = useAuth();
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    setResult(null);
    try {
      // 仮の診断処理（今後API連携予定）
      await new Promise((res) => setTimeout(res, 1500));
      setResult(`✅ ${url} のSEO診断が完了しました！（仮結果）`);
    } catch (err) {
      setResult('エラーが発生しました');
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold">このページはログインが必要です</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">SEO診断</h1>
      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full max-w-md p-2 border rounded mb-4"
      />
      <button
        onClick={handleAnalyze}
        disabled={!url || loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? '診断中...' : '診断する'}
      </button>
      {result && <p className="mt-6 text-green-600 font-semibold">{result}</p>}
    </div>
  );
}
