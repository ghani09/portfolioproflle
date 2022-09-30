import React from 'react' ;



const Header = () => {




    return (
        <div  className='header_div'>

        <i class="fa-solid fa-bars"/>
        <h1>reminder</h1>
        <div className='sch'>
        <i class="fa-solid fa-magnifying-glass"/>
      <input  className= "sch" type="text" placeholder='search'/>
       </div>

        </div>
    )
}
export default Header ;   