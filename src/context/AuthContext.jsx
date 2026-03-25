import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Define authorized admins
  const authorizedAdmins = [
    'rwandacosmeticsimporterscooper@gmail.com',
    'jamaicabrandon1@gmail.com'
  ];

  const login = async (email, password) => {
    // DEV MODE: Allow immediate access while Firebase is being configured
    if (authorizedAdmins.includes(email) && password === 'rcic123') {
      console.log('Dev Login Successful');
      setCurrentUser({ email, uid: 'dev-admin' });
      return true;
    }
    
    // PRODUCTION: Real Firebase Authentication
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && authorizedAdmins.includes(user.email)) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    isAdmin: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
