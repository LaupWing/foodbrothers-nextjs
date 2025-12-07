"use client";

import { useLanguageStore } from "@/store/language-store";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-full p-1" role="group" aria-label="Language selection">
      <button
        onClick={() => setLanguage("nl")}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
          language === "nl"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Nederlands"
        aria-pressed={language === "nl"}
      >
        NL
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="English"
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
