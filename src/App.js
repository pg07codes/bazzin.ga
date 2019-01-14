import React, { Component , Fragment} from 'react';
import Navbar from './components/Navbar'
//import actions from './actions'

import SignIn from './containers/SignIn'

class App extends Component {
  render() {
    return (
        <Fragment>
            <Navbar/>
            <SignIn/>

        </Fragment>
    );
  }
}

export default App;
