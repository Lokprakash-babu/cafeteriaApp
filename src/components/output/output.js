import React from 'react';

const output = (props) =>{

    return(
        <div>
            <label>{props.name}</label>
            <p id={props.label}></p>
        </div>
    );
}

export default output;