import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Livingstone Mazvovere | Full Stack Developer & AI Enthusiast',
  description: 'Portfolio website of Livingstone Mazvovere, showcasing expertise in full-stack development, AI/ML, and community impact.',
  keywords: 'full stack developer, AI developer, machine learning, Python developer, React developer, portfolio',
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
      <link rel="icon" href="/icon.png" type="image/png" />
    </html>
  );
}