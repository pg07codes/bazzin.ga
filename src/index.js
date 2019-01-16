import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers'
import {BrowserRouter} from 'react-router-dom'
import { createStore , applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import fbConfig from './fbConfig'


const store=createStore(rootReducer,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
))



ReactDOM.render(<Provider store={store}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
