import React from 'react';
import './preview.css';
import Output from '../output/output';

const preview = (props) =>{

    return(
        <div className="previewTab">

            <div>
                <p>Preview</p>
            </div>
            <div>
                <Output label="nameContainer" name="name"/>
                <Output label="mailContainer" name="mail"/>
                <Output label="orgContainer" name="org"/>
                <Output label="idContainer" name="id"/>
                <Output label="mobileContainer" name="mobile"/>
                <div id="photoContainer">
                    <img src="#" className="imgg"/>
                </div>
            </div>
        </div>
    )

}

export default preview;