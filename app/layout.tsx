import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/components/ui/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guru Tattva - Spiritual Journey & Seva',
  description: 'Join us in our spiritual journey with Shree Shivkrupanand Swami. Discover seva opportunities, donate for noble causes, and be part of our spiritual community.',
  icons: {
    icon: [{
      rel: 'icon',
      type: 'image/png',
      url: '/favicon.png',
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
