import React ,{useState} from 'react';
import Srclist from './Srclist';

const Search = () => {
    const [img ,setImg] = useState("");

     const inputEvent = (e) => {
      const data = e.target.value;
      setImg(data);

     }

    return(

        <>
       
        <div className='sch_page'> 
        <div className='sch_content'>
           <h2>GET RANDOM IMAGE </h2>
        <div className='sch_text'>
            <input type="text" placeholder='search anything' 
              value ={img}
                onChange= {inputEvent}
              />
            </div>
            <div className='sch_img'>
         {img === ""?null: <Srclist name= {img}/>}   
         </div>
        
         </div>
         </div> 
        </>
    )
}
export default Search ;