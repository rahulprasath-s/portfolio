"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl shadow-lg shadow-slate-900/10 border-b border-slate-200/80 dark:border-white/10"
          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/10"
      }`}
    >
      {/* Top bar */}
      <div className="h-1 bg-gradient-to-r from-slate-950 via-blue-600 to-cyan-400 dark:from-cyan-300 dark:via-blue-500 dark:to-slate-950" />
      
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              item.name === "Contact" ? (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="rounded-full border border-slate-950 bg-slate-950 px-5 py-2 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-md shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-slate-800 dark:border-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition-colors hover:text-blue-700 dark:text-slate-300 dark:hover:text-cyan-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              )
            )}
            <motion.button
              onClick={toggleTheme}
              className="ml-2 rounded-full border border-slate-200 bg-white/80 p-2 text-slate-900 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-cyan-300/50 dark:hover:bg-white/15"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-900 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-cyan-300/50 dark:hover:bg-white/15"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-900 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-cyan-300/50 dark:hover:bg-white/15"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-colors uppercase tracking-wider text-sm font-medium ${
                      item.name === "Contact"
                        ? "bg-slate-950 dark:bg-white text-white dark:text-slate-950 border border-slate-950 dark:border-white hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
