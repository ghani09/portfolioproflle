import React from "react";
import { Link, Outlet } from 'react-router-dom';



const About = () =>{

  
   
  
         
    
      
    return(
       <>
  <div className="aboutpage">

  <div className="nav">
  <div className="test">
    <h1>welcome!</h1>
    
  </div>
   <div className="nav_menu">

          <Link  to= '/mainabout/about/qualification'>Graduation</Link>
    <Link  to= '/mainabout/about/habbits'> Habbits</Link>
    

    </div> 
    </div>

    </div>
    <Outlet /> 
    </>   
             
        
    )
}
export default About ;