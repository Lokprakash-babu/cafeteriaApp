import React from 'react';
import propTypes from 'prop-types'
import './input.css';





const input=(props)=>{

    let fileType=false;

    if(props.type==='file'){
        fileType=true;
    }
    
    return (
        <div>

            {
                !fileType
                ?(
                    <div className="forInput">
                        <input   data-role="materialinput"
                        data-informer={props.informer}
                        data-label={props.name} 
                        id={props.label} 
                        type={props.type}  
                        placeholder={props.place} 
                        onChange={props.change}  
                        pattern={props.type==="tel"?"[0-9]{10}":undefined} required/>
                    </div>
                ):(
                    <div className="forInput">
                        <input id={props.label} accept={props.type==="file"?"image/*":undefined} onChange={seeImage} type="file" data-role="file" data-prepend="Select your ID:"></input>
                    </div>
                )
            }
            

        </div>

    );
}
function seeImage(){
    let reader=new FileReader();
      let img=document.getElementById('photo');

      reader.readAsDataURL(img.files[0]);

      reader.onload=(ev)=>{
        document.getElementById("photoContainer").getElementsByClassName('imgg')[0].setAttribute('src', ev.target.result);
      }

}
// function checkFile(){
//     document.getElementById("photo").click();
// }

input.propTypes={
    name:propTypes.string.isRequired,
    type:propTypes.string.isRequired,
    label:propTypes.string.isRequired
}


export default input;

//


