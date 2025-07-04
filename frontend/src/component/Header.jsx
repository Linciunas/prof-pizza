import LogoPizza from "./LogoPizza.jsx"
import cart from "../assets/cart/basket.png"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header(props){
  const [showHeader, setShowHeader] = useState(false);
  const [price, setPrice] = useState(0);
  const show = props.show;
  const {t} = useTranslation();

  const banner = t("banner")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    if(localStorage.getItem("order") != null){
      const order = JSON.parse(localStorage.getItem("order"));
      order.forEach((item) => {
        setPrice(prev => prev + item.price);
      })
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cls = showHeader ? "show" : ""

    return (
    <header className={`header ${cls} ${show}`}>
        <div className="w-[77px]">
          <LogoPizza size = {"w-13"}></LogoPizza>
        </div>
        <div className="delivery-container">
            <img src={banner} alt="Wolt" className="delivery-logo"/>
        </div>

      <Link className="cart-container" to ="/order">
        <img className = "cart-icon" src = {cart}></img>
        <span>{(price/100).toFixed(2)}€</span>
        
      </Link>
    </header>
  );

  {}
}

export default Header