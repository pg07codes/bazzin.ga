import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'

export default props => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg fixed navbar-light bg-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signin"><i className="fas fa-sign-in-alt"/></NavLink>
                        </li>
                    </ul>
                </div>

            </nav>
        </Fragment>

    )
}