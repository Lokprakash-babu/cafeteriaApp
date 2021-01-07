import React from 'react';
import './output.css';

const output = (props) =>{

    return(
        <div className="outputClass">
            <label>{props.name[0].toUpperCase()+props.name.slice(1, props.name.length)}</label>
            <span id={props.label} />
        </div>
    );
}

export default output;