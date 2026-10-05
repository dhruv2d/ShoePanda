import {Outlet} from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import panda from "../assets/panda-logo.jpg"
import { useNavigate } from "react-router-dom";
function Layout(){
    
    let navigate = useNavigate();
    function logoClick(){
        navigate('/');
    }

    return (
        <>
            <div className="header">
                <div onClick={logoClick} className="logo">
                    <img src={panda}/>
                    <p className="logo-text">ShoePanda</p>
                </div>
                <Navbar />
            </div>
            <main>
                <Outlet/>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout;