import React from 'react';
import Header from '../component/Header';
import MenuButton from '../component/MenuButton';
import NavigationSection from '../component/NavigationSection';
import { useTranslation } from 'react-i18next';
import SnacksComponent from "../component/SnacksComponent";

const Snacks = () => {

    const {t} = useTranslation();

    const snacks = t("snacks", {returnObjects: true})

    const url = [
        "snacks/kebab-in-dish",
        "snacks/nuggets",
        "snacks/french-fries"
    ]

    const price = [679, 219, 129]


    const listItems = snacks.map((snack, index) => {
        
        let left = Boolean(snack.id % 2 == 0);

        return(
            <SnacksComponent key = {snack.id} left = {left} product = {snack} url={url[index]} price = {price[index]}></SnacksComponent>
        );
    })

    return (
        <>
            <Header show={"show"}></Header>
            <MenuButton></MenuButton>
            <NavigationSection></NavigationSection>
            <div className='bg-[#C2A258] h-full pt-[74px] justify-center'>
                <div className='flex justify-center flex-col gap-5'>
                    {listItems}
                </div>
            </div>
        </>
    );
}

export default Snacks;
