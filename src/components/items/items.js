import React from 'react';


import './items.css';



const Items=(props)=>{

    return (

        
        <div className="itemCard">
            <div className="imageContainer">
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="dataContainer">
                <div>
                    {props.name}: {props.price}
                </div>
                <div>
                    Quantity:{props.quantity}
                </div>
                
                
            </div>
        </div>
    )
}

export default Items