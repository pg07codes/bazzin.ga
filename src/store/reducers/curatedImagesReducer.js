/*created by Pranav Gupta(pg07codes) on 22/1/19*/

let init={
    curatedImages:[]
}

let curatedImagesReducer=(state=init, action)=>{
    switch(action.type){
        case "UPDATE_CURATED":
            console.log("curated updated")
            return({
                ...state,
                curatedImages:[...state.curatedImages,...action.json]
            })
        default:
            return state
    }
}

export default curatedImagesReducer