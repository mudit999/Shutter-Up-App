import React, { useState,useEffect } from 'react';
import { projectAuth,providerGoogle } from './../firebase/config';
import Login from './Login/Login';
import MainContent from './MainContent/MainContent';

const UserAuth = () => {

    // useState
     const [user, setUser] =useState('');
     const [email, setEmail] =useState('');
     const [password, setPassword] = useState('');
     const [emailError, setEmailError] = useState('');
     const [passwordError, setPasswordError] = useState('');
     const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const loginHandler = () => {
        clearErrors();
        projectAuth.signInWithEmailAndPassword(email,password)
        // .then(cred => console.log('cred' + cred.user.uid))
        .catch((err) => {
            switch (err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
                default:
                    console.log('');
                    break;
            }
        });
        
    }

    const signUpHandler = () => {
        clearErrors();
        projectAuth.createUserWithEmailAndPassword(email,password)
        .catch((err) => {
            switch (err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
                default:
                    console.log('');
                    break;
            }
        });
    };

    const logoutHandler = () => {
        projectAuth.signOut();
    }

    //to get the user by setting observer
    const authListener = () => {
        projectAuth.onAuthStateChanged((user) => {
            if(user){
                // if user sign in
                clearInputs();
                setUser(user)
            }else{
                setUser('')
            }
        })
    }

    // const extractedUID = () => {
    //     let currUser = projectAuth.currentUser;
    //     projectAuth.onAuthStateChanged(function(currUser) {
    //         if (currUser != null) {
    //             let uniqueID = currUser.uid;
    //             // console.log(uniqueID);
    //             setUid(uniqueID);
    //           // User is signed in.
    //         } else {
    //           // No user is signed in.
    //           console.log('user not signed in');
    //         }
    //       });
    // }


    useEffect(() => {
        authListener();
        // extractedUID();
    },[]);


    const signUpwithGoogle = () => {
                // Sign in with google auth method
        projectAuth.signInWithPopup(providerGoogle).then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // var credential = result.credential;
    
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
        // // ...
        })
        
        // .catch((error) => {
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
        // });
  
    }


    return(
        <div>
            {user 
            ?(
                <MainContent 
                    logoutHandler = {logoutHandler}/>
            ):(
                <Login 
                email = {email}
                setEmail = {setEmail}
                password = {password}
                setPassword = {setPassword}
                loginHandler = {loginHandler}
                signUpHandler = {signUpHandler}
                hasAccount = {hasAccount}
                setHasAccount = {setHasAccount}
                emailError = {emailError}
                passwordError = {passwordError}
                signUpwithGoogle = {signUpwithGoogle}
                />  
            )}

        </div>
    );
}

export default UserAuth;