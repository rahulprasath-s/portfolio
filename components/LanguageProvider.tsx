"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { german } from "@/lib/translations";

type Language = "en" | "de";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("language");
      if (saved === "en" || saved === "de") {
        setLanguage(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // English remains available when browser storage is disabled.
    }
  }, []);

  const toggleLanguage = () => {
    const nextLanguage = language === "en" ? "de" : "en";
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
    try {
      localStorage.setItem("language", nextLanguage);
    } catch {
      // Switching still works for this visit without browser storage.
    }
  };

  const t = (text: string) => language === "de" ? german[text] ?? text : text;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
