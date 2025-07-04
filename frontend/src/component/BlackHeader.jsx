import React from 'react';
import { Link } from 'react-router-dom';
import LogoPizza from './LogoPizza.jsx';
import icon from "../assets/close/x.png"
import LogoKebab from './LogoKebab.jsx';

const BlackHeader = (props) => {

    const url = props.url;
    const showPizza = props.showPizza;
    const showKebab = props.showKebab;

    return (
        <div className='bg-black h-16 align-middle fixed w-full flex flex-row justify-between pr-[7px] pl-[7px] items-center z-10'>
            <div className={`flex flex-row ${showPizza && showKebab ? 'gap-4' : ''}`}>
                {showPizza
                    ?   <LogoPizza  size = "w-13"></LogoPizza>
                    :   <div></div>
                }

                {showKebab
                    ?   <LogoKebab  size = "w-12"></LogoKebab>
                    :   <div></div>               
                }

            </div>
            <Link to={url}>
                <img src = {icon} className='w-10'></img>
            </Link>
        </div>
    );
}

export default BlackHeader;
