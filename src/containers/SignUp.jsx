import React, { Component} from 'react'
import {Link,Redirect} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {signUp} from '../actions/authAction'

const style={
    container:{
        marginTop:'10%'
    }
}


class SignUp extends Component {

    state={
        email:'',
        password:'',
        cPassword:'',
        firstName: '',
        lastName:''
    }

    onChangeHandler=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    onSubmitHandler=(e)=>{
        e.preventDefault()
        this.props.signUp(this.state)
    }


    render() {
        
        if(this.props.loggedIn===true){
            return <Redirect to="/"/>
        }
        
        
        return (
            <form onSubmit={this.onSubmitHandler}>

                <div className="container" style={style.container}>
                    <div onChange={this.onChangeHandler} className="form-group row justify-content-center">
                        <input type="text" className="form-control col-11 col-md-8 col-lg-5" id="firstName" placeholder="FirstName"/>
                    </div>
                    <div onChange={this.onChangeHandler} className="form-group row justify-content-center">
                        <input type="text" className="form-control col-11 col-md-8 col-lg-5" id="lastName" placeholder="LastName"/>
                    </div>
                    <div onChange={this.onChangeHandler} className="form-group row justify-content-center">
                        <input type="email" className="form-control col-11 col-md-8 col-lg-5" id="email" placeholder="Email"/>
                    </div>
                    <div onChange={this.onChangeHandler} className="form-group row justify-content-center">
                        <input type="password" className="form-control col-11  col-md-8 col-lg-5" id="password" placeholder="Password"/>
                    </div>
                    <div onChange={this.onChangeHandler} className="form-group row justify-content-center">
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

let mapStateToProps=(state)=>{
    return{
        loggedIn:!state.firebase.auth.isEmpty
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        signUp:(newUser)=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
