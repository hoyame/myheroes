import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import en from "./locales/en";
import fr from "./locales/fr";

let language = "fr";

export const setLanguage = (l: string) => {
  let le = l.substr(0, 2);

  console.log(le)
  language = le
  I18n.locale = language;
}

I18n.locale = language;
I18n.fallbacks = true;
I18n.translations = {
  en,
  fr
};

export default I18n;