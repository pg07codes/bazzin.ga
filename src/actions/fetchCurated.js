/*created by Pranav Gupta(pg07codes) on 22/1/19*/

import Unsplash , {toJson}from 'unsplash-js'
// import KEYS from '../config'
// let {UN_API_KEY,UN_API_SECRET}=KEYS
// THESE ARE COMMENTED SO THAT THE NETLIFY MAY PICK KEYS FROM ENV VARS and 'process.env.' for netlify builds only #JUGAAD

const unsplash = new Unsplash({
    applicationId: process.env.UN_API_KEY,
    secret: process.env.UN_API_SECRET
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