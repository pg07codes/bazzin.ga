/*created by Pranav Gupta(pg07codes) on 16/1/19*/

import authReducer from './authReducer'
import { combineReducers } from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import curatedImagesReducer from './curatedImagesReducer'
import fetchSearchReducer from "./fetchSearchReducer";
//import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth:authReducer,
    firebase:firebaseReducer,
    cImg:curatedImagesReducer,
    sImg:fetchSearchReducer
})

export default rootReducer