import React from 'react';
import Header from '../component/Header';
import MenuButton from '../component/MenuButton';
import NavigationSection from '../component/NavigationSection';
import { useTranslation } from 'react-i18next';
import LeftComponent from '../component/LeftComponent';
import RightComponent from '../component/RightComponent';

const Kebab = () => {
    const { t } = useTranslation()

    const kebab = t("kebab", {returnObjects: true})

    const url = [
        "kebab-lavash/chicken",
        "kebab-lavash/pork",
        "kebab-tortilla/chicken",
        "kebab-tortilla/pork"
    ]

    const listItems = kebab.map((kebab, index) => {
        return (
            <div key={index} className="flex justify-center">
                {index % 2 === 0 
                ? 
                    <div key={index} className="flex justify-start w-70"> 
                        <LeftComponent product={kebab} url={url[index]} /> 
                    </div>
                : 
                    <div key={index} className="flex justify-end w-65">
                        <RightComponent product={kebab} url={url[index]} />
                    </div>
                }
            </div>
        );
    })      

    return (
        <>
            <Header show={"show"}></Header>
            <MenuButton></MenuButton>
            <NavigationSection></NavigationSection>
            <div className='bg-[#B98FA0] h-auto pt-[74px] pb-[10px] w-full'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl pt-3 pb-4'>{t("kebab-text")}</h1>
                </div>
                {listItems}
            </div>
        </>
        
    );
}

export default Kebab;
