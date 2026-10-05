import {Link} from "react-router-dom"
import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";

function Navbar(props){

    let [menu, setMenu] = useState(false);
    const { cart } = useContext(CartContext);

    return (
        <>
        <div className="hamburger" onClick={()=>setMenu(!menu)}>☰</div>
        <div className={`navbar ${menu ? "active" : ""}`}>
            {/* <Link to="/">
                <button><span className="material-symbols-outlined">home</span></button>
            </Link>
            <Link to="/products">
                <button><span className="material-symbols-outlined">grid_view</span></button>
            </Link>
            <Link to="/contact">
                <button><span className="material-symbols-outlined">mail</span></button>
            </Link>
            <Link to="/about">
                <button><span className="material-symbols-outlined">info</span></button>
            </Link>
            <Link to="/cart">
                <button className="cart-button"><span className="material-symbols-outlined">shopping_cart</span>
                {cart.length > 0 && <span id="cart-length">{cart.length}</span>}
                </button>
            </Link> */}
            <Link to="/">
                <button onClick={()=>setMenu(!menu)}>Home</button>
            </Link>
            <Link to="/products">
                <button onClick={()=>setMenu(!menu)}>Products</button>
            </Link>
            <Link to="/contact">
                <button onClick={()=>setMenu(!menu)}>Contact</button>
            </Link>
            <Link to="/about">
                <button onClick={()=>setMenu(!menu)}>About</button>
            </Link>
            <Link to="/cart">
                <button onClick={()=>setMenu(!menu)}>Cart</button>{cart.length > 0 && <span id="cart-length">{cart.length}</span>}
            </Link>
        </div>
    </>
    )
}

export default Navbar;