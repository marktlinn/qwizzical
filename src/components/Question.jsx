import React, { useEffect, useContext, useState} from 'react'
import { TokenContext } from '../context/TokenContext';



export default function Question (){
  const [questions, setQuestions] = useState(null)
  const { apiToken } = useContext(TokenContext)
  useEffect(()=>{
    async function getQuestions(){
      try {
        if(apiToken){
          const questionsRaw = await fetch(`https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple&token${apiToken}`)
          const data = await questionsRaw.json()
          const questions = data.results
          setQuestions(questions.map(elem=> elem.question))
        }
        
      } catch (error) {
          console.log(`Error with fetching questions: ${error}`)
      }
    }
    getQuestions()
  }, [])
  return (
      <div>
          <h3>{apiToken}</h3>
      </div>
  )
}