import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className='overflow-y-scroll'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'></link>
      </Head>
      <body className='scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
