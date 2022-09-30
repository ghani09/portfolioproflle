import React, {useState} from 'react';
import './list.css';


const CreateNote =(props)=> {
    const [expand , setExpand] =useState(false)

const[item , setItem]= useState({

    title:"",
    note:""
})
const inEvent =(event) =>{
    const {name , value} = event.target;

    setItem((prevalue) =>{
        return {
            ...prevalue,

            [name]:value
        }
    })

    
}
const addEvent = ()=> {

    props.passNote(item)
    setItem(
        {
      title:"",
     note:""


    })
}

    const exapndIt = () => {

        setExpand(true)
    }
    const hideIt = () =>{
        setExpand(false)
    }



    return(

     
<>
  <div className='content_div'>
    {expand?
    <input name="title"  value={item.title} className="inp" type="text" placeholder='Title' onChange={inEvent} autoComplete="off" />
     :null}


    <br/>
    <textarea onClick ={exapndIt} onDoubleClick={hideIt} name="note" value={item.note} className="tar" rows="" colums="" placeholder="add note.." onChange={inEvent} />
     <br/>
     { expand?
    <button className="btn"  onClick={addEvent}> <i className="fa-light fa-plus"/> </button>
    :null}
     
  </div>
   
   
   
   </>

    )
}
export default CreateNote ;
