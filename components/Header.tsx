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
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#projects" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 transition-all duration-300"
    >
      <nav
        className={`mx-auto max-w-6xl rounded-[1.4rem] border px-5 transition-all duration-300 sm:px-8 ${
          isScrolled
            ? "border-orange-500/30 bg-[#121212]/92 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-white/10 bg-[#111111]/88 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-5">
          <a href="#home" className="text-xl font-black uppercase tracking-tight text-orange-500">
            RS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`text-sm font-bold transition-colors hover:text-orange-500 ${
                  index === 0 ? "text-orange-500" : "text-white/48"
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <motion.a
              href="#contact"
              className="rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition-colors hover:bg-orange-400"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Hire Me
            </motion.a>
            <motion.button
              onClick={toggleTheme}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/60 transition-colors hover:border-orange-500/40 hover:text-orange-400"
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
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70"
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
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70"
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
              className="overflow-hidden border-t border-white/10 bg-[#111111]/95 backdrop-blur-xl md:hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-2 text-sm font-bold text-white/60 transition-colors hover:bg-white/10 hover:text-orange-400"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
