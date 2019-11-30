import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import ShopPage from './components/Shop/Shop';
import HomePage from './pages/Home/Home';
import Header from './components/Header/Header';
import AuthPage from './pages/Auth/Auth';
import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';


class App extends Component {

  state = { currentUser: null };
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);

        });        
      } 

      this.setState({ currentUser: userAuth })
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/auth' component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
