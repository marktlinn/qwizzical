import React, { createContext, useEffect, useState, } from 'react'

export const TokenContext = createContext()

export function TokenContextProvider ({children}) {
    const [apiToken, setApiToken] = useState(()=>{
        if(localStorage.getItem('token')){
          return (localStorage.getItem('token'))
        } 
        else{
          return null
        }
      })
    // // fetch repsonse token on first load.
    useEffect(()=>{
    async function retrieveAPIKey(){
        try{
            if(!apiToken){
            const apiKey = await fetch("https://opentdb.com/api_token.php?command=request");
            const data = await apiKey.json()
            const token = await data.token
            if(token){
                localStorage.setItem('token', token)
                setApiToken(token)
                console.log('token set:', token)
                }
            }
        }
        catch (error){
            console.log(`Error fetching token ${error}`)
        }
    }
    retrieveAPIKey();
    }, [])

    return (
        <TokenContext.Provider value={{apiToken}}>
            {children}
        </TokenContext.Provider>
    )
}
