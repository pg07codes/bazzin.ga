import React, { Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signIn} from '../actions/authAction'

const style={
    container:{
        marginTop:'12%'
    }
}


class SignIn extends Component {

    state={
        email:'',
        password:''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.signIn(this.state)
    }


    render() {

        if(this.props.loggedIn===true){
            return <Redirect to="/"/>
        }

        return (
            <form onSubmit={this.handleSubmit}>

                <div className="container" style={style.container}>
                    <div className="form-group row justify-content-center">
                        <input onChange={this.handleChange} type="email" className="form-control col-11 col-md-8 col-lg-5" id="email" placeholder="Email"/>
                    </div>
                    <div className="form-group row justify-content-center">
                        <input onChange={this.handleChange} type="password" className="form-control col-11  col-md-8 col-lg-5" id="password" placeholder="Password"/>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-success col-3">Submit</button>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <Link className="col-2" to='/signup'>new here? signup! </Link>
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


const mapDispatchToProps=(dispatch)=>{
    return{
        signIn:(creds)=>dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)