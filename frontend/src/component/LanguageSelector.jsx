import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

export default function LanguageSelector(){
    const {i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return(
        <div className="language-selector-container">
            <button className="language-selector-btn" onClick={() => changeLanguage("lt")}>LT</button>
            <div className="language-selector-bar"></div>
            <button  className="language-selector-btn" onClick={() => changeLanguage("en")}>EN</button>
        </div>
    );
}