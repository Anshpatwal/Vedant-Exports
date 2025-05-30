'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Header() {
  const { i18n } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).googleTranslateElementInit = function () {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );

        setTimeout(() => {
          const select = document.querySelector<HTMLSelectElement>('#google_translate_element select.goog-te-combo');
          if (select) {
            select.style.appearance = 'none';
            select.style.display = 'inline-block';
            select.style.verticalAlign = 'middle';
            select.style.whiteSpace = 'nowrap'; // prevent wrapping
            select.style.height = '30px';
            select.style.paddingRight = '32px';
            select.style.backgroundImage =
              "url(\"data:image/svg+xml;utf8,<svg fill='black' height='12' viewBox='0 0 24 24' width='12' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>\")";
            select.style.backgroundRepeat = 'no-repeat';
            select.style.backgroundPosition = 'right 10px center';
            select.style.backgroundSize = '12px 12px';
          }
        }, 1500);
      };
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo: keep size consistent, and vertical align center */}
        <Link href='/'>
          <img
            src="/logo.png"
            alt="Vedant Exports Logo"
            className="h-[70px] w-[70px] object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-10 ">
          <div className="hidden md:flex items-center gap-8 text-black font-[700]">
            <Link
              href="/"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              About
            </Link>
            <Link
              href="/products"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/certificates"
              className="hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Certificates
            </Link>
          </div>

          {/* Google Translate Dropdown */}
          <div
            id="google_translate_wrapper"
            className="flex items-center gap-2 whitespace-nowrap"
            aria-label="Select Language"
          >
            <label
              htmlFor="google_translate_element"
              className="text-sm text-slate-600 hidden md:inline-block font-[700]"
            >
              Select Language:
            </label>
            <div
              id="google_translate_element"
              className="transform scale-90 origin-top-right flex items-center"
            />
          </div>
        </nav>
      </div>

      {/* Google Translate Script */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </header>
  );
}
