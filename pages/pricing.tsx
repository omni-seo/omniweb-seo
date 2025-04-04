// pages/pricing.tsx
export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">料金プラン</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded p-4 shadow text-center">
          <h2 className="text-xl font-semibold mb-2">無料プラン</h2>
          <p>初回のみ診断可能</p>
          <p className="mt-2 font-bold text-lg">¥0</p>
        </div>
        <div className="border rounded p-4 shadow text-center bg-blue-50">
          <h2 className="text-xl font-semibold mb-2">ベーシック</h2>
          <p>月5回まで診断</p>
          <p className="mt-2 font-bold text-lg">¥980 / 月</p>
        </div>
        <div className="border rounded p-4 shadow text-center">
          <h2 className="text-xl font-semibold mb-2">プロ</h2>
          <p>無制限診断 + 優先サポート</p>
          <p className="mt-2 font-bold text-lg">¥1,980 / 月</p>
        </div>
      </div>
    </div>
  );
}
