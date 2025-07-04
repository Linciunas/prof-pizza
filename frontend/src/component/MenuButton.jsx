import { useTranslation } from "react-i18next";

export default function MenuButton(){

    const {t} = useTranslation()
    const src = t("menu")

    const slide = (e) => {
        e.preventDefault();
        const el = document.getElementById("slide-img");
        const menu = document.getElementById("black")

        el.classList.remove("slide-button-back");
        el.classList.add("slide-button");
        menu.classList.remove("slide-menu-back");
        menu.classList.add("slide-menu");
    }

    return(
        <div id = "slide" className="width transition relative">
            <a className="menu-button-a" onClick={slide}>
                <img id = "slide-img" className="menu-button-img" src = {src} ></img>
            </a>
        </div>
    );
}
