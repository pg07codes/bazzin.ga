import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


let  config = {
    apiKey: "AIzaSyDOC6THWxiWughnvec7dBUflsgkzKKRD6k",
    authDomain: "bazzinga-69cd8.firebaseapp.com",
    databaseURL: "https://bazzinga-69cd8.firebaseio.com",
    projectId: "bazzinga-69cd8",
    storageBucket: "bazzinga-69cd8.appspot.com",
    messagingSenderId: "794203257625"
};

firebase.initializeApp(config);

firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase