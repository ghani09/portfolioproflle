import React from "react";
import {  Outlet} from 'react-router-dom';

const  Mainabout = () => {

    return (
        <>

        <div className="about_page" >
        

       
             <Outlet />

            </div>
        </>
    )


}
export default Mainabout ;
