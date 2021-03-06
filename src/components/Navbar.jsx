import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from "../actions/authAction";
import Avatar from '@material-ui/core/Avatar'

let Navbar=(props)=> {
    return (
            <nav className="navbar navbar-expand-lg fixed navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigator"
                        aria-controls="navigator" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navigator">


                    {props.loggedIn?(
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">

                                <Avatar className="nav-link" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">XX</Avatar>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <NavLink className="dropdown-item" to="/favourites">Favourites</NavLink>
                                    <NavLink className="dropdown-item" to="/downloads">Downloads</NavLink>
                                    <div role="separator" className="dropdown-divider"/>
                                    <button className="dropdown-item" onClick={props.signOut}>Logout</button>
                                </div>

                            </li>
                        </ul>
                        ):(

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signin"><i className="fas fa-sign-in-alt"/></NavLink>
                            </li>
                        </ul>
                    )}

                </div>

            </nav>

    )
}

let mapStateToProps=(state)=>{
    return{
        loggedIn:!state.firebase.auth.isEmpty
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Navbar)