// NEXT
import type { Metadata } from 'next';

// FONTS
import { Geist, Geist_Mono } from 'next/font/google';

// STYLES
import './globals.css';

// COMPONENTS
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';

// FONTS
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// META DATA
export const metadata: Metadata = {
  title: 'Erik Wiklund',
  description: 'My knowlegde explained',
};

// LAYOUT
export default function RootLayout(props: { children: React.ReactNode }) {
  const children = props.children;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex h-screen justify-center overflow-hidden">
        <div className="flex w-full max-w-[1500px] h-full">
          <Sidebar />
          <div className="flex flex-col flex-1 h-full overflow-y-scroll scrollbar-custom">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
