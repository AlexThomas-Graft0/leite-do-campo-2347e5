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
  title: 'Leite Do Campo — Sustainable Dairy Partnerships',
  description: 'We partner with local producers to collect fresh, pasture-raised milk. Join our circular glass bottle loop and help us build a sustainable local dairy network.',
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