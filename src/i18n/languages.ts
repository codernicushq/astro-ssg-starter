export type Language = {
  code: string;
  label: string;
};

export const availableLanguages: Language[] = [{ code: "en", label: "EN" }];

export type AvailableLanguageCode = (typeof availableLanguages)[number]["code"];

export const defaultLanguageCode: AvailableLanguageCode = "en";

export const availableLanguageCodes: AvailableLanguageCode[] =
  availableLanguages.map((lang) => lang.code);
