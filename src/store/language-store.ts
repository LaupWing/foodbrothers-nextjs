import { create } from "zustand";
import { persist } from "zustand/middleware";
import translations from "@/data/translations.json";

type Language = "nl" | "en";
type Translations = typeof translations;

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations["nl"];
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: "nl",
      setLanguage: (lang) => set({ language: lang, t: translations[lang] }),
      t: translations["nl"],
    }),
    {
      name: "language-store",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.t = translations[state.language];
        }
      },
    }
  )
);
