import React, { createContext, useEffect, useState, } from 'react'

export const TokenContext = createContext()

export function TokenContextProvider ({children}) {
    //state setup
    const [isLoading, setIsLoading] = useState(true);
    const [apiToken, setApiToken] = useState(()=>{
        if(localStorage.getItem('token')){
          return (localStorage.getItem('token'))
        } 
        else{
          return null
        }
      })

    const [choices, setChoices] = useState([])

    // fetch repsonse token on first load.
    useEffect(()=>{
    const abortController = new AbortController();
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
            else return
        }
        catch (error){
            console.log(`Error fetching token ${error}`)
        }
    }
    retrieveAPIKey();
    return ()=> abortController.abort()
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
              const questions = await results.map(elem=> {
                return {
                  ...elem,
                  questions: elem.question,
                  answers: [...elem.incorrect_answers, elem.correct_answer].sort(()=> Math.random() -0.5),
                  correctAnswer: elem.correct_answer,
                }
              })
              setChoices(questions)
              setIsLoading(false)
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
      console.log( 'choices', choices)
    return (
        <TokenContext.Provider value={{ choices, isLoading }}>
            {children}
        </TokenContext.Provider>
    )
}
