import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next"
import buy from "../assets/cart/buy.png"
import plus from "../assets/close/x black.png"
import BlackHeader from '../component/BlackHeader';

export default function PizzaProduct(){
    const location = useLocation();
    const state = location.state;

    //Hooks
    const [price, setPrice] = useState(1069)
    const [removeIngredients, setRemoveIngredients] = useState([])
    const { t } = useTranslation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    const pizza = state.product;
    const isOdd = pizza.id != null ? pizza.id % 2 == 0 : null;

    // OnClick Rotate image of ingredient
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

    const [size, setSize] = useState("30");

    //Size
    const onChangeSize = (event) => {
        const component = event.target.value;
        switch(component){
            case "Snack":
                setSize("Snack")
                break
            case "40 cm":
                setSize("40 cm")
                break
            default:
                setSize("30 cm")
                break
        }
    }

    //Sauce
    const [sauce, setSauce] = useState("garlic");
    const onChangeSauce = (event) => {
        const sauce = event.target.value;
        setSauce(sauce);
    }


    //Left Toppings
    const toppingsLeft = t("toppings-left", { returnObjects: true });
    const [checkedLeftToppings, setCheckedLeftToppings] = useState([]);
    const [disabledLeft, setDisabledLeft] = useState(false)
    const onClickLeftToppings = (event) => {
        
        const {value, checked} = event.target;
        
        if(!checked) {
            const filteredToppings = checkedLeftToppings.filter(topping => topping !== value);
            setCheckedLeftToppings(filteredToppings);
            if(disabledLeft && checkedLeftToppings.length == 2){
                setDisabledLeft(false);
            }
        } else if(checkedLeftToppings.length < 2 && checked){
            setCheckedLeftToppings(prev => [...prev, value]);
            if(checkedLeftToppings.length == 1) {
                setDisabledLeft(true);
            }
        } 
    };
    
    const listLeftCheckBoxes = toppingsLeft.map((topping, index) => {
        const isDisabled = disabledLeft && !checkedLeftToppings.includes(topping.topping.toString());
        return (
            <label key={index} className="flex flex-row gap-3 w-full">
                <input
                    className="toppings-checkbox-input hidden"
                    id={topping.id}
                    name="topping"
                    type="checkbox"
                    value={topping.topping}
                    onChange={(e) => onClickLeftToppings(e)}
                    disabled={isDisabled}
                />
                <span className="toppings-checkbox-text w-full">{topping.topping}</span>
            </label>
        );
    });

    //Right Toppings
    const toppingsRight = t("toppings-right", { returnObjects: true });
    const [checkedRightToppings, setCheckedRightToppings] = useState([]);
    const [disabledRight, setDisabledRight] = useState(false)
    const onClickRightToppings = (event) => {
        const {value, checked} = event.target;
        
        if(!checked) {
            const filteredToppings = checkedRightToppings.filter(topping => topping !== value);
            setCheckedRightToppings(filteredToppings);
            if(disabledRight && checkedRightToppings.length == 3){
                setDisabledRight(false);
            }
        } else if(checkedRightToppings.length < 3 && checked){
            setCheckedRightToppings(prev => [...prev, value]);
            if(checkedRightToppings.length == 2) {
                setDisabledRight(true);
            }
        } 
    }

    const listRightCheckBoxes = toppingsRight.map((topping, index) => {
        const isDisabled = disabledRight && !checkedRightToppings.includes(topping.topping.toString());
        return (
            <label key={index} className='flex flex-row gap-3 w-full'>
                <input 
                    className="toppings-checkbox-input hidden" 
                    id={topping.id} 
                    name="topping" 
                    onChange={(e) => onClickRightToppings(e)} 
                    disabled={isDisabled}
                    value={topping.topping}
                    type="checkbox"
                />
                <span className="toppings-checkbox-text w-full">{topping.topping}</span>
            </label>
        );
    })

    //Calculate price 
    useEffect(() => {
        let calcSize = 1;
        switch(size){
            case "Snack":
                calcSize = 0.6;
                break;
            case "40 cm":
                calcSize = 0;
                break;
            default:
                calcSize = 1/3;
                break;
        }

        let calcSauce = 0;
        switch(sauce){
            case "ketchup":
                calcSauce = 40;
                break;
            default:
                calcSauce = 70;
                break;
        }
        
        let calcToppingsLeft = checkedLeftToppings.length;
        let calcToppingsRight = checkedRightToppings.length;

        setPrice((1500 - calcSize * 1500) - 1 + calcSauce + 125 * calcToppingsLeft + 65 * calcToppingsRight);
    }, [size, sauce, checkedLeftToppings, checkedRightToppings]);

    // Order
    const order = (event) => {
        event.preventDefault();
        const orderDetails = {
            type: "pizza",
            pizza: pizza,
            size: size,
            sauce: sauce,
            ingredients: removeIngredients,
            toppingsLeft: checkedLeftToppings,
            toppingsRight: checkedRightToppings,
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
        <div className='h-auto'>
            <BlackHeader url = {"/"} showKebab = {false} showPizza = {true} ></BlackHeader>
            <div className='pt-20 pb-5 bg-[#cd9777] h-full flex justify-center'>
                <div className='grid grid-cols-2 grid-row-4 gap-y-6 max-w-120'>
                    <div>
                        {isOdd 
                            ?
                            <img src = {pizza.src}></img>
                            :
                            <img src = {pizza.src} className='-scale-x-100 w-full'></img>
                        }
                    </div>
                    <div>
                        <div className='h-1/2'>
                            <div className='flex flex-row items-end gap-5 justify-center'>
                                <img src = {pizza.numberSrc} className='w-10 h-10'></img>
                                <button className='relative flex z-2' onClick={(e) => order(e)} >
                                    <img src = {buy} className='w-20'></img>
                                    <div className='z-1 absolute text-white flex flex-row m-auto w-full h-full justify-center items-center'>
                                        <p className='text-lg'>{(price/100).toFixed(2)}</p>
                                        <p className='font-bold text-lg'>$</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='h-1/2 justify-center flex text-[16px] items-center'>
                        <div>
                            {pizza.ingredients.map((ingredient, index) => 
                                <label key = {ingredient+index} className='flex flex-row gap-3'>
                                    <input className="ingredients-checkbox-input hidden" name="ingredient" onChange={(e) => handleSelect(e,ingredient)} type="checkbox"/>
                                    <span className="ingredients-checkbox-text">{ingredient}</span>
                                    <img id = {ingredient} src = {plus} className='w-5 h-5'></img>
                                </label>
                            )}
                        </div>
                            
                        </div>  
                    </div>
                    <div className="col-span-2 pt-20px flex justify-center text-xl" onChange={(e) => onChangeSize(e)}>
                        <input type="radio" id="1" value="Snack" name="size" className='size-radiobox-input' /> 
                        <label htmlFor="1" className='size-radiobox-text w-[30%]'>{t("size.snack")}</label>
                        
                        <input type="radio" id="2" value="30 cm"  name="size" className='size-radiobox-input' defaultChecked/>
                        <label htmlFor="2" className='size-radiobox-text w-[30%]'>{t("size.30cm")}</label>
                        
                        <input type="radio" id="3" value="40 cm"  name="size" className='size-radiobox-input'/>
                        <label htmlFor="3" className='size-radiobox-text w-[30%]'>{t("size.40cm")}</label>
                    </div>

                    <div className="col-span-2 pt-20px flex align-middle flex-col gap-1 text-xl" onChange={(e) => onChangeSauce(e)}>
                        
                        <div className='flex flex-row justify-between w-full pl-[5%] pr-[5%]'>
                            <div className='w-[42px]'></div>
                            <h2 className='text-center font-bold'>{t("sauce.sauce")}</h2>
                            <div className='right'>0,70 €</div>
                        </div>
                        <div className='w-full flex justify-center text-xl'>
                            <input type="radio" id="4" value={t("sauce.garlic")} name="sauce" className='size-radiobox-input' defaultChecked/> 
                            <label htmlFor="4" className='size-radiobox-text  w-[45%]'>{t("sauce.garlic")}</label>
                        
                            <input type="radio" id="5" value={t("sauce.spicy")}  name="sauce" className='size-radiobox-input'/>
                            <label htmlFor="5" className='size-radiobox-text w-[45%]'>{t("sauce.spicy")}</label>
                        </div>
                        <div className='w-full flex justify-center'>
                        <input type="radio" id="6" value={t("sauce.hot")} name="sauce" className='size-radiobox-input' /> 
                        <label htmlFor="6" className='size-radiobox-text w-[30%]'>{t("sauce.hot")}</label>
                        
                        <input type="radio" id="7" value={t("sauce.bbq")}  name="sauce" className='size-radiobox-input'/>
                        <label htmlFor="7" className='size-radiobox-text w-[30%]'>{t("sauce.bbq")}</label>
                        
                        <input type="radio" id="8-" value={t("sauce.ketchup")}  name="sauce" className='size-radiobox-input'/>
                        <label htmlFor="8-" className='size-radiobox-text w-[30%]'>{t("sauce.ketchup")}</label>
                        </div>
                    </div>

                    <div className="col-span-2 pt-20px flex align-middle flex-col gap-1 justify-center" onChange={(e) => onChangeSauce(e)}>
                        
                        <div className='flex flex-row justify-between w-full pl-[5%] pr-[5%] text-xl'>
                            <div>1,25 €</div>
                            <h2 className='text-center font-bold'>{t("toppings")}</h2>
                            <div>0,65 €</div>
                        </div>
                        <div className='flex flex-row justify-center gap-2'>
                            <div className='flex flex-col gap-2 w-[45%] text-[17px]'>
                                {listLeftCheckBoxes}
                            </div>
                            <div className='flex flex-col gap-2 w-[45%] text-[17px]'>
                                {listRightCheckBoxes}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


