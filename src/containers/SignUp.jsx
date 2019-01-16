import React, { Component} from 'react'
import {Link} from "react-router-dom";

const style={
    container:{
        marginTop:'10%'
    }
}


class SignUp extends Component {

    state={
        username:'',
        password:'',
        cPassword:''
    }


    render() {
        return (
            <form>

                <div className="container" style={style.container}>
                    <div className="form-group row justify-content-center">
                        <input type="text" className="form-control col-11 col-md-8 col-lg-5" id="username" placeholder="Username"/>
                    </div>
                    <div className="form-group row justify-content-center">
                        <input type="password" className="form-control col-11  col-md-8 col-lg-5" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group row justify-content-center">
                        <input type="password" className="form-control col-11  col-md-8 col-lg-5" id="cPassword" placeholder="Confirm Password"/>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-success col-3">Submit</button>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <Link className="col-3 text-center" to='/signin'>Have account? signin. </Link>
                    </div>
                </div>

            </form>
        )
    }
}

export default SignUp