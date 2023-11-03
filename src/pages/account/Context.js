import React from 'react'
import { useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
   const [input, setInput] = useState({
     name: "",
     contact: "",
     address: "",
     email: "",
     option: "",
     holder: "",
     acc: "",
     branch: "",
     code: "",
     branchNum: "",
   });
  return (
   <AppContext.Provider value={{ input, setInput}}>
    {children}
   </AppContext.Provider>
  )
}
const useGlobalContext = () => {
    return useContext(AppContext);
}

export  {AppProvider, AppContext, useGlobalContext}