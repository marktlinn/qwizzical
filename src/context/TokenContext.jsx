import React, { createContext, useEffect, useState, } from 'react'

export const TokenContext = createContext()

export function TokenContextProvider ({children}) {
    //state setup
    const [apiToken, setApiToken] = useState(()=>{
        if(localStorage.getItem('token')){
          return (localStorage.getItem('token'))
        } 
        else{
          return null
        }
      })
    const [questions, setQuestions] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(null)
    const [choices, setChoices] = useState([])


    // fetch repsonse token on first load.
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

    useEffect(()=>{
        const abortController = new AbortController();
        async function getQuestions(){
          console.log('fetching questions now')
          try {
            if(apiToken){
              const questionsRaw = await fetch(`https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple&${apiToken}`, { signal: abortController.signal});
              const data = await questionsRaw.json();
              const results = await data.results;
              setQuestions(results.map(elem=> elem.question));
              setChoices(results.map(elem=> [...elem.incorrect_answers, elem.correct_answer]))
              setCorrectAnswers(results.map(elem=> elem.correct_answer))
            }
            
          } catch (error) {
            if(error.name === 'AbortError'){ 
              console.log('fetch aborted')
            }
            else{
              console.log(`Error with fetching questions: ${error}`)
            }
          }
        }
        getQuestions()
        return ()=> abortController.abort()
      }, [])

    return (
        <TokenContext.Provider value={{apiToken, correctAnswers, choices, questions }}>
            {children}
        </TokenContext.Provider>
    )
}
