import ProductCard from "../components/productCard";
// import { getProductList } from "../assets/productList";
import ProductList from "../assets/productList";
import hero from "../assets/hero.png"
// import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function Home(){

    // const [ProductList, setProductList] = useState([]);

    // useEffect(()=>{
    //     getProductList().then(setProductList);
    // },[])
    return <>
        
        <div className="hero">
            <img src={hero} alt="Hero for summer collection" />
        </div>

        <div className="Products">
            {ProductList.map((product) => {
                return <Link to={`/productDetails/${product.id}`} key = {product.id} className="link">
                    <ProductCard 
                        name = {product.name} 
                        image = {product.image} 
                        price = {product.price}>
                    </ProductCard>
                </Link>
            })}
        </div>
    </>
}

export default Home;