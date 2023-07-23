import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loader, useLoader] = useState({});

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            alert("Sign Up Successful")
        }).catch((error) => { alert(error) })
    }





    const authinfo = { user, createUser }

    return (
        <div>
            <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;