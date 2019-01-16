/*created by Pranav Gupta(pg07codes) on 16/1/19*/

import authReducer from './authReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth:authReducer
})

export default rootReducer