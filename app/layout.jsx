'use client';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../styles/scss/style.scss';

import ThemeSwitch from '@/components/switch/ThemeSwitch';
import { ThemeProvider } from 'next-themes';

import { Montserrat, Mulish, Poppins } from 'next/font/google';

const MulishFonts = Mulish({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-mulish',
});
const MontserratFonts = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-montserrat',
});
const PoppinsFonts = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${MulishFonts.variable} ${MontserratFonts.variable}  ${PoppinsFonts.variable}  `}
      >
        <div className="tokyo_tm_all_wrap">
          <ThemeProvider attribute="class">
            <ThemeSwitch />
            {/* End themeSwicher */}
            {children}
            {/* Main next component pageprops */}
          </ThemeProvider>

          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
