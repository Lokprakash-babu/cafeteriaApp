import './App.css';
import React from 'react';
import SignUpContainer from './containers/signUpContainer/signUpContainer';
import { Link, Route, Switch } from 'react-router-dom';


class App extends React.Component{
  
  render(){
    return (
        <main>
          <Switch>
            <Route path="/signUp" component={SignUpContainer} />
          </Switch>
        </main>
      );
  }

}



export default App;


// to do

// have to generate id for each user and display it in a success message

// food chart item page 

// sign in sign up function