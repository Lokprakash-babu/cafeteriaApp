import React from 'react';

import './layout.css';


const Layout =(props)=>{
    let classname="buyNowSection";
    return (
        <div className="card" onMouseEnter={e=>displayBuyNow(props.check)} onMouseLeave={e=>hideBuyNow(props.check)}>
            <div className={classname} id={props.check}>
                <button>Buy Now</button>
            </div>
            <div className="imageSection" >
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="nameSection" >
                {props.name}
            </div>
            <div className="priceSection">
                {props.price}
            </div>
        </div>
    )

}

function displayBuyNow(e){
    
    document.getElementById(e).style.display="block"

}
function hideBuyNow(e){
    
    document.getElementById(e).style.display="none"


}
export default Layout;