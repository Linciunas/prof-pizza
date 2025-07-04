import React from 'react';
import { Link } from 'react-router';
import { useState } from 'react';
import buy from "../assets/cart/buy.png"

export default function ProductComponent(props){

    const left = props.left;
    const product = props.product;
    const url = props.url;
    const price = props.price;

    function isMobile() {
      const minWidth = 480;
      return window.innerWidth < minWidth || screen.width < minWidth;
    }

    let mobile = Boolean(isMobile())


    return (
        <Link to = {"/"+url} state = {{product}}>
            {product.ingredients != null
                ?
                    <div className='flex flex-row justify-center gap-2'>
                        <div className='flex flex-col justify-center items-center gap-1'>
                            <div className='text-[18px]'>{product.title}</div>
                            {mobile
                                ?   <img src = {product.src} className='max-w-50 max-h-45'></img>
                                :   <img src = {product.src} className='max-w-60 max-h-55'></img>
                            }
                        </div>
                        <div>
                            <div>
                                <button className='relative flex z-2'>
                                    <img src = {buy} className='w-20'></img>
                                    <div className='z-1 absolute text-white flex flex-row m-auto w-full h-full justify-center items-center'>
                                        <p className='text-lg'>{(price/100).toFixed(2)}</p>
                                        <p className='font-bold text-lg'>€</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                :
                <>
                    {left === true
                        ?
                            <div className='flex flex-row justify-center gap-2'>
                                <div>
                                    {mobile
                                        ?   <img src = {product.src} className='max-w-50 max-h-45'></img>
                                        :   <img src = {product.src} className='max-w-60 max-h-55'></img>
                                    }
                                </div>

                                <div className='flex flex-col justify-center items-center gap-3'>
                                    <div className='text-[18px]'>{product.title}</div>
                                    <div>
                                        <button className='relative flex z-2'>
                                            <img src = {buy} className='w-20'></img>
                                            <div className='z-1 absolute text-white flex flex-row m-auto w-full h-full justify-center items-center'>
                                                <p className='text-lg'>{(price/100).toFixed(2)}</p>
                                                <p className='font-bold text-lg'>€</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        :
                            <div className='flex flex-row justify-center gap-2'>
                                <div className='flex flex-col justify-center items-center gap-3'>
                                    <div className='text-[18px]'>{product.title}</div>
                                    <div>
                                        <button className='relative flex z-2'>
                                            <img src = {buy} className='w-20 cursor-pointer'></img>
                                            <div className='z-1 absolute text-white flex flex-row m-auto w-full h-full justify-center items-center'>
                                                <p className='text-lg'>{(price/100).toFixed(2)}</p>
                                                <p className='font-bold text-lg'>€</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    {mobile
                                        ?   <img src = {product.src} className='max-w-50 max-h-45'></img>
                                        :   <img src = {product.src} className='max-w-60 max-h-55'></img>
                                    }
                                </div>
                            </div>
                    }
                </>
            }

        </Link>
    );
}


