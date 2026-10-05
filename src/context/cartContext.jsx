    import { createContext, useEffect, useState } from "react";

    const CartContext = createContext();

    function CartProvider({ children }){

        let [cart,setCart] = useState(() => {
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
        });

        useEffect(() => {
            localStorage.setItem('cart', JSON.stringify(cart));
        }, [cart]);
        
        function addToCart(product, size, quantity){
            quantity = Number(quantity);
            setCart(prevCart => {
                const cartItemId = `${product.id}-${size}`;
                const existingItem = prevCart.find(item => item.cartItemId === cartItemId);
                
                if(existingItem){
                    return prevCart.map(item => 
                        item.cartItemId === cartItemId ? {...item, quantity : item.quantity + quantity} : item
                    )
                }
                return [...prevCart, { ...product, quantity: Number(quantity), size, cartItemId : `${product.id}-${size}` }];
            });
        }

        function reduceQuantity(product){
            
            setCart(prevCart => {
                const currentProduct = prevCart.find(item => item.cartItemId === product.cartItemId);
                    
                    if (!currentProduct) return prevCart;

                    if(currentProduct.quantity === 1){
                        return prevCart.filter(item => item.cartItemId !== product.cartItemId);
                    }

                    return prevCart.map(item => 
                        item.cartItemId === product.cartItemId ? {...item, quantity : item.quantity - 1} : item
                    )
                }
            )
        }

        function removeProd(product, size){
            setCart( prevCart => 
                prevCart.filter( item => item.cartItemId !== product.cartItemId)
            )
        }

        function clearCart(){
            setCart([]);
        }

        return <CartContext.Provider value={ {cart, addToCart, reduceQuantity, removeProd, clearCart} }>
            {children}
        </CartContext.Provider>
    }

    export { CartContext, CartProvider };