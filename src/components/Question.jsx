import React, { useEffect, useContext, useState} from 'react'
import { TokenContext } from '../context/TokenContext';



export default function Question (){
  const { apiToken } = useContext(TokenContext)
  const [questions, setQuestions] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(null)
  const [choices, setChoices] = useState([])
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }
  

  useEffect(()=>{
    const abortController = new AbortController();
    async function getQuestions(){
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
  }, [apiToken])

  return (
      <div className='question-card'>
        {questions && <ul>
            {questions.map((question, index)=> {
            return (
            <div>
              <li>{question}</li>
              {shuffleArray(choices[index]).map((elem)=> <button>{elem}</button>)}
            </div>
            )})}
        </ul>}
          <p></p>
        

      </div>
  )
}