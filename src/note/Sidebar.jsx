import React , {useState} from 'react';
import './list.css'




const Sidebar = () => {

const[show ,setShow] = useState(false)

const Display =() =>{

    setShow(true)
}
const Hide =() => {
    setShow(false)
}


    return (
        <div className="side_div" onMouseEnter={Display} onMouseLeave={Hide}>
          
              <div><button><i class="fa-regular fa-lightbulb"/>{show? <span>Note</span> :null}</button>   
                
                 
                

                </div>
                <div>
                    <button><i class="fa-duotone fa-bell"/> {show ? <span>Reminder</span>:null} </button>
                   
                  
                </div>
                <div>
                    <button><i class="fa-solid fa-pen"/>{show?<span>Edit</span>:null}</button>
                   
                </div>
                <div><button><i class="fa-solid fa-box-archive"/>{show? <span>Archive</span>:null}</button>
                
                </div>

                </div>
            
        


    )
}
export default Sidebar