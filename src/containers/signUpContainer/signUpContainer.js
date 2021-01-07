import './signUpContainer.css';
import React from 'react';
import SignUp from '../../components/Signup/signUp';
// import SignUp from './components/Signup/signUp';
import { Route, Switch } from 'react-router-dom';


class SignUpContainer extends React.Component{
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
        <div className="container">
          <SignUp checkSubmission={this.checkSubmission} changed={this.changed} />
        </div>
      );
  }

}



export default SignUpContainer;
