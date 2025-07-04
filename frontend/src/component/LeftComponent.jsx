import React from 'react';
import { Link } from 'react-router';


export default function LeftComponent(props){
    let product = props.product;
    let url =  props.url

    function isMobile() {
      const minWidth = 480; // Minimum width for desktop devices
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
        <div className='flex float-left'>
            <Link to = {"/"+url} state={{product}}>
                <div className='table-cell'> 
                    {product.src.includes("pizza")
                        ?
                            <img className = {`${mobile ? "w-45": "w-70"} float-right`} src = {product.src}></img>

                        :
                            <img className = {`w-50 float-right`} src = {product.src}></img>
                    }
                </div>

                <div className='table-cell align-middle pl-4'>
                    <div>
                        <div>
                            <img src = {product.numberSrc} className='w-12'></img>
                        </div>
                        <div className='w-40'>
                            {product.title.map((key) =>
                                <p key={key+url}>{key}</p>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        
    );
}





