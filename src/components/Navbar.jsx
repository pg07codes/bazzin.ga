import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from "../actions/authAction";
import Avatar from '@material-ui/core/Avatar'
import Logo from '../css/logo.png'
let Navbar=(props)=> {
    return (
            <nav className="navbar navbar-expand-lg fixed navbar-light bg-light">

                <NavLink className="navbar-brand" to="/">
                    <img src={Logo} width="30" height="30"
                         style={{borderRadius:"50%", margin:"0 2px"}}
                         className="d-inline-block align-top" alt="Bazzinga Logo"/>
                        BaZZinga
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigator"
                        aria-controls="navigator" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navigator">


                    {props.loggedIn?(
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">

                                <Avatar style={{backgroundColor:"#009670"}} className="nav-link" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">PG</Avatar>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <NavLink style={{color:"#009670"}} className="dropdown-item" to="/favourites">Favourites</NavLink>
                                    <NavLink style={{color:"#009670"}} className="dropdown-item" to="/downloads">Downloads</NavLink>
                                    <div style={{color:"#009670"}}  role="separator" className="dropdown-divider"/>
                                    <button style={{color:"#009670"}}  className="dropdown-item" onClick={props.signOut}>Logout</button>
                                </div>

                            </li>
                        </ul>
                        ):(

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signin"><i style={{color:"#009670"}} className="fas fa-sign-in-alt"/></NavLink>
                            </li>
                        </ul>
                    )}

                </div>

            </nav>

    )
}

let mapStateToProps=(state)=>{
    return{
        loggedIn:!state.firebase.auth.isEmpty,
        //initials:state.firebase.auth.
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Navbar)