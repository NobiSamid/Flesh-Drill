import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }

    /////// Observe user state chante (Dont forget this part)
    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
        });
        return () => unsubscribed;
    },[])
    //////////// Unsubscribed  is used for better performance

    const logOut = () => {
        signOut(auth)
        .then(()=>{});
    }
    return {
        user ,
        signInUsingGoogle ,
        logOut
    }
}

export default useFirebase;
