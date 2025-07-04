import React, { Component } from 'react';
import { Link } from 'react-router';
import { useTranslation } from "react-i18next"
import LogoPizza from './LogoPizza';
import LogoKebab from './LogoKebab';


export default function LandingZone(){
    const {t} = useTranslation();

    const src = t("mix-pizza")

    function isMobile() {
        const minWidth = 480; // Minimum width for desktop devices
        return window.innerWidth < minWidth || screen.width < minWidth;
    }

    const mobileSrc = "/src/assets/food/phone/custom-pizza.png"
    const desktopSrc = mobileSrc.replace("phone", "desktop");
    let source;
    if(isMobile()){
        source = mobileSrc;
    } else {
        source = desktopSrc;
    }

    var mobile = Boolean(isMobile());

    return (
        <div className='landing-zone-container width height'>
            <div className='width landing-zone-logo-container max-w-120 m-auto'>
                <Link to = "/" className={`landing-zone-logo ${mobile ? "flex-col gap-[5px]": "flex-row gap-10"}`}>
                    <LogoPizza size = {"w-15"}></LogoPizza>
                    <LogoKebab size = {"w-16"}></LogoKebab>
                </Link>
            </div>
            <Link to="/custom-pizza" className='link'>
                <div className={`${mobile ? "" : "gap-[30px]"} landing-zone-custom-pizza-container flex max-w-120 m-auto justify-center`}>
                    <img src = {source} className='landing-zone-custom-pizza'></img>
                    <div className='landing-zone-side-container'>
                        <img src = {src} className='landing-zone-img'></img>
                        <div className='landing-zone-text'>
                            {t("landing-zone.mix-pizza")}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}


