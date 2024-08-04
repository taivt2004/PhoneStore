import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'
export const AppContext = createContext();

export const  AppContextProvider = props => {
    const {children} = props;
    const [Email, setEmail] = useState('')
    const [Pass_CT, setPass_CT] = useState('')
    const [NameUser, setNameUser] = useState('')
    
  return (
   <AppContext.Provider value={{Email: Email, setEmail: setEmail, Pass_CT: Pass_CT, setPass_CT : setPass_CT, NameUser: NameUser, setNameUser : setNameUser}}>
        {children}
   </AppContext.Provider>
  )
}

export default AppContextProvider

const styles = StyleSheet.create({})