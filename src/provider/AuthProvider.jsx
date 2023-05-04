import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);
const user = { displayName: 'Anonna' };

const auth = getAuth(app);
const AuthProvider = ({ children }) => {


    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }


    const authInfo = {
        user,
        // loading,
        createUser,
        signIn
        // signInWithGoogle,
        // signInWithGithub,
        // logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;