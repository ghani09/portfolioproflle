import React,{useState} from 'react';
import Header from '../note/Header.jsx';
import Sidebar from '../note/Sidebar.jsx';
import CreateNote from '../note/CreacteNote.jsx';
import Note from '../note/Note.jsx';
import '../note/list.css';




const Main = () => {

    const [addItem ,setAddItem] = useState([])

  const btnEvent = (item) => {

    setAddItem((prevData) => 
       { 
        return  [...prevData, item]
        
        });
    
      
    

  }
  const deleting =(id) => {
  setAddItem ((oldData)=> oldData.filter((curval ,index) => {
    return index !== id
  })
  )

  }




    return(
        <>
        <Header  />
        <Sidebar/>
        <CreateNote  passNote = {btnEvent}/>
        {addItem.map((val ,index)=> {
            return (<Note 
                key={index}
                id={index}
                title = {val.title}
                note = {val.note}
                deleted = {deleting}
            />);
            
        })
        }
           </>
        


    );
}

export default Main;