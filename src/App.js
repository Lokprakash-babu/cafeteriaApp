import './App.css';
import React from 'react';
import SignUpContainer from './containers/signUpContainer/signUpContainer';
import paymentContainer from './containers/paymentContainer/paymentContainer';
import { Link, Route, Switch } from 'react-router-dom';
import Menu from './components/menu/menu';
import Home from './components/home/home';

function App() {
  
  //Used React router to get single page application(SPA) feel

  /* /menu will take to menu page 
    /payment will take to payment page
    /signUp will take to signup page
    / will take to home page

  */
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
                <Route path='/' component={Home} exact/>
                <Route path="/menu" component={Menu}/>
                <Route path="/signUp" component={SignUpContainer} />
                <Route path="/payment" component={paymentContainer} />
              </Switch>
            </main>
        </div>
      );
}


//This function will show which page is active in the navigation bar 
function navItemClicked(e){
  document.getElementsByClassName('active')[0].classList.remove('active');
  document.getElementsByClassName('app-bar-menu')[0].classList.remove('opened');
  document.getElementsByClassName('app-bar-menu')[0].classList.add('collapsed');
  document.getElementsByClassName('app-bar-menu')[0].style.display='none';

  e.target.classList.add('active');
}


export default App;

