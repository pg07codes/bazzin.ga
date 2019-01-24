import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import FB_CONFIG from './fbConfigKeys'
//
// let {FB_API_KEY,
//     FB_AUTH_DOMAIN,
//     FB_DATABASE_URL,
//     FB_PROJECT_ID,
//     FB_STORAGE_BUCKET,
//     FB_MESSAGING_SENDER_ID}=FB_CONFIG
//  THESE ARE COMMENTED SO THAT THE NETLIFY MAY PICK KEYS FROM ENV VARS and 'process.env.' for netlify builds only #JUGAAD

let firebaseConfig= {
    apiKey: JSON.stringify(process.env.FB_API_KEY),
    authDomain: JSON.stringify(process.env.FB_AUTH_DOMAIN),
    databaseURL: JSON.stringify(process.env.FB_DATABASE_URL),
    projectId: JSON.stringify(process.env.FB_PROJECT_ID),
    storageBucket: JSON.stringify(process.env.FB_STORAGE_BUCKET),
    messagingSenderId: JSON.stringify(process.env.FB_MESSAGING_SENDER_ID)
}

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase