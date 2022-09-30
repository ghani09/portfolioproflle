import React, {useState ,useEffect} from 'react';
import { Link , Outlet, useLocation} from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx';


const Projects = () => {
    
   const location = useLocation();

    


   

   
   
    


    return (
        <>
        
        <div  className="scroll">
        <div className="projectpage">
         <div className="timeline">
           <ul>
            <li><div className="line_content">
            <Link  to= '/project/todolist'>Todolist</Link>
            </div></li>
           
    
            <li><div className="line_content">
            <Link  to= '/project/noteapp' >Note app</Link>
            </div></li>
            <li><div className="line_content">
            <Link  to= '/project/search' >search</Link>
            </div></li>
            <li><div className="line_content">
            <Link  to= '/project/website' >Resoncive webpage</Link>
            </div></li>

           </ul>

         </div>
        


        
           
           
        
        
        
       
        </div>
        
        <Outlet />
        </div>
        </>
        

    )
}
export default Projects;