import React from 'react';
import { useLocation } from 'react-router';
import BlackHeader from '../component/BlackHeader';
import buy from "../assets/cart/buy.png"
import plus from "../assets/close/x black.png"
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const KebabDishProduct = () => {

    const {t} = useTranslation()
    
    const location = useLocation();
    const state = location.state;

    const kebabDish = state.product;

    const firstColumn = kebabDish.ingredients.slice(1, 4);
    const secondColumn = kebabDish.ingredients.slice(4, 8);

    const [meat, setMeat] = useState("Vištiena")

    const [removeIngredients, setRemoveIngredients] = useState([])
    const handleSelect = (event, ingredient) => {
        const isChecked = event.target.checked;
        const image = document.getElementById(ingredient);

        if (isChecked) {
            setRemoveIngredients(prev => [...prev, ingredient]);
            image.classList.add("rotate-45");
        } else {
            setRemoveIngredients(prev => prev.filter(item => item !== ingredient));
            image.classList.remove("rotate-45");
        }       
    }

    console.log("remove",removeIngredients)

    const [showMeat, setShowMeat] = useState(true);
    const onChangeMeat = (e) => {
        setMeat(e.target.value);
    }


    const [sauce, setSauce] = useState("Česnakinis");
    const onChangeSauce = (e) => {
        console.log(e.target.value);
    }

    useEffect(() => {
            window.scrollTo(0, 0);
        }, [location.pathname]);
    
    useEffect(() => {
        if(meat === t("size.chicken")){
            setMeat(t("size.chicken"))
            setRemoveIngredients(prev => prev.filter(item => item !== ingredient));
        } else {
            setMeat(t("size.pork"))
            setRemoveIngredients(prev => prev.filter(item => item !== ingredient));
        }
    }, [meat])


    return (
        <>
            <BlackHeader url = {"/snacks"} showPizza = {false} showKebab = {true}></BlackHeader>
            <div className='bg-[#C2A258] h-full pt-[74px] justify-center flex'>
                <div className='flex flex-col max-w-120'>
                    <div className='flex flex-row justify-center'>
                        <div className='flex flex-col justify-center items-center'>
                            <h2>title</h2>
                            <img src = {kebabDish.src} className='w-50'></img>
                        </div>
                        <div className='flex justify-center'>
                            buy
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 justify-center'>
                        <div className='flex flex-col'>
                            {firstColumn.map((ingredient, index) => (
                                <div key={index}>
                                    <label key = {ingredient+index} className='flex flex-row gap-3'>
                                        {index == 0
                                            ?   <>
                                                    <input className="ingredients-checkbox-input hidden" name="ingredient" onChange={(e) => handleSelect(e,meat)} type="checkbox" />
                                                        <span className="ingredients-checkbox-text">{meat}</span>
                                                    <img id = {meat} src = {plus} className='w-5 h-5'></img>
                                                </>
                                            :
                                                <>
                                                    <input className="ingredients-checkbox-input hidden" name="ingredient" onChange={(e) => handleSelect(e,ingredient)} type="checkbox" />
                                                        <span className="ingredients-checkbox-text">{ingredient}</span>
                                                    <img id = {ingredient} src = {plus} className='w-5 h-5'></img>
                                                </>
                                        }
                                    </label>
                                </div>
                            ))}
                        </div>
                        
                        <div className='flex flex-col'>
                            {secondColumn.map((ingredient, index) => (
                                <label key = {ingredient+index} className='flex flex-row gap-3'>
                                    <input className="ingredients-checkbox-input hidden" name="ingredient" onChange={(e) => handleSelect(e,ingredient)} type="checkbox"/>
                                    <span className="ingredients-checkbox-text">{ingredient}</span>
                                    <img id = {ingredient} src = {plus} className='w-5 h-5'></img>
                                </label>
                            ))} 
                        </div>
                    </div>

                    <div className='w-full flex justify-center text-xl' onChange={(e) => onChangeMeat(e)}>
                            <input type="radio" id="chicken" value={"Vištiena"} name="meat" className='size-radiobox-input' defaultChecked/> 
                            <label htmlFor="chicken" className='size-radiobox-text  w-[45%]'>{t("size.chicken")}</label>
                        
                            <input type="radio" id="pork" value={"Kiauliena"}  name="meat" className='size-radiobox-input'/>
                            <label htmlFor="pork" className='size-radiobox-text w-[45%]'>{t("size.pork")}</label>
                        </div>

                    <div className="col-span-2 pt-20px flex align-middle flex-col gap-1 text-xl" onChange={(e) => onChangeSauce(e)}>
                        
                        <div className='flex flex-row justify-center w-full '>
                            <h2 className='text-center font-bold'>{t("sauce.sauce")}</h2>
                        </div>
                        <div className='w-full flex justify-center text-xl'>
                            <input type="radio" id="4" value={"Česnakinis"} name="sauce" className='size-radiobox-input' defaultChecked/> 
                            <label htmlFor="4" className='size-radiobox-text  w-[45%]'>{t("sauce.garlic")}</label>
                        
                            <input type="radio" id="5" value={"Pikantiškas"}  name="sauce" className='size-radiobox-input'/>
                            <label htmlFor="5" className='size-radiobox-text w-[45%]'>{t("sauce.spicy")}</label>
                        </div>
                        <div className='w-full flex justify-center'>
                        <input type="radio" id="6" value={"Aštrus"} name="sauce" className='size-radiobox-input' /> 
                        <label htmlFor="6" className='size-radiobox-text w-[30%]'>{t("sauce.hot")}</label>
                        
                        <input type="radio" id="7" value={"BBQ"}  name="sauce" className='size-radiobox-input'/>
                        <label htmlFor="7" className='size-radiobox-text w-[30%]'>{t("sauce.bbq")}</label>
                        
                        <input type="radio" id="8-" value={"Ketčupas"}  name="sauce" className='size-radiobox-input'/>
                        <label htmlFor="8-" className='size-radiobox-text w-[30%]'>{t("sauce.ketchup")}</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KebabDishProduct;
