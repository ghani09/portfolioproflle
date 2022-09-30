import React from 'react';
import { Route ,   Routes } from 'react-router-dom';

import Home from './Home.jsx';

import Menu from './Menu.jsx';
import Habbits from './Habbits.jsx';
import Personal from './Personal.jsx';
import User from './User.jsx';

import Mainabout from './Mainabout.jsx';
import Projects from './Projects.jsx';
import Main from '../src/note/Main';
import Web from '../src/Weblayout/Web';
import Search from './Search.jsx';
import Content from './Content.jsx';




import About from "./About";




const App = () =>{


  

    return(
         <>
      
      
            <nav>
           <Menu />
           </nav>
            
           <Routes>
           
            <Route  path= '/' element={<Home />} />
           
             {/* <Route={Error} />*/}
     <Route path='/mainabout' element={<Mainabout/>}>
             <Route   path = "/mainabout/about"  element={<About/>} >
               <Route   path ='/mainabout/about/qualification' element={<User/>} />
               <Route   path ='/mainabout/about/habbits' element={<Habbits/>} />
               <Route   path='/mainabout/about/personal' element={<Personal/>} />
            </Route>
            </Route>
            
             
            <Route path='/project' element ={<Projects/>}>
                <Route  path='/project/search' element={<Search/>} />
                <Route  path='/project/todolist' element={<Content/>} />
                <Route  path='/project/noteapp' element={<Main/>} />
                <Route  path='/project/website' element={<Web/>} />  
                   
            </Route>
            
            
           
           </Routes>
           
           <footer>
          copyrights resrved  by @2022 ghani.com

           </footer>
          

              </>
    )
}
export default App;