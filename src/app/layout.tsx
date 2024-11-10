import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/organisms/Footer';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'hyperhire',
  description: 'Interview test',
};

export default function RootLayout({
  children,
  dashboard,
}: Readonly<{
  children: React.ReactNode;
  dashboard: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {dashboard}
        {children}
        <Footer />
      </body>
    </html>
  );
}
