
let init={
}

let authReducer=(state=init, action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            console.log(action.type)
            return({
                ...state,
                authError: null,
            })
        case "LOGIN_ERROR":
            console.log(action.type)
            return({
                ...state,
                authError:action.error.message,
            })
        case "LOGOUT_SUCCESS":
            console.log(action.type)
            return({
                ...state,
                authError:null
            })
        case "SIGNUP_SUCCESS":
            console.log(action.type)
            return({
                ...state,
                authError:null
            })
        case "SIGNUP_ERROR":
            console.log(action.type)
            return({
                ...state,
                authError:action.error.message
            })
        default:
            return state
    }
}

export default authReducer