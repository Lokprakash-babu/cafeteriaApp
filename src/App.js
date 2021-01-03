import './App.css';
import React from 'react';
import Inputs from './components/inputLayout/inputLayout'
import PreviewLayout from './components/previewLayout/preview'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  authFormValidation(){
      console.log('validation');
  }

  changed(e){
    
    document.getElementById(e.target.id+"Container").innerHTML=e.target.value;
    
  }


  checkSubmission=(event)=>{
    event.preventDefault();
    console.log('verified', event);

    let reader=new FileReader();

    
    let fullName=document.getElementById('name').value;
    
    let email=document.getElementById('mail').value;
    
    let orgName=document.getElementById('org').value;
    
    let id=document.getElementById('id').value;
    
    let mobile=document.getElementById('mobile').value;

    let img=document.getElementById('photo');

    
    let body={
      fullName,
      email,
      orgName,
      id,
      mobile
    }

    reader.readAsDataURL(img.files[0]);

    reader.onload=(e)=>{
      document.getElementById("photoContainer").getElementsByClassName('imgg')[0].setAttribute('src', e.target.result);
      body['img']=e.target.result;
      this.callAPI(body);
    }
  }

  callAPI(body) {

    console.log('body', body);

    fetch('http://localhost:9000/testAPI', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then(
      function(data){
        return data.json();
      },
    ).then(
      function(success){
        // let data=JSON.parse(success)
        console.log('success', success);
      }
    ).catch(
      function(err){
        console.error("error in posting the details",err);
      }
    )

  }


  render(){
    return (
        <div>
          <div className="formClass">
            <form id={'formSubmit'} onSubmit={this.checkSubmission} >
              <Inputs change={this.changed}/>
              <button type="submit">Submit</button>
            </form>
          </div>

          <PreviewLayout/>
        </div>
      );
  }

}



export default App;


// to do

// have to generate id for each user and display it in a success message

// food chart item page 

// sign in sign up function