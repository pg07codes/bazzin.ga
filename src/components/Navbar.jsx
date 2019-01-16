import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'

export default props => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg fixed navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <form className="form-inline ml-auto">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-alert my-2 my-sm-0" type="submit">
                            <i className="fas fa-search"/>
                        </button>
                    </form>

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