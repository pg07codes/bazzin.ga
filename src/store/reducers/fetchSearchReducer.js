/*created by Pranav Gupta(pg07codes) on 26/1/19*/

let init={
    searchResults:[],
    isLoading:false,
    isSearching:false
}

let fetchSearchReducer=(state=init, action)=>{
    switch(action.type){
        case "SEARCH_IS_LOADING":
            return{
                ...state,
                isLoading:action.isLoading,
                isSearching:action.isSearching
            }

        case "SEARCH_RESULTS_UPDATE":
            return{
                ...state,
                searchResults: action.json.results,
                totalPages:action.json.total_pages
            }
        default:
            return state
    }
}

export default fetchSearchReducer