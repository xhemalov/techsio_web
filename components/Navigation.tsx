"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const navigationLinks = [
  { href: '/ecommerce', label: 'E-commerce' },
  { href: '/integrace', label: 'Integrace' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/#o-nas', label: 'O nás' },
  { href: '/#kontakt', label: 'Kontakt' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-dark-gray bg-primary-black/95 backdrop-blur-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 w-full items-center justify-between gap-6">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/techsio-logo.svg"
                alt="TechSio Logo"
                width={320}
                height={80}
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light-gray hover:text-primary-red font-inter transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#kontakt">
              <Button size="sm">
                KONZULTACE
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-red transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-black border-t border-dark-gray">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-light-gray hover:text-primary-red font-inter transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/#kontakt" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="w-full">
                    KONZULTACE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
