import React, { Component , Fragment} from 'react';
import Navbar from './components/Navbar'
//import actions from './actions'
import {Switch, Route} from 'react-router-dom'
import SignIn from './containers/SignIn'
import Trending from './components/Trending'
import SignUp from './containers/SignUp'


class App extends Component {
  render() {
    return (
        <Fragment>

            <Navbar/>

            <Switch>
                <Route exact path='/signin' component={SignIn}/>
                <Route exact path='/signUp' component={SignUp}/>

            </Switch>

            <Trending/>


        </Fragment>
    );
  }
}

export default App;
