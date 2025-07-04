import React, { useState, useEffect } from 'react';
import BlackHeader from '../component/BlackHeader';
import { useTranslation } from 'react-i18next';
import buy from "../assets/cart/buy.png"
import plus from "../assets/close/x black.png"
import { useLocation } from 'react-router';

const KebabProduct = () => {
    const location = useLocation();
    const state = location.state;

    const kebab = state.product;

    //Hooks
    const [price, setPrice] = useState(0)
    const [removeIngredients, setRemoveIngredients] = useState([])
    const { t } = useTranslation()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

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
        if(kebab.id < 2){
            switch(component){
            case "small":
                setSize("small")
                break;
            case "xl":
                setSize("xl")
                break;
            default:
                setSize("large")
                break;
            }
        } else {
            switch(component){
            case "small":
                setSize("small")
                break;
            default:
                setSize("medium")
                break;
            }
        }
    }

    //Sauce
    const [sauce, setSauce] = useState("garlic");
    const onChangeSauce = (event) => {
        const sauce = event.target.value;
        setSauce(sauce);
    }

    //Left toppings
    const toppingsLeft = t("toppings-left-pita-kebab",  { returnObjects: true });
    const [checkedLeftToppings, setCheckedLeftToppings] = useState([])

    const onClickLeftToppings = (event) => {
        const {value, checked} = event.target;

        if(!checked){
            const filter = checkedLeftToppings.filter(topping => topping !== value)
            setCheckedLeftToppings(filter)
        } else {
            setCheckedLeftToppings(prev => [...prev, value]);
        }
    }

    const listLeftCheckBoxes = toppingsLeft.map((topping, index) => {

        const id = topping.id;
        var price;
        switch (id){
            case 0:
                price = "1,25 €";
                break;
            case 1:
                price = "1,17 €";
                break;
            case 2:
                price = "0,67 €";
                break;
            default:
                break;
        }

        return (
            <label key={index} className="flex flex-row gap-3 w-full">
                <input
                    className="toppings-checkbox-input hidden"
                    id={"l-"+topping.id}
                    name="topping"
                    type="checkbox"
                    value={topping.topping}
                    onChange={(e) => onClickLeftToppings(e)}
                />
                <span className="toppings-checkbox-text w-full">{topping.topping} - {price}</span>
            </label>
        );
    });

    //Right toppings
    const toppingsRight = t("toppings-right-pita-kebab",  { returnObjects: true });
    const [checkedRightToppings, setCheckedRightToppings] = useState([])
    const onClickRightToppings = (event) => {
        const {value, checked} = event.target;

        if(!checked){
            const filter = checkedRightToppings.filter(topping => topping !== value)
            setCheckedRightToppings(filter)
        } else {
            setCheckedRightToppings(prev => [...prev, value]);
        }
    }


    const listRightCheckBoxes = toppingsRight.map((topping, index) => {

        return (
            <label key={index} className="flex flex-row gap-3 w-full">
                <input
                    className="toppings-checkbox-input hidden"
                    id={"r-"+topping.id}
                    name="topping"
                    type="checkbox"
                    value={topping.topping}
                    onChange={(e) => onClickRightToppings(e)}
                />
                <span className="toppings-checkbox-text w-full">{topping.topping}</span>
            </label>
        );
    })

    //Calculate price
    useEffect(() => {
            let calcSize;
            console.log(size);
            if(kebab.id < 2){
                switch(size){
                case "small":
                    calcSize = 369
                    break;
                case "xl":
                    calcSize = 639
                    break;
                default:
                    calcSize = 539;
                    break;
                }
            } else {
                switch(size){
                case "small":
                    calcSize = 369
                    break;
                default:
                    calcSize = 449;
                    break;
                }
            }
            

            let calcSauce = 70; 
            
            let calcToppingsLeft = 0 ;
            checkedLeftToppings.forEach((topping) => {
                const index = toppingsLeft.indexOf(topping);
                switch(index){
                    case 0:
                        calcToppingsLeft += 125
                        break;
                    case 1:
                        calcToppingsLeft += 117
                        break;
                    default:
                        calcToppingsLeft += 67
                        break;
                }
            });

            let calcToppingsRight = checkedRightToppings.length;
    
            setPrice(calcSize + calcSauce + calcToppingsLeft + 70 * calcToppingsRight);
        }, [size, sauce, checkedLeftToppings, checkedRightToppings]);


    //order
    const order = (event) => {
        event.preventDefault();
        const orderDetails = {
            type: "kebab",
            kebab: kebab,
            size: size,
            sauce: sauce,
            ingredientsRemove: removeIngredients,
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
        <div className='h-full'>
            <BlackHeader url = {"/kebab"} showKebab = {true} showPizza = {false} ></BlackHeader>
            <div className='bg-[#B98FA0] pt-20 pb-5 justify-center flex h-full'>
                <div className='grid grid-cols-2 grid-row-5 gap-y-6 max-w-[400px]'>
                    <div className='flex items-center justify-center'>
                        <img src = {kebab.src} className='h-[283px]'></img>
                    </div>
                    <div>
                        <div className='h-1/2 justify-center flex items-center'>
                            <div className='flex flex-row items-end gap-5 w-[163px]'>
                                <img src = {kebab.numberSrc} className='w-10 h-10'></img>
                                <button className='relative flex z-2' onClick={(e) => order(e)} >
                                    <img src = {buy} className='w-20'></img>
                                    <div className='z-1 absolute text-white flex flex-row m-auto w-full h-full justify-center items-center'>
                                        <p className='text-lg'>{(price/100).toFixed(2)}</p>
                                        <p className='font-bold text-lg'>$</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='h-1/2 justify-center flex text-[16px] items-baseline'>
                            <div>
                                {kebab.ingredients.map((ingredient, index) => 
                                    <label key = {ingredient+index} className='flex flex-row gap-3'>
                                        <input className="ingredients-checkbox-input hidden" name="ingredient" onChange={(e) => handleSelect(e,ingredient)} type="checkbox"/>
                                        <span className="ingredients-checkbox-text">{ingredient}</span>
                                        <img id = {ingredient} src = {plus} className='w-5 h-5'></img>
                                    </label>
                                )}
                            </div>
                        </div>  
                    </div>
                    {kebab.id < 2
                        ?
                            <div className="col-span-2 pt-20px flex justify-center text-xl gap-1" onChange={(e) => onChangeSize(e)}>
                                <input type="radio" id="sm" value="small" name="size" className='size-radiobox-input' /> 
                                <label htmlFor="sm" className='size-radiobox-text w-[30%]'>{t("size.small")}</label>
                                
                                <input type="radio" id="lg" value="large"  name="size" className='size-radiobox-input' defaultChecked/>
                                <label htmlFor="lg" className='size-radiobox-text w-[30%]'>{t("size.large")}</label>

                                <input type="radio" id="xl" value="xl"  name="size" className='size-radiobox-input'/>
                                <label htmlFor="xl" className='size-radiobox-text w-[30%]'>{t("size.xl")}</label>
                            </div>
                        :
                            <div className="col-span-2 pt-20px flex justify-center text-xl gap-1" onChange={(e) => onChangeSize(e)}>
                                <input type="radio" id="sm" value="small" name="size" className='size-radiobox-input' /> 
                                <label htmlFor="sm" className='size-radiobox-text w-[45%]'>{t("size.small")}</label>
                                
                                <input type="radio" id="md" value="medium"  name="size" className='size-radiobox-input' defaultChecked/>
                                <label htmlFor="md" className='size-radiobox-text w-[45%]'>{t("size.medium")}</label>
                            </div>
                    }
                    

                    <div className="col-span-2 pt-20px flex align-middle flex-col gap-1 text-xl" onChange={(e) => onChangeSauce(e)}>
                        
                        <h2 className='text-center font-bold'>{t("sauce.sauce")}</h2>

                        <div className='w-full flex justify-center gap-1'>
                            <input type="radio" id="s-4" value={t("sauce.garlic")} name="sauce" className='size-radiobox-input'defaultChecked/> 
                            <label htmlFor="s-4" className='size-radiobox-text  w-[45%]'>{t("sauce.garlic")}</label>
                        
                            <input type="radio" id="s-5" value={t("sauce.spicy")}  name="sauce" className='size-radiobox-input'/>
                            <label htmlFor="s-5" className='size-radiobox-text w-[45%]'>{t("sauce.spicy")}</label>
                        </div>

                        <div className='w-full flex justify-center gap-1'>
                            <input type="radio" id="s-6" value={t("sauce.hot")} name="sauce" className='size-radiobox-input' /> 
                            <label htmlFor="s-6" className='size-radiobox-text w-[45%]'>{t("sauce.hot")}</label>
                            
                            <input type="radio" id="s-7" value={t("sauce.mix")}  name="sauce" className='size-radiobox-input'/>
                            <label htmlFor="s-7" className='size-radiobox-text w-[45%]'>{t("sauce.mix")}</label>
                        </div>
                    </div>

                    <div className="col-span-2 pt-20px flex align-middle flex-col gap-1 justify-center">
                        
                        <div className='flex flex-row justify-between w-full pl-[5%] pr-[5%] text-xl'>
                            <div className='w-[53px]'></div>
                            <h2 className='text-center font-bold'>{t("toppings")}</h2>
                            <div>0,70 €</div>
                        </div>
                        <div className='flex flex-row justify-center gap-1 gap-x-1'>
                            <div className='flex flex-col gap-2 w-[45%] text-base'>
                                <div className='gap-1 flex flex-col'>{listLeftCheckBoxes}</div>
                            </div>
                            <div className='flex flex-col gap-2 w-[45%] text-base'>
                                <div className='gap-1 flex flex-col'>{listRightCheckBoxes}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default KebabProduct;
