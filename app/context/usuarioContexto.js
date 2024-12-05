// app/context/usuarioContexto.js
"use client"; 

import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('userEmail') || null;
    }
    return null; // Retorna null se estiver no servidor
  });

  const updateUserEmail = (email) => {
    console.log('Atualizando userEmail:', email);
    setUserEmail(email);
    if (typeof window !== 'undefined') {
      localStorage.setItem('userEmail', email);
    }
  };

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail: updateUserEmail }}>
      {children}
    </UserContext.Provider>
  );    
};

export const useUser = () => {
  return useContext(UserContext);
};