import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='h-full bg-gray-50' lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body className='h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
