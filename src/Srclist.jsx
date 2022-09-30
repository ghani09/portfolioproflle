import React from "react";

const Srclist = (props) =>{
    const img =  `https://source.unsplash.com/300x300/?${props.name}` ;

    return(
        <>
             <div className= 'side_img'>

                <img src= {img} alt="imag"/>
            </div>
        </>
    )
}
export default Srclist;