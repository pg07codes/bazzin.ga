/*created by Pranav Gupta(pg07codes) on 22/1/19*/

import Unsplash , {toJson}from 'unsplash-js'
import KEYS from '../config'
let {UN_API_KEY,UN_API_SECRET}=KEYS

const unsplash = new Unsplash({
    applicationId: `${UN_API_KEY}`,
    secret: `${UN_API_SECRET}`,
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