/*created by Pranav Gupta(pg07codes) on 22/1/19*/

let init={
    curatedImages:[],
    isLoading:false
}

let curatedImagesReducer=(state=init, action)=>{
    switch(action.type){
        case "UPDATE_CURATED":
            return({
                ...state,
                curatedImages:[...state.curatedImages,...action.json]
            })
        case "LIMIT_REACHED":
            return state
        default:
            return state
    }
}

export default curatedImagesReducer