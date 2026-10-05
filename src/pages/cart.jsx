import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../components/orderSummary";
import CartItem from "../components/cartItem";

function CartPage(){

    let navigate = useNavigate();
    
    let { cart } = useContext(CartContext);

    function continueShopping(){
        navigate('/');
    }
    
    return <>
        {/* <Header></Header> */}
        <div className="cartPage-container">
            <div className={`CartItems ${cart.length == 0 ? 'empty' : ""}`}>
                {cart.length === 0 ? 
                        (<div className="empty-cart-message">
                            <p>Your Cart is empty</p>
                            <button onClick={continueShopping} className="checkout-button">Back to Shopping</button>
                        </div>) : 
                        cart.map((product) => {
                        return (
                            <CartItem
                                key = {product.cartItemId}
                                item = {product}
                                >
                            </CartItem>
                        )
                    })}
                {/* <div className="checkout-corner">    
                    }
                </div>    */}
            </div>
            <OrderSummary handleClick={() => navigate("/checkout")}></OrderSummary>
        </div>
    </>
}

export default CartPage;