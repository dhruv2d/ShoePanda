import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { useNavigate } from "react-router-dom";

function OrderSummary({handleClick}){
    
    let { cart } = useContext(CartContext);

    const cartTotal = cart.length>0 ? 
        cart.reduce((total, item) => total + (item.price *  item.quantity), 0) : 0;

    const totalQuantity = cart.length>0 ?
        cart.reduce((total, item) => total + (item.quantity),0) : 0;
    
        return (
        <>
            {cart.length > 0 && (
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="order-details" >
                        <p className="cart-total">{`Total :`}</p>
                        <p>{`₹ ${cartTotal}`}</p>
                    </div>
                    <div className="order-details" >
                        <p className="cart-total">{`Total Items :`}</p>
                        <p>{` ${totalQuantity}`}</p>
                    </div>                    
                    <button className="checkout-button" onClick = {handleClick} type="submit" >Place Order</button>
                </div>)}
        </>
    )
}

export default OrderSummary;