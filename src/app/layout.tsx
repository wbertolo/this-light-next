import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Header from './ui/header';
import Footer from './ui/footer';
import Script from 'next/script';

const lato = Lato({ 
  subsets: ['latin'], 
  weight: ['400','700']
})

export const metadata: Metadata = {
  title: {
    template: '%s | This Light',
    default: 'This Light',
  },
  metadataBase: new URL('https://followthislight.com/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script data-ad-client="ca-pub-2263884572379793" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      </head>
      <body className={`${lato.className} antialiased bg-black text-white`}>
        <div className="max-w-[960px] mx-auto text-left pb-10">
          <Header />
          <main className="main flex flex-col px-4 m:p-0">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
