"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const targetLanguage = language === "en" ? "de" : "en";
  const label = language === "en" ? "Switch to German" : "Zu Englisch wechseln";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={label}
      title={label}
      lang={targetLanguage}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold text-white/70 transition-colors hover:border-brand-500/40 hover:text-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
    >
      {targetLanguage.toUpperCase()}
    </button>
  );
}
