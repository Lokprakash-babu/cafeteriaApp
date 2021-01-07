import React from 'react';
import './preview.css';
import Output from '../output/output';

const preview = (props) =>{

    return(
        <div className="container">
            <div className="previewContainer">
                <div className="previewName">
                    <p>Preview</p>
                </div>
                <div>
                    <Output label="nameContainer" name="Name:"/>
                    <Output label="mailContainer" name="Mail Id:"/>
                    <Output label="orgContainer" name="organization:"/>
                    <Output label="idContainer" name="Employee Id:"/>
                    <Output label="mobileContainer" name="Mobile:"/>
                    <div className="img-container thumbnail" id="photoContainer">
                        <img alt="your ID card" src="#" className="imgg"/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default preview;