import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import "./CheckoutProduct.js"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct.js";

function Checkout() {

    const [{basket,user}, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout_left">
                <div>
                    <h3>{user?.email}</h3>
                    <h2 className="checkout_title"
                    >Your Shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        
                        />
                    ))}



                    {/*checkoutitems */}
                    





                </div>
            </div>
            <div className="checkout_right">
               <Subtotal />
            </div>
        </div>
    );
}

export default Checkout 
