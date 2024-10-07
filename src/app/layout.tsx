import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Header from './ui/header';
import Footer from './ui/footer';

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
      <body className={`${lato.className} antialiased bg-black text-white`} suppressHydrationWarning={true}>
        <div className="max-w-[960px] mx-auto text-left pb-10">
          <Header />
          <main className="flex flex-col px-4 m:p-0">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
