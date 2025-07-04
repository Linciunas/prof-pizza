import React from 'react';
import LogoPizza from '../component/LogoPizza.jsx';
import LogoKebab from '../component/LogoKebab.jsx';
import LanguageSelector from './LanguageSelector';
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation();

    return (
        <footer className='flex flex-col justify-center items-between bg-black text-white h-30 text-[10px] p-3 pt-3 pb-3'>
            <div className='flex flex-row justify-between gap-3'>
                <div className=' flex flex-col w-[105px] '>
                    <div className=''>{t("footer.time-text")}</div>
                    <div>{t("footer.time")}</div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <LogoPizza size = {"w-12"}></LogoPizza>
                    <LogoKebab size = {"w-12"}></LogoKebab>
                </div>
                <div className='justify-center flex flex-col [w-125px]'>
                    <div>{t("footer.address")}</div>
                    <div>
                        {t("footer.phone")}
                        <a href='tel:+370052603100'> 0 5 260 31 00</a>
                    </div>
                    <div>
                        {t("footer.email")} 
                        <br></br>
                        <a href='mailto:info@profpizza.lt'>
                         info@profpizza.lt
                        </a>
                    </div>
                    
                </div>

            </div>
            <div className='text-[12px] m-auto'>
                <LanguageSelector></LanguageSelector>
            </div>
        </footer>
    );
}

export default Footer;
