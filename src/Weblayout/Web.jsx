import React from 'react';
import Sidebar from '../Weblayout/Sidebar.jsx';

import Navbar from '../Weblayout/Navbar.jsx';

import Article from '../Weblayout/Article.jsx';
import Footer from '../Weblayout/Footer.jsx';
import '../Weblayout/web.css';

const Web = () => {


    return(
        <>
        
        <Navbar />
        <div id="main">
        <Sidebar/>
        <Article/>
        </div>
        <Footer/>
        </>
        
    );
}
export default Web;