import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import "./i18n.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './views/Homepage.jsx'
import Pita from "./views/Pita.jsx"
import Kebab from "./views/Kebab.jsx"
import Snacks from "./views/Snacks.jsx"
import Drinks from "./views/Drinks.jsx"
import Coffee from "./views/Coffee.jsx"
import IceCream from "./views/IceCream.jsx"
import Order from "./views/Order.jsx"
import CustomPizza from "./views/Custompizza.jsx"
import "typeface-roboto";
import PizzaProduct from './productView/PizzaProduct.jsx'
import PitaProduct from './productView/PitaProduct.jsx'
import KebabProduct from './productView/KebabProduct.jsx'
import KebabDishProduct from './productView/KebabDishProduct.jsx'
import SnacksProduct from './productView/SnacksProduct.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>
  },
  {
    path: "/pita-gyros",
    element: <Pita></Pita>
  },
  {
    path: "/kebab",
    element: <Kebab></Kebab>
  },
  {
    path: "/snacks",
    element: <Snacks></Snacks>
  },
  {
    path: "/drinks",
    element: <Drinks></Drinks>
  },
  {
    path: "/coffee",
    element: <Coffee></Coffee>
  },
  {
    path: "/ice-cream",
    element: <IceCream></IceCream>
  },
  {
    path: "/custom-pizza",
    element: <CustomPizza></CustomPizza>
  },
  {
    path: "pizza/:productTitle",
    element: <PizzaProduct ></PizzaProduct>,
    errorElement: <Homepage></Homepage>
  },
  {
    path: "pita-gyros/:productTitle",
    element: <PitaProduct ></PitaProduct>,
  },
  {
    path: "kebab-lavash/:productTitle",
    element: <KebabProduct></KebabProduct>
  },
  {
    path: "kebab-tortilla/:productTitle",
    element: <KebabProduct></KebabProduct>
  },
  {
    path: "snacks/kebab-in-dish",
    element: <KebabDishProduct></KebabDishProduct>
  },
  {
    path: "snacks/:productTitle",
    element: <SnacksProduct></SnacksProduct>
  },
  {
    path: "/order",
    element: <Order></Order>
  }
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
