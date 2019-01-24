import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import FB_CONFIG from './fbConfigKeys'

let {FB_API_KEY,
    FB_AUTH_DOMAIN,
    FB_DATABASE_URL,
    FB_PROJECT_ID,
    FB_STORAGE_BUCKET,
    FB_MESSAGING_SENDER_ID}=FB_CONFIG

let firebaseConfig= {
    apiKey: FB_API_KEY,
    authDomain: FB_AUTH_DOMAIN,
    databaseURL: FB_DATABASE_URL,
    projectId: FB_PROJECT_ID,
    storageBucket: FB_STORAGE_BUCKET,
    messagingSenderId: FB_MESSAGING_SENDER_ID
}

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase