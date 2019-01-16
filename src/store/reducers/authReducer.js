let init={}

let authReducer=(state=init, action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            console.log(action.type)
            return({
                ...state,
                authError: null,
                loggedIn:true
            })
        case "LOGIN_ERROR":
            console.log(action.type)
            return({
                ...state,
                authError:action.error,
                loggedIn:false
            })
        default:
            return state
    }
}

export default authReducer