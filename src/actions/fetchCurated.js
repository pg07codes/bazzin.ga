/*created by Pranav Gupta(pg07codes) on 22/1/19*/

import Unsplash , {toJson}from 'unsplash-js'
import KEYS from '../config'
const unsplash = new Unsplash({
    applicationId: `${KEYS.API_KEY}`,
    secret: `${KEYS.API_SECRET}`,
})


export default (pageNum)=>{

        return (dispatch,getState)=>{

            unsplash.photos.listCuratedPhotos(pageNum, 15, "latest")
                .then(toJson)
                .then(json => {
                    dispatch({type:"UPDATE_CURATED", json})
                })
                .catch(e=>{
                    console.log(e);
                });

        }

}