// pages/api/analyze.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URLが必要です' });

  try {
    const prompt = `以下のWebサイトURLに対して、SEOの視点から改善すべき点を3つ日本語で提案してください：\nURL: ${url}`;

    const completion = await openai.createChatCompletion({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
    });

    const result = completion.data.choices[0].message?.content;
    res.status(200).json({ result });
  } catch (error: any) {
    console.error('分析エラー:', error.message);
    res.status(500).json({ error: '診断中にエラーが発生しました' });
  }
}
