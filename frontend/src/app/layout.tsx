// NEXT
import type { Metadata } from 'next';

// FONTS
import { Raleway } from 'next/font/google';

// STYLES
import './globals.css';

// CONTEXT
import { ScrollProvider } from '@/context/ScrollContext';

// COMPONENTS
import Sidebar from '@/components/layout/Sidebar';
import ScrollContainer from '@/components/layout/ScrollContainer';
import ContactsSidebar from '@/components/layout/ContactsSidebar';

// FONTS
const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
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
    <html lang="en" className={`${raleway.variable} antialiased`}>
      <body className="flex h-screen justify-center overflow-hidden">
        <div className="flex w-full max-w-[1500px] h-full">
          <ScrollProvider>
            <Sidebar />
            <ScrollContainer>
              <main className="flex-1">{children}</main>
            </ScrollContainer>
          </ScrollProvider>
          <ContactsSidebar />
        </div>
      </body>
    </html>
  );
}
