import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mentalab - High-Performance Cognitive Math Training',
  description:
    'Master mental arithmetic through Left-to-Right Accumulation, Complements, 1–100 Table Matrix, and Anzan Flash Working Memory Expansion.',
  keywords: [
    'Mental Math',
    'Cognitive Math',
    'Left to Right Addition',
    'Complements Method',
    'Multiplication Tables 1 to 100',
    'Anzan Flash Calculation',
    'Working Memory',
    'Mentalab',
  ],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased selection:bg-violet-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
