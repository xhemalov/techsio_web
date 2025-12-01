"use client";

import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-black/95 backdrop-blur-sm border-b border-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/fmiyg7xfgenllfw0sv5aj2mr/rqshjrhuz6joh86j6qbpervr/d-OP_6Gvjq7yBPlgDv8Lm/logo-techsio.png"
                alt="TechSio Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/sluzby/ecommerce" className="text-light-gray hover:text-primary-red font-inter transition-colors duration-300">
              Služby
            </Link>
            <Link href="/proces" className="text-light-gray hover:text-primary-red font-inter transition-colors duration-300">
              Proces
            </Link>
            <Link href="/portfolio" className="text-light-gray hover:text-primary-red font-inter transition-colors duration-300">
              Portfolio
            </Link>
            <Link href="/kontakt" className="text-light-gray hover:text-primary-red font-inter transition-colors duration-300">
              Kontakt
            </Link>
            <Link href="/sluzby/konzultace">
              <Button size="sm">
                KONZULTACE
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-red transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-black border-t border-dark-gray">
              <Link
                href="/sluzby/ecommerce"
                className="block px-3 py-2 text-light-gray hover:text-primary-red font-inter transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Služby
              </Link>
              <Link
                href="/proces"
                className="block px-3 py-2 text-light-gray hover:text-primary-red font-inter transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Proces
              </Link>
              <Link
                href="/portfolio"
                className="block px-3 py-2 text-light-gray hover:text-primary-red font-inter transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/kontakt"
                className="block px-3 py-2 text-light-gray hover:text-primary-red font-inter transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
              <div className="px-3 py-2">
                <Link href="/sluzby/konzultace" onClick={() => setIsOpen(false)}>
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