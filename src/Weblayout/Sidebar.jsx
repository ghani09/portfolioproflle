import React from "react";
import '../Weblayout/web.css';
import ee from '../Weblayout/Images/wee.jpg';

const Sidebar =() =>{


    return(


        <>
            <aside className="side_bar">
                <ul>
                    <li>home</li>
                    <li>services</li>
                    <li>career</li>
                    <li>projects</li>
                    <li>location</li>

                </ul>
                <img src={ee}  alt="pic4" />
            </aside>
        </>
    )
}
export default Sidebar ;