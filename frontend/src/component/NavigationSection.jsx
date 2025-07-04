import LanguageSelector from "./LanguageSelector.jsx";
import LogoKebab from "./LogoKebab.jsx";
import LogoPizza from "./LogoPizza.jsx";
import source from "../assets/close/x.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { useEffect } from "react";

export default function NavigationSection(){
    const {t} = useTranslation()

    useEffect(() => {
          window.scrollTo(1000, 0);
      }, []);

    const slide = (e) => {
        e.preventDefault();
        const el = document.getElementById("slide-img");
        const menu = document.getElementById("black")
        
        el.classList.remove("slide-button");
        el.classList.add("slide-button-back");
        menu.classList.remove("slide-menu");
        menu.classList.add("slide-menu-back");
    }

    const slideToPizza = (e) => {
        const el = document.getElementById("slide-img");
        const menu = document.getElementById("black")
        
        el.classList.remove("slide-button");
        el.classList.add("slide-button-back");
        menu.classList.remove("slide-menu");
        menu.classList.add("slide-menu-back");
        
        setTimeout(() => {
            window.scrollTo({
            top: (window.innerHeight)-63,
            left: 0,
            behavior: "smooth"
            });
        }, 500);
    }

    return(
        <div id = "black" className="width height black slide-menu-back transition">
            <div className="close-container">
                <a className="close-container-a" onClick={slide} href = "#pica">
                    <img src = {source} className="close-icon"></img>    
                </a>
            </div>
            <div className="menu-container-logo">
                <LogoPizza size = {"size-15"}></LogoPizza>
                <LogoKebab size = {"size-16"}></LogoKebab>
            </div>

            <div className="menu-container-btn">
                <Link to = "/" className="menu-btn" onClick={slideToPizza}>{t("navigation.pizza")}</Link>
                <Link to = "/pita-gyros" className="menu-btn">{t("navigation.pita")}</Link>
                <Link to = "/kebab" className="menu-btn">{t("navigation.kebab")}</Link>
                <Link to = "/snacks" className="menu-btn">{t("navigation.snack")}</Link>
                <Link to = "/drinks" className="menu-btn">{t("navigation.drinks")}</Link>
                <Link to = "/coffee" className="menu-btn">{t("navigation.coffee")}</Link>
                <Link to = "/ice-cream" className="menu-btn">{t("navigation.ice-cream")}</Link>

                <div className="text-[25px]">
                    <LanguageSelector></LanguageSelector>
                </div>
            </div>
        </div>
    );
}