import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../components/orderSummary";

function CheckoutPage(){

    let navigate = useNavigate();

    const { clearCart } = useContext(CartContext);
    
    function handleCheckout(){
        clearCart();
        navigate("/order-placed");
    }

    let [paymentMethod, setPaymentMethod] = useState("");

    return (
        <div className="checkoutPage">
                <form onSubmit={handleCheckout}>
                    <div className="user-details-form">
                        <h2 id = "checkout-heading">Shipping Details</h2>
                        <div className="input-field fName">
                            <label htmlFor="checkout-name">First Name* </label>
                            <input type="text" placeholder="Dhruv" required/>
                        </div>
                        
                        <div className="input-field lName">
                            <label htmlFor="checkout-lastname">Last Name </label>
                            <input type="text" placeholder="Daniel"/>
                        </div>
                        
                        <div className="input-field email">
                            <label htmlFor="email"> Email* </label>
                            <input type="email" placeholder="Dhruv01d1@gmail.com" required />
                        
                        </div>
                        
                        <div className="input-field phone-no">
                            <label htmlFor="phone-no"> Phone no.* </label>
                            <input type="tel" placeholder="9821234523" pattern="[0-9]{10}" required/>
                        </div>

                        <div className="input-field address">
                            <label htmlFor="address"> Address* </label>
                            <input type="text" placeholder="B-21 Sector 62 Noida" required/>
                        </div>

                        <div className="input-field">
                            <label>Mode of Payment*</label>
                            <select required onChange={(e) => setPaymentMethod(e.target.value)}>
                                <option value="">Select</option>
                                <option value="COD">COD</option>
                                <option value="Credit">Credit Card</option>
                                <option value="Debit">Debit Card</option>
                            </select>
                        </div>
                        {(paymentMethod === "Credit" || paymentMethod === "Debit") && 
                        <div className="card-details">
                           
                            <div className="input-field card-number">
                                    <label htmlFor="card-number"> Card Number* </label>
                                    <input className="card-number" type="text" placeholder="XXXX XXXX XXXX XXXX" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"required/>
                                </div>
                            
                            <div className="card-details-small-inputs">
                                <div className="input-field card-input">
                                    <label htmlFor="MM"> MM* </label>
                                    <input className="MM" type="text" placeholder="XX" pattern="[0-9]{2}" required/>
                                </div>
                                <div className="input-field card-input">
                                    <label htmlFor="YY"> YY* </label>
                                    <input className="YY" type="text" placeholder="XX" pattern="[0-9]{2}" required/>
                                </div>
                                <div className="input-field card-input">
                                    <label htmlFor="CVV"> CVV* </label>
                                    <input className="CVV" type="text" placeholder="XXX" pattern="[0-9]{3}" required/>
                                </div>
                            </div>
                        </div>
                    }
                    </div>
                    <OrderSummary></OrderSummary>   
                </form>
        </div>
    )
}

export default CheckoutPage;