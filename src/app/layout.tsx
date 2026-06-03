import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import DarkModeProvider from '@/components/layout/DarkModeProvider';

export const metadata: Metadata = {
  title: {
    default: 'El-SEHO Frontier Solutions Ltd | Technology Procurement & ICT Solutions',
    template: '%s | El-SEHO Frontier Solutions',
  },
  description:
    'El-SEHO Frontier Solutions Ltd — your trusted partner for technology procurement, ICT solutions, and digital transformation in Nigeria and Africa.',
  keywords: [
    'technology procurement Nigeria',
    'ICT solutions',
    'laptops Nigeria',
    'smartphones',
    'networking equipment',
    'IT support Nigeria',
    'El-SEHO',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'El-SEHO Frontier Solutions Ltd',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <DarkModeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </DarkModeProvider>
      </body>
    </html>
  );
}
