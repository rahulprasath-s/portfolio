"use client";

import { useLanguage } from "./LanguageProvider";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import LanguageToggle from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { t } = useLanguage();
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
    { name: t("Home"), href: "#home" },
    { name: t("About"), href: "#about" },
    { name: t("Experience"), href: "#experience" },
    { name: t("Skills"), href: "#skills" },
    { name: t("Projects"), href: "#projects" },
    { name: t("Models"), href: "#models" },
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
            ? "border-brand-500/30 bg-[#121212]/92 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-white/10 bg-[#111111]/88 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-5">
          <motion.a
            href="#home"
            aria-label={t("Go to home")}
            className="group relative flex h-9 w-9 items-center justify-center"
            whileHover={{ rotate: 8, scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <span
              aria-hidden="true"
              className="absolute h-6 w-6 rotate-45 rounded-[0.45rem] bg-brand-500 shadow-[0_8px_22px_rgba(3,255,70,0.34)] transition-transform duration-300 group-hover:rotate-[135deg]"
            />
            <span
              aria-hidden="true"
              className="absolute h-3 w-3 rotate-45 rounded-[0.2rem] border-2 border-white/80"
            />
            <span aria-hidden="true" className="relative h-1.5 w-1.5 rounded-full bg-neutral-950" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`text-sm font-bold transition-colors hover:text-brand-ink ${
                  index === 0 ? "text-brand-ink" : "text-white/48"
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <motion.a
              href="#contact"
              className="rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-bold text-neutral-950 shadow-[0_12px_30px_rgba(3,255,70,0.28)] transition-colors hover:bg-brand-400"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              {t("Contact Me")}
            </motion.a>
            <motion.button
              onClick={toggleTheme}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/60 transition-colors hover:border-brand-500/40 hover:text-brand-ink"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={t("Toggle theme")}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.button>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex shrink-0 items-center gap-3 lg:hidden">
            <motion.button
              onClick={toggleTheme}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70"
              whileTap={{ scale: 0.9 }}
              aria-label={t("Toggle theme")}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.button>
            <LanguageToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70"
              aria-label={t("Toggle menu")}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
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
              id="mobile-navigation"
              className="overflow-hidden border-t border-white/10 bg-[#111111]/95 backdrop-blur-xl lg:hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-2 text-sm font-bold text-white/60 transition-colors hover:bg-white/10 hover:text-brand-ink"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg bg-brand-500 px-4 py-2 text-sm font-bold text-neutral-950"
                >
                  {t("Contact Me")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
