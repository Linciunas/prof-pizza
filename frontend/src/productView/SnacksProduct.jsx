import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import BlackHeader from '../component/BlackHeader';
import { useTranslation } from 'react-i18next';
import buy from "../assets/cart/buy.png"

const SnacksProduct = () => {

    const {t} = useTranslation();

    const location = useLocation();
    const state = location.state;

    const snack = state.product;

    const [size, setSize] = useState()
    const onChangeSize = (event) => {
        setSize(event.target.value)
    }

    const [sauce, setSauce] = useState([]);
    const initSauce = t("sauce.garlic");
    const initSizeFries = "Didelis";
    const initSizeNuggets = "12vnt.";

    useEffect(() => {
    if (snack.id === 1) {
        setSauce(prev => [...prev, initSauce]);
        setSize(initSizeNuggets)
    } else {
        setSize(initSizeFries)
    }
    }, [snack.id]);
    
    const onChangeSauce = (event) => {
        const {value, checked} = event.target;

        if(!checked){
            const filter = sauce.filter(sauce => sauce !== value)
            setSauce(filter)
        } else {
            setSauce(prev => [...prev,value])
        }
    }

    useEffect(() => {
            window.scrollTo(0, 0);
    }, [location.pathname]);
    
    const [price, setPrice] = useState();
    useEffect(() => {

        var calcSize = 0;
        var calcSauce = sauce.length * 70;
        console.log(size, sauce)
        if(snack.id == 1){
            switch(size){
                case "4vnt":
                    calcSize = 219;
                    break;
                case "6vnt":
                    calcSize = 289
                    break
                default:
                    calcSize = 579
                    if(sauce.length > 0){
                        calcSauce = (sauce.length - 1) * 70                    
                    }
                    break;
            }
            
        } else {
            switch(size){
                case "Mažas":
                    calcSize = 119;
                    break;
                case "Vidutinis":
                    calcSize = 239
                    break
                default:
                    calcSize = 349
                    break;
            }
        }
        
        setPrice(calcSize + calcSauce)

    }, [size, sauce])

    const order = (event) => {
        event.preventDefault();
        const orderDetails = {
            type: "snacks",
            snack: snack,
            size: size,
            sauce: sauce,
            price: price
        };

        console.log("Order placed:", orderDetails);
        alert("Order placed successfully!"); 
        
        if(localStorage.getItem("order") == null){
            localStorage.setItem("order", JSON.stringify([orderDetails]));
        } else {
            const existingOrders = JSON.parse(localStorage.getItem("order"));
            existingOrders.push(orderDetails);
            localStorage.setItem("order", JSON.stringify(existingOrders));
        }
    }
    return (
        <>
            <BlackHeader url = {"/snacks"} showPizza = {false} showKebab = {true}></BlackHeader>
            <div className='bg-[#C2A258] h-full pt-[74px] justify-center flex'>
                <div className='flex flex-col w-70'>
                    <div className='flex flex-row'>
                        <div>
                            <img  className = "w-40"src = {snack.src}></img>
                        </div>
                        <div className='flex flex-col items-center gap-4' onClick={(e) => order(e)}>
                            <button className='relative flex z-2'>
                                <img src = {buy} className='w-20'></img>
                                <div className='z-1 absolute text-white flex flex-row m-auto w-full h-full justify-center items-center'>
                                    <p className='text-lg'>{(price/100).toFixed(2)}</p>
                                    <p className='font-bold text-lg'>€</p>
                                </div>
                            </button>
                            <div className='text-xl'>
                                {snack.title}
                            </div>
                        </div>
                    </div>
                    {snack.id == 1
                        ?
                            <div>
                                <div className="col-span-2 pt-20px flex justify-center text-base gap-1" onChange={(e) => onChangeSize(e)}>
                                    <input type="radio" id="4vnt" value="4vnt" name="size" className='size-radiobox-input' /> 
                                    <label htmlFor="4vnt" className='size-radiobox-text w-[30%]'>{t("size.4pieces")}</label>
                                    
                                    <input type="radio" id="6vnt" value="6vnt"  name="size" className='size-radiobox-input'/>
                                    <label htmlFor="6vnt" className='size-radiobox-text w-[30%]'>{t("size.6pieces")}</label>

                                    <input type="radio" id="12vnt" value="12vnt"  name="size" className='size-radiobox-input' defaultChecked/>
                                    <label htmlFor="12vnt" className='size-radiobox-text w-[30%]'>{t("size.12pieces")}</label>    
                                </div>
                            </div>
                        :
                            <div>
                                <div className="col-span-2 pt-20px flex justify-center text-base gap-1" onChange={(e) => onChangeSize(e)}>
                                    <input type="radio" id="sm" value="Mažas" name="size" className='size-radiobox-input' /> 
                                    <label htmlFor="sm" className='size-radiobox-text w-[30%]'>{t("size.small")}</label>
                                    
                                    <input type="radio" id="md" value="Vidutinis"  name="size" className='size-radiobox-input'/>
                                    <label htmlFor="md" className='size-radiobox-text w-[30%]'>{t("size.medium")}</label>

                                    <input type="radio" id="lg" value="Didelis"  name="size" className='size-radiobox-input' defaultChecked/>
                                    <label htmlFor="lg" className='size-radiobox-text w-[30%]'>{t("size.large")}</label>    
                                </div>
                            </div>

                    }

                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row justify-between w-full pt-3 pl-2 pr-2'>
                            <div  className='w-12'></div>
                            <h2 className='text-center font-bold'>{t("sauce.sauce")}</h2>
                            {snack.id == 1
                                ? <div  className='w-12'></div>
                                : <div className='w-12'>0,70 €</div>
                            }
                        </div>

                        <div className='w-full flex justify-center gap-1' onChange={(e) => onChangeSauce(e)}>
                            {snack.id == 1
                                ?   <input type="checkbox" id="4" value={t("sauce.garlic")} name="sauce" className='size-radiobox-input' defaultChecked/> 
                                 
                                :   <input type="checkbox" id="4" value={t("sauce.garlic")} name="sauce" className='size-radiobox-input'/> 
                                   
                            }
                            <label htmlFor="4" className='size-radiobox-text  w-[45%]'>{t("sauce.garlic")}</label>
                        
                            <input type="checkbox" id="5" value={t("sauce.spicy")}  name="sauce" className='size-radiobox-input'/>
                            <label htmlFor="5" className='size-radiobox-text w-[45%]'>{t("sauce.spicy")}</label>
                        </div>

                        <div className='w-full flex justify-center gap-1' onChange={(e) => onChangeSauce(e)}>
                        <input type="checkbox" id="6" value={t("sauce.hot")} name="sauce" className='size-radiobox-input' /> 
                        <label htmlFor="6" className='size-radiobox-text w-[30%]'>{t("sauce.hot")}</label>
                        
                        <input type="checkbox" id="7" value={t("sauce.bbq")}  name="sauce" className='size-radiobox-input'/>
                        <label htmlFor="7" className='size-radiobox-text w-[30%]'>{t("sauce.bbq")}</label>
                        
                        <input type="checkbox" id="8-" value={t("sauce.ketchup")}  name="sauce" className='size-radiobox-input'/>
                        <label htmlFor="8-" className='size-radiobox-text w-[30%]'>{t("sauce.ketchup")}</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SnacksProduct;
