import React, { Component , Fragment} from 'react';
import Navbar from './components/Navbar'
//import actions from './actions'
import {Switch, Route} from 'react-router-dom'
import SignIn from './containers/SignIn'

class App extends Component {
  render() {
    return (
        <Fragment>

            <Navbar/>

            <Switch>
                <Route exact path='/signin' component={SignIn}/>
            </Switch>


        </Fragment>
    );
  }
}

export default App;
