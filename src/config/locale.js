import * as translations from "./translations.json";

const languageOptions = [
  { key: "English", value: "English" },
  { key: "Dutch", value: "Dutch" },
  { key: "German", value: "German" },
  { key: "Spanish", value: "Spanish" },
];

const locale = (language) => {
  return translations[language];
};

export { locale, languageOptions };
