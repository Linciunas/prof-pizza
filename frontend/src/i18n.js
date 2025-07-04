import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import en_resources from "./languages/en.json";
import lt_resources from "./languages/lt.json";

const resources = {
  en: {
    translation: en_resources,
  },
  lt: {
    translation: lt_resources,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"lt",
    resources,
})