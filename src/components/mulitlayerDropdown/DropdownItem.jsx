import React from 'react'

function DropdownItem({children, iconRight, iconLeft, onClick}) {
    return (
        <div className="dropdownItem">
         {iconLeft &&  <i onClick={onClick} className="iconLeft">{iconLeft}</i> }  
           <p className="navText">  {children}</p>
           
         {iconRight && <i onClick={onClick}
          className="iconRight">{iconRight}</i> }   
        </div>
    )
}

export default DropdownItem
