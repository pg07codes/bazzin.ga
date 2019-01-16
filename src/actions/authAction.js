/*created by Pranav Gupta(pg07codes) on 16/1/19*/

export const signIn=(creds)=>{
    return(dispatch,getState,{getFirebase})=>{

        const firebase=getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(()=>{
            dispatch({type:"LOGIN_SUCCESS"})
        }).catch((error)=>{
            dispatch({type:"LOGIN_ERROR",error})
        })

    }

}