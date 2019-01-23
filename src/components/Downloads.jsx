import React, {Fragment} from 'react'
import {signIn} from "../actions/authAction";
import { Redirect} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";

let Downloads=props => {

    if(props.loggedIn){
        return (
            <h3>downloads</h3>
        )
    }

    return(
        <Redirect to="/signin"/>
    )


}

let mapStateToProps=(state)=>{
    return{
        loggedIn:!state.firebase.auth.isEmpty
    }
}


export default connect(mapStateToProps)(Downloads)