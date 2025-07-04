import React from 'react';
import Header from '../component/Header';
import MenuButton from '../component/MenuButton';
import NavigationSection from '../component/NavigationSection';
import { useTranslation } from 'react-i18next';
import LeftComponent from '../component/LeftComponent';
import RightComponent from '../component/RightComponent';

const Pita = () => {
    const { t } = useTranslation()

    const pitas = t("pita", {returnObjects: true})

    const url = [
        "pita-gyros/chicken",
        "pita-gyros/pork",
    ]

    const listItems = pitas.map((pita, index) => {
        return (
            <div key={index} className="flex justify-center mw-[400px]">
                {index % 2 === 0 
                ? 
                    <div key={index} className="flex justify-start"> 
                        <LeftComponent product={pita} url={url[index]} /> 
                    </div>
                : 
                    <div key={index} className="flex justify-end">
                        <RightComponent product={pita} url={url[index]} />
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
            <div className='bg-blue-300 h-auto pt-[64px] w-full'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl pt-3 pb-4'>{t("pita-text")}</h1>
                </div>
                {listItems}
            </div>
        </>
        
    );
}

export default Pita;
