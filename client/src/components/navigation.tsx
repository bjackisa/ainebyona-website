import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/vision", label: "Vision" },
    { href: "/pillars", label: "Pillars" },
    { href: "/budget", label: "Budget" },
    { href: "/donate", label: "Donate" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass rounded-b-2xl mx-4 mt-4">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold">
              AN
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">Ainebyona Nicholas</h1>
              <p className="text-xs text-gray-600">Western Youth MP 2026-2031</p>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item text-gray-700 hover:text-primary font-medium transition-colors ${
                  location === item.href ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <Link
            href="/donate"
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Support Campaign
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 fade-in">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
