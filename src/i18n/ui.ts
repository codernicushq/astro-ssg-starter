import { type AvailableLanguageCode, defaultLanguageCode } from "./languages";

export const ui: Record<AvailableLanguageCode, Record<string, string>> = {
  en: {},
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLanguageCode];

export function useTranslations(lang: AvailableLanguageCode) {
  return function t(key: UiKey) {
    return ui[lang][key] || ui[defaultLanguageCode][key];
  };
}
