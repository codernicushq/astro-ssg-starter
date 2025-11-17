import { type AvailableLanguageCode, defaultLanguageCode } from "./languages";

export const routes: Record<AvailableLanguageCode, Record<string, string>> = {
  en: {
    home: "/",
  },
} as const;

export type RouteKey = keyof (typeof routes)[typeof defaultLanguageCode];

const nonPrefixedRoutes: RouteKey[] = [];

export function useTranslatedPath(lang: AvailableLanguageCode) {
  return function translatePath(key: RouteKey) {
    const path = routes[lang][key];

    if (nonPrefixedRoutes.includes(key)) {
      return path;
    }

    return lang === defaultLanguageCode ? path : `/${lang}${path}`;
  };
}
