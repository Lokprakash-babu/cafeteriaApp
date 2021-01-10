import React from 'react';
import './checkout.css';

import Item from '../items/items';



const Checkout = (props) =>{
    let classname=props.show?'modal display-block':'modal display-none';
    return(
        <div className={classname}>
            <div className="modal-main">
                <div className="overall">
                    {Object.keys(props.quantity).map(
                        (ele, id)=><Item key={id}
                            image={props.items[ele].url} 
                            name={props.items[ele].name} 
                            price={props.items[ele].price} 
                            quantity={props.quantity[ele]}/>
                        )}
                </div>
                <div className="buttons">
                    <button onClick={props.close}>Close</button>
                    <button onClick={props.buy}>Buy Now</button>
                </div>
            </div>
            
        </div>
    )
}

export default Checkout;