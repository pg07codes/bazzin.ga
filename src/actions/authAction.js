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

export const signOut=()=>{
    return(dispatch,gS,{getFirebase})=>{
        const firebase=getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type:"SIGNOUT_SUCCESS"})
        })
    }
}


export const signUp=(newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{

        const firebase=getFirebase();
        const firestore=getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
          return firestore.collection('users').doc(resp.user.uid).set({
              firstName:newUser.firstName,
              lastName:newUser.lastName,
              initials:newUser.firstName[0].toUpperCase()+newUser.lastName[0].toUpperCase()
          })
        }).then(()=>{
            dispatch({type:"SIGNUP_SUCCESS"})
        }).catch((error)=>{
            dispatch({type:"SIGNUP_ERROR",error})
        })


    }

}