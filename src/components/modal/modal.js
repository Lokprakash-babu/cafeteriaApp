import React from 'react';

import './modal.css';


const modal =(props)=>{
    const show=props.show?'modal display-block':'modal display-none';

    return(
        <div className={show}>
        <section className="modal-main">
                <div>
                    {props.children}    
                </div>
                <button type="button" onClick={props.handleClose}>
                    Close
                </button>
            </section>
        </div>
    )

}

export default modal;