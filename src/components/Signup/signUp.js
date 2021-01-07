import React from 'react';

import './signUp.css';
import Inputs from '../inputLayout/inputLayout';
import PreviewLayout from '../previewLayout/preview';

const signUp = (props) =>{

    return(
        <div>
            <div className="signUpText">
                <p>Sign up form</p>
            </div>
            <div className="grid">
                <div className="row">
                    <div className="cell-sm-12 cell-md-6 cell-lg-6">
                        <div className="formClass">
                            <form id={'formSubmit'} onSubmit={props.checkSubmission} >
                                <Inputs change={props.changed}/>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="cell-sm-12 cell-md-6 cell-lg-6 ">
                        <PreviewLayout/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default signUp;