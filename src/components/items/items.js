import React from 'react';


import './items.css';



const Items=(props)=>{
    const price = parseInt(props.price)*props.quantity;
    return (

        
        <div className="itemCard">
            {props.name}   x  {props.quantity}  = {price} Pounds
        </div>
    )
}

export default Items