import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    //create user
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            alert("Sign Up Successful")
        }).catch((error) => { alert(error) })
    }

    //login user
    const login = (email, password) => {
        setLoader(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Log in Successful");
            })
            .catch((error) => {
                alert(error)
            })
    }

    //user login with gmail
    const gmailLogin = () => {
        signInWithPopup(auth, googleProvider).then((useCredential) => {
            alert("Login done")
        }).catch((error) => {
            alert(error)
        })
    }

    //  log out
    const logout = () => {
        signOut(auth).then(() => {
            alert("Log Out Successful")
        }).catch((error) => {
            alert(error);
        })
    }

    //set user state
    useEffect(() => {
        const unsbuscriber = () => {
            onAuthStateChanged(auth, (user) => {
                setUser(user)
                setLoader(false)
            })
        }
        return () => {
            unsbuscriber()
        };
    }, [])


    const authinfo = { user, loader, createUser, login, gmailLogin, logout }

    return (
        <div>
            <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;