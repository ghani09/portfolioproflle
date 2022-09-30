import React from "react";
import '../Weblayout/web.css';




const Navbar = () =>{


    return(
        <>
        <header>
        <nav className="menu">
            <ul>
                <li>Home</li>
                <li>about</li>
                <li>contact us</li>
                <li>adress</li>
            </ul>
            </nav>
            <div className="logo">
              Ghani baba
            </div>
            <nav id="socal_links">
            <ul>
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-whatsapp"></i></li>
            </ul>
            </nav>
                <div id="btn">
            
            <input type="text" className="btn" placeholder="search"/>
            </div>
        </header>



        </>

        
  




    )
}
export default Navbar ;