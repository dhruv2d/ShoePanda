import panda from "../assets/full-logo.png"
import { useNavigate } from "react-router-dom"

function Footer(){
    
    let navigate = useNavigate();

    return(
        <>
            <div className="footer">
                <div className="footer-logo-container contact-us">
                    <div className="footer-logo">
                        <img src={panda}/>
                    </div>
                    <p className="intro">Modern shoe store offering a thoughtfully curated collection of stylish,
                        comfortable, and high-quality footwear for everyday wear.
                    </p>
                </div>
                <div className="footer-company contact-us">
                    <h2>Company</h2>
                    <p onClick = {() => {navigate('/about')}} >About</p>
                    <p>Careers</p>
                    <p>Gift Vouchers</p>
                    <p>How it Works</p>
                </div>
                <div className="footer-support contact-us">
                    <h2>Support</h2>
                    <p>Customer Service</p>
                    <p>Quick Chat</p>
                    <p onClick = {() => {navigate('/contact')}}>Contact Us</p>
                </div>
                <div className="footer-more-info contact-us">
                    <h2>More Info</h2>
                    <p>T&C</p>
                    <p>Privacy Policy</p>
                    <p>Blogs</p>
                    <p>Get Notified</p>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright @2026 ShoePanda</p>
                <p>Designed by : Dhruv</p>
                <p id="mid-para" >Code by : Dhruvd2 on GitHub</p>
            </div>
        </>
    )
}

export default Footer;