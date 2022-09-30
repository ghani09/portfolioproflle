import React from "react";
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faFacebook} from '@fortawesome/free-brands-svg-icons';

import {faInstagram} from '@fortawesome/free-brands-svg-icons';

import {faTwitter} from '@fortawesome/free-brands-svg-icons';

import {faGoogle} from '@fortawesome/free-brands-svg-icons';


const Menu = () =>{

    return(
        <>
            
            <div className="menu-style">
            <h1>portfolio website.</h1>
            <div className="menu_list">
            <Link  to= '/' >home</Link>
            <Link  to= '/mainabout/about' >About</Link>
            <Link  to= '/project' >Projects</Link>
            </div>
            <div className="brand_icon">
            
            <a href="https://www.facebook.com/photo/?fbid=3462557610537153&set=a.386994378093507"><FontAwesomeIcon icon = {faFacebook} /></a>
        
            
            <a href="https://www.instagram.com/ghani0.9/"> <FontAwesomeIcon icon={faInstagram} /> </a>
            <Link to ='/twitter' > <FontAwesomeIcon icon={faTwitter} /></Link>
            <Link to ='/google' > <FontAwesomeIcon icon={faGoogle} /></Link>
            </div>
            </div>
        </>
    )
}

export default Menu;