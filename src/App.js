import React, { Component , Fragment} from 'react';
import Navbar from './components/Navbar'
import {Switch, Route} from 'react-router-dom'
import SignIn from './containers/SignIn'
import CuratedImages from './components/CuratedImages'
import SignUp from './containers/SignUp'
import Favourites from "./components/Favourites";
import Downloads from "./components/Downloads";


class App extends Component {
  render() {
    return (
        <Fragment>

            <Navbar/>

            <Switch>
                <Route exact path='/' component={CuratedImages}/>
                <Route exact path='/signin' component={SignIn}/>
                <Route exact path='/signUp' component={SignUp}/>
                <Route exact path='/favourites' component={Favourites}/>
                <Route exact path='/downloads' component={Downloads}/>
            </Switch>




        </Fragment>
    );
  }
}

export default App;
