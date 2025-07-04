import { useTranslation } from "react-i18next"
import Header from "../component/Header.jsx"
import MenuButton from "../component/MenuButton.jsx"
import NavigationSection from "../component/NavigationSection.jsx"
import LandingZone from "../component/LandingZone.jsx"
import LeftComponent from "../component/LeftComponent.jsx"
import RightComponent from "../component/RightComponent.jsx"
import { useState, useEffect } from "react"
import Footer from "../component/Footer.jsx"

export default function App() {
  const { t } = useTranslation()
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location.pathname]);

  const url = [
    "pizza/pepper-olives-smoked cheese",
    "pizza/blue onions-cherry tomatoes-fresh basil",
    "pizza/mushrooms-blue onions-broccoli",
    "pizza/pepper-pineapple-fresh basil",
    "pizza/mushrooms-leeks-broccoli",
    "pizza/olives-dried tomatoes-spinach",
    "pizza/mushrooms-baked eggplants-pepper",
    "pizza/cherry tomatoes-blue onions-arugula",
    "pizza/leeks-spinach-smoked cheese",
    "pizza/baked eggplants-pepper-leeks",
    "pizza/olives-arugula-cherry tomatoes",
    "pizza/mushrooms-olives-pepper-blue onions",
    "pizza/spinach-olives-blue onions",
    "pizza/arugula-dried tomatoes-blue onions",
    "pizza/cherry tomatoes-smoked cheese-pepper",
    "pizza/mushrooms-spinach-blue onions",
    "pizza/cherry tomatoes-fresh basil",
    "pizza/eggplant-dried tomatoes-blue onions",
    "pizza/mushrooms-cucumbers-smoked cheese",
    "pizza/cherry tomatoes-canned onions-cucumbers",
    "pizza/leeks-olives-canned onions",
    "pizza/blue onions-mushrooms-cucumbers",
    "pizza/leeks-pepper-canned onions",
    "pizza/blue onions-cherry tomatoes-olives"
  ];

  const pizzas = t("pizza", {returnObjects: true})
  const pizzaTitles = t("title-pizza", {returnObjects: true});
  let count = -1;
 
  const listItems = pizzaTitles.map((title, i) => (
    <div key={i}>
      <h2 className="text-center text-[30px]">{title}</h2>
      {pizzas.slice(i * 3, i * 3 + 3).map((pizza, index) => (
        i % 2 === 0
          ? (isLeft(index) 
            ? 
              <div key={index} className="flex justify-start"> 
                <LeftComponent product={pizza} url={url[index]} />
              </div>
            : 
              <div key={index} className="flex justify-end">
                <RightComponent product={pizza} url={url[index]} />
              </div>
          )
          : (isLeft(index) 
            ? 
              <div key={index} className="flex justify-end">
                <RightComponent product={pizza} url={url[index]} />
              </div>
            : 
              <div key={index} className="flex justify-start"> 
                <LeftComponent product={pizza} url={url[index]} />
              </div>
          )
      ))}
    </div>
  ));

  return (
    <>
    <MenuButton></MenuButton>
    <NavigationSection></NavigationSection>
    <Header show = {""}></Header>
    <LandingZone></LandingZone>
    <div id= "pica" className="absolute width wheat ">
      <div className="max-w-120 m-auto">{listItems}</div>
      <Footer></Footer>
    </div> 
    </>
  )

    function isLeft (index) {
    if(index%2 == 0){
      return true
    }
    return false
  }
}



