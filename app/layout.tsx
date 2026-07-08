import { CookieBanner } from "@/components/CookieBanner";
import './globals.css';
import { Poppins, JetBrains_Mono } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Leite Do Campo — Leite Do Campo',
  description: 'A cozy café-inspired experience blending warm tones, soft typography, and premium dairy crafts in a relaxed browsing environment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-surface text-text antialiased min-h-screen selection:bg-secondary selection:text-primary">
        {children}
              <CookieBanner />
      </body>
    </html>
  );
}