import { useCallback } from "react";
import { en } from "./en";
import { uz } from "./uz";

const locales = { uz, en };

export type Locale = keyof typeof locales;

export type TranslationProps = {
  locale: Locale;
};

export const useTranslation = ({ locale }: TranslationProps) => {
  const t = useCallback(
    (key: string) => {
      const translation = locales[locale] as any;
      if (!translation) {
        throw new Error("[Type-X]: Unsupported locale: " + locale);
      }

      return translation[key] ?? key;
    },
    [locale]
  );

  return { t, language: locale };
};
