import React, { Component} from 'react'

const style={
    container:{
        marginTop:'12%'
    }
}


class SignIn extends Component {

    state={
        username:'',
        password:''
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
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-primary col-3">Submit</button>
                    </div>
                </div>

            </form>
        )
    }
}

export default SignIn