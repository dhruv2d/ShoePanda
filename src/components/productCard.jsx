
function ProductCard(info){
    return (
        <div className = "ProductCard">
            <img src={info.image}></img>
            <p id="name">{info.name}</p>
            <p id="price">₹{info.price}</p>
        </div>
    )
}

export default ProductCard;