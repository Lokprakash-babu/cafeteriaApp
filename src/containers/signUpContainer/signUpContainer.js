import './signUpContainer.css';
import React from 'react';
import SignUp from '../../components/Signup/signUp';
import Modal from '../../components/modal/modal';

class SignUpContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        isError: false,
        user: false,
        show: false,
        userId:null
      };
  }

  changed(e){
    document.getElementById(e.target.id+"Container").innerHTML=e.target.value;
  }


  checkSubmission=(event)=>{
    event.preventDefault();
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
      (success)=>{
        console.log('success', success);
        if(success['userExist']){
          alert('User already exist ');
        }
        else if(success['userExist']===false){
          this.setState({
            show:true,
            userId:success['response']
          });
        }
      },
      (err)=>{
        alert('Reduce the photo size to less than 36KB');
      }
    )
  }

  closeModal=()=>{
    this.setState({
      show: false
    })
  }
  render(){
    return (
        <div className="container">
          <Modal show={this.state.show} handleClose={this.closeModal}>
            {`User successfully registered and the user id is  
            "${this.state.userId}"`}
          </Modal>
          <SignUp checkSubmission={this.checkSubmission} changed={this.changed} />
        </div>
      );
  }
}

export default SignUpContainer;
