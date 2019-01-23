import React, {Fragment} from 'react'
import {Redirect} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

let Favourites= props => {
    if(props.loggedIn){
        return (
            <h3>favs</h3>
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


export default connect(mapStateToProps)(Favourites)