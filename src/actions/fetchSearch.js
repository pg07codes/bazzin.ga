/*created by Pranav Gupta(pg07codes) on 26/1/19*/

/*created by Pranav Gupta(pg07codes) on 22/1/19*/

import Unsplash , {toJson}from 'unsplash-js'
import KEYS from '../config.json'
let {UN_API_KEY,UN_API_SECRET}=KEYS
// THESE ARE COMMENTED SO THAT THE NETLIFY MAY PICK KEYS FROM ENV VARS and 'process.env.' for netlify builds only #JUGAAD

const unsplash = new Unsplash({
    applicationId:UN_API_KEY,
    secret: UN_API_SECRET
})
//
// const unsplash = new Unsplash({
//     applicationId: process.env.REACT_APP_UN_API_KEY,
//     secret:process.env.REACT_APP_UN_API_SECRET
// })



export default (searchTerm,pageNum)=>{

    return (dispatch,getState)=>{

        // hardcoded no of images to fetch due to bug in infinte scroll package..
        unsplash.search.photos(searchTerm,1,30)
            .then(toJson)
            .then(json => {
                console.log("fetchSearch",json)
                dispatch({type:"SEARCH_RESULTS_UPDATE",json})
                dispatch({type:"SEARCH_IS_LOADING",isLoading:false, isSearching:false})
            })
            .catch(e=>{
                console.log(e);
            });

    }

}