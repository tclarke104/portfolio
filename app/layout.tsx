import { useTransition, animated } from '@react-spring/web';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { usePathname } from 'next/navigation';
import PageTransition from './components/PageTransition';

export const metadata = {
  title: 'Travis Clarke | Portfolio',
  description: 'Welcome to my portfolio. I\'m a future facial plastic surgeon.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
