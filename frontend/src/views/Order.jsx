import React from 'react';
import { useEffect } from 'react';

const Order = () => {

    useEffect(() => {
          window.scrollTo(0, 0);
      }, [location.pathname]);

    const order = localStorage.getItem('order');




    return (
        <>
            {order == null ? 
                <div>
                    <h1>Your order is empty</h1>
                </div>
                :
                <div>
                    <h1>Your order</h1>
                    <p>{order}</p>
                </div>
            }
        </>
    );
}

export default Order;
