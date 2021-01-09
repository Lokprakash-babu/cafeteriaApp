import React from 'react';
import './error.css';

const error =(props)=>{

    return (
        <div className="errorCard">
            <div className="errorBackground"></div>
            <div className="errorMessage">
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default error;