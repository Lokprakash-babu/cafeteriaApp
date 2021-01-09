import React from 'react';
import './card.css'
import Layout from '../layout/layout';
const Card = (props)=>{

    return (

        <div className="card-container">
            {props.items.map((ele, ind)=><Layout  addItem={props.addItem} key={ind} check={ind} name={ele.name} image={ele.url} price={ele.price}/>)}
        </div>
    );
}

export default Card;