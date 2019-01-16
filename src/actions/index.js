/*created by Pranav Gupta(pg07codes) on 7/1/19*/


import Unsplash , {toJson}from 'unsplash-js'
import KEYS from '../config'

const unsplash = new Unsplash({
    applicationId: `${KEYS.API_KEY}`,
    secret: `${KEYS.API_SECRET}`,
})

unsplash.photos.listPhotos(2, 15, "latesat")
    .then(toJson)
    .then(json => {
        console.log(json)
    });


export {}