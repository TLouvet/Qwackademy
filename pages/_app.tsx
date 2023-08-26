import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Roboto } from '@next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Thomas Louvet - Développeur Fullstack React NodeJS</title>
        <meta name='description' content='Site personnel de Thomas Louvet, développeur fullstack React NodeJS' />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main id='main' className={roboto.className}>
        <Component {...pageProps} />{' '}
      </main>
    </>
  );
}
