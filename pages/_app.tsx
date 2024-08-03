import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { TeamProvider } from '../app/contexts/TeamContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TeamProvider>
      <Component {...pageProps} />
    </TeamProvider>
  );
}

export default MyApp;
