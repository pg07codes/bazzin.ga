/*created by Pranav Gupta(pg07codes) on 22/1/19*/

import Unsplash , {toJson}from 'unsplash-js'
import KEYS from '../config'
const unsplash = new Unsplash({
    applicationId: `${KEYS.API_KEY}`,
    secret: `${KEYS.API_SECRET}`,
})


export default ()=>{
    console.log(unsplash)

    return (dispatch,getState)=>{
        console.log("in return ");

        unsplash.photos.listCuratedPhotos(2, 15, "latest")
            .then(toJson)
            .then(json => {
                console.log("fetched images")
                dispatch({type:"UPDATE_CURATED", json})
            }).catch(e=>{
                console.log(e);
        });

    }
}