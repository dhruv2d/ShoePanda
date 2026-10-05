import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
// import { getProductList } from "../assets/productList";
import ProductList from "../assets/productList"
import { CartContext } from "../context/cartContext";

function ProductDetails(){
    // const [ProductList, setProductList] = useState([]);

    // useEffect(()=>{
    //     getProductList().then(setProductList);
    // },[])

    const [size, setSize] = useState(4);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const currentProduct = ProductList.find((item) => item.id === Number(id));
    
    if(!currentProduct) return <h2>Product not found</h2>

    let {cart, addToCart} = useContext(CartContext);
    
    return <>
        <div className="productDetails">
            <img src = {currentProduct.image}></img>
            <div className="details">
                <h2>{currentProduct.name}</h2>
                
                <p>₹{currentProduct.price}</p>

                <p className="size-selector-text">Please select a size :</p>
                <div className="size-selector">
                    {[4,5,6,7,8,9,10].map((s) => (
                                <button
                                    key={s}
                                    className = {`sizeButton ${size === s ? "Active" : "Not"}`}
                                    onClick={() => setSize(s)}
                                >UK&nbsp;{s}
                                </button>
                        )
                    )}
                </div>
                <p className="size-selector-text">Quantity :</p>
                <select onChange = {(e) => setQuantity(Number(e.target.value))} name="Quantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                <button onClick = {() => {addToCart(currentProduct, size, quantity)}} >Add to Cart</button>
            </div>
        </div>
    </>
}

export default ProductDetails;

    // const currentProduct = ProductList.find((item) => {item.id == id});