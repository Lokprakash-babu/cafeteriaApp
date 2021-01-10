import './App.css';
import React from 'react';
import SignUpContainer from './containers/signUpContainer/signUpContainer';
import paymentContainer from './containers/paymentContainer/paymentContainer';
import { Link, Route, Switch } from 'react-router-dom';
import Menu from './components/menu/menu';

function App() {
  
  
    return (
        <div>
        <div data-role="appbar" data-expand-point="md">
          
          <ul className="app-bar-menu">
              <li><Link to="/" onClick={navItemClicked} className="active">Home</Link></li>
              <li><Link to="/menu" onClick={navItemClicked}>Menu</Link></li>
              <li><Link to="/signUp" onClick={navItemClicked}>Sign up</Link></li>
          </ul>
        </div>
          <main>
            <Switch>
              <Route path="/menu" component={Menu}/>
              <Route path="/signUp" component={SignUpContainer} />
              <Route path="/payment" component={paymentContainer} />
            </Switch>
          </main>
        </div>
      );
}

function navItemClicked(e){
  document.getElementsByClassName('active')[0].classList.remove('active');
  document.getElementsByClassName('app-bar-menu')[0].classList.remove('opened');
  
  document.getElementsByClassName('app-bar-menu')[0].classList.add('collapsed');
  document.getElementsByClassName('app-bar-menu')[0].style.display='none';

  e.target.classList.add('active');
}


export default App;


// to do

// have to generate id for each user and display it in a success message

// food chart item page 

// sign in sign up function