import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartItem({item}){

    const { cart, addToCart, reduceQuantity, removeProd } = useContext(CartContext);

    const {image, name, price, size, quantity} = item;
    
    return (
        
            <div className="singleCartProduct">
                <img className="grid-item" src = {image}></img>
                <h1 className="grid-item name">{name}</h1>
                <p className="grid-item price">₹{price}</p>
                <p className="grid-item size">Size : {size}</p>
                <p className="grid-item quantity">Quantity : 
                    <button className="grid-item quantity-btn" onClick = {() => addToCart(item,size,1)}>+</button>
                    {quantity}
                    <button className="grid-item quantity-btn" onClick = {() => reduceQuantity(item)}>-</button>
                </p>
            
                <button className="grid-item remove" onClick = {() => removeProd(item, size)}> Remove Item </button>
            </div>
  
    );
}

export default CartItem;