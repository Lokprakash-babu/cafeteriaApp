import './signUpContainer.css';
import React from 'react';
import SignUp from '../../components/Signup/signUp';
import Modal from '../../components/modal/modal';
import Loader from 'react-loader-spinner';

class SignUpContainer extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
        user: false,
        show: false,
        userId:null,
        loader:false
      };
  }

  //this will dynamically add the text which we are entering in the form fields to the preview container
  changed(e){
    document.getElementById(e.target.id+"Container").innerHTML=e.target.value;
  }

  //This function will execute when the user clicked the submit button. We will be calling Post request to our API in this function
  checkSubmission=(event)=>{

    event.preventDefault();

    //Display the loader
    this.setState({
      loader:true
    });

    //constructing the body for the post request
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

      //calling the function to make post request to the API endpoint we exposed. 
      if(fullName.length<3){
        this.setState({
          loader:false
        });
        alert('Enter atleast three letters for name');
      }
      else{
        this.callAPI(body);
      }
    }
  }

  //This function will make the post request to our endpoint
  callAPI(body) {

    //making the post request
    fetch('https://sleepy-eyrie-76701.herokuapp.com/', {
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

        //Hiding the loader 
        this.setState({
          loader:false
        })

        //if the user already exist we are displaying an alert box
        if(success['userExist']){
          alert('User already exist ');
        }
        else if(success['userExist']===false){         //if the user is new then we will be showing a success message with userId
          this.setState({
            show:true,
            userId:success['response']
          });
        }
      },
      ()=>{
        this.setState({
          loader:false
        })
        //incase if something failed we will be displaying error message
        alert('Reduce the photo size to less than 36KB');
      }
    )
  }

  //This function is to handle the close request in the modal
  closeModal=()=>{
    this.setState({
      show: false
    })
  }
  render(){
    return (
        <div className="container">

                <Loader
                  className="loader"
                  visible={this.state.loader}
                  type="Bars"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />

              
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
