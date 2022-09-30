import React, {useState} from "react";
import List from "./List";



const Content = () =>{
    const [item ,setItem]=useState();
    const [newItem ,setNewItem] =useState([]);

       
    const  getValue = (e) => {
      
       setItem (e.target.value)



    }
    const showItem = () =>{

        setNewItem((prevalue) => { return [...prevalue ,item]});
        setItem("");
    }

    const removeItem =(id) =>{

        setNewItem((prevalue)=> prevalue.filter((elment ,index) =>{
            return  id !== index
        }))


    }
    
       

    return (
        <>
         
        <div className="do_page">
        <div className="do_content">
        <div className="do_text">
            <h1>to do list</h1>
            <br/>
            <lable>Add  random items by clicking the button</lable>
            <input type="text" placeholder="TYPE HERE" onChange={getValue} value={item} />
            <button onClick={showItem}>+</button>
            <br/>
            <ul>{newItem.map((list, index) => {
                return (
            <List atem={list}
               key = {index}
               id={index}
               selectItem={removeItem}

            />) })}</ul>
            </div>
            </div>
            </div>
           
        </>

    )
}
export default Content;