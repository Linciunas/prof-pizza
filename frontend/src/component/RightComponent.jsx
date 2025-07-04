import React from 'react';
import { Link } from 'react-router';

export default function RightComponent(props){
    let product = props.product;
    let url = props.url;

    function isMobile() {
      const minWidth = 480;
      return window.innerWidth < minWidth || screen.width < minWidth;
    }

    let mobile = Boolean(isMobile())

    if(product.src.includes('pizza')){
        if(!isMobile()){
            const desktopSrc = product.src.replace("phone","desktop")
            product.src = desktopSrc;
        }
    }

    

    return (
        <div className='flex justify-end'>
            <Link to = {"/"+url} state={{product}}>
                <div className='table-cell align-middle'>
                    <div className='flex flex-col'>
                        <div className='flex justify-end pr-4'>
                            <img src = {product.numberSrc} className='w-12'></img>
                        </div>

                        <div className='w-40 text-end pr-4'>
                            {product.title.map((key) =>
                                <p key={key+url} className='pt-1'>{key}</p>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className='table-cell'>
                    {product.src.includes("pizza")
                        ?
                            <img className = {`${mobile ? "w-45": "w-70"} float-right`} src = {product.src}></img>

                        :
                            <img className = {`w-50 float-right`} src = {product.src}></img>
                    }
                </div>

                
            </Link>
        </div>
    );
}

