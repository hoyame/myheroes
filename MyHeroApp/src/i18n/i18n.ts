import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import en from "./locales/en";
import fr from "./locales/fr";
import es from "./locales/es";
import de from "./locales/de";
import it from "./locales/it";
import pt from "./locales/pt";

let language = "fr";

export const setLanguage = (l: string) => {
  let le = l.substr(0, 2);
  language = le;
  I18n.locale = language;
}


I18n.locale = language;
I18n.fallbacks = true;
I18n.translations = {
  en,
  fr,
  es,
  de,
  it,
  pt
};

export const returnLanguage = (): string => {
  return language;
}

export default I18n;