import React from 'react';
import Projects from './Projects.jsx';
import Main from '../src/note/Main';
import Web from '../src/Weblayout/Web';
import Search from './Search.jsx';
import Content from './Content.jsx';
import { Router,     Route ,   Routes } from 'react-router-dom';
const Scroll =() =>{

return(
    <Router>
  <Routes>
<Route path='/project' element ={<Projects/>}>
                <Route  path='/project/search' element={<Search/>} />
                <Route  path='/project/todolist' element={<Content/>} />
                <Route  path='/project/noteapp' element={<Main/>} />
                <Route  path='/project/website' element={<Web/>} />  
              
            </Route>
            </Routes>
            </Router>

)

}
export default Scroll;