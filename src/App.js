import React, { Component , Fragment} from 'react';
import Navbar from './components/Navbar'
import {Switch, Route} from 'react-router-dom'
import SignIn from './containers/SignIn'
import CuratedImages from './components/CuratedImages'
import SignUp from './containers/SignUp'


class App extends Component {
  render() {
    return (
        <Fragment>

            <Navbar/>

            <Switch>
                <Route exact path='/signin' component={SignIn}/>
                <Route exact path='/signUp' component={SignUp}/>
                <Route exact path='/' component={CuratedImages}/>
            </Switch>




        </Fragment>
    );
  }
}

export default App;
