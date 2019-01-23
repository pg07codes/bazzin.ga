
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
                authError:action.error,
            })
        case "LOGOUT_SUCCESS":
            console.log(action.type)
            return({
                ...state,
                authError:null
            })
        default:
            return state
    }
}

export default authReducer