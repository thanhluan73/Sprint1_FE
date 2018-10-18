import { language } from "../../settings";

import englishLang from "images/image-cpn/flag/uk.svg";
import chineseLang from "images/image-cpn/flag/china.svg";
import spanishLang from "images/image-cpn/flag/spain.svg";
import frenchLang from "images/image-cpn/flag/france.svg";
import italianLang from "images/image-cpn/flag/italy.svg";
import vietnamLang from "images/image-cpn/flag/vn.svg";

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: "english", 
      locale: "en",
      text: "English",
      icon: englishLang
    },
    {
      languageId: "vietnam", 
      locale: "vn",
      text: "VietNam",
      icon: vietnamLang
    },
    {
      languageId: "chinese",
      locale: "zh",
      text: "Chinese",
      icon: chineseLang
    },
    {
      languageId: "spanish",
      locale: "es",
      text: "Spanish",
      icon: spanishLang
    },
    {
      languageId: "french",
      locale: "fr",
      text: "French",
      icon: frenchLang
    },
    {
      languageId: "italian",
      locale: "it",
      text: "Italian",
      icon: italianLang
    }
  ]
}; 

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
