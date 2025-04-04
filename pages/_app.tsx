// pages/_app.tsx
import { AppProps } from 'next/app';
import { AuthProvider } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
