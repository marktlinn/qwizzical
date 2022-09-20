import React, { useEffect, useContext, useState} from 'react'
import { TokenContext } from '../context/TokenContext';



export default function Question (){
  const { apiToken } = useContext(TokenContext)

  const [questions, setQuestions] = useState('')
  const [correctAnswer1, setCorrectAnswer1] = useState('')
  const [correctAnswer2, setCorrectAnswer2] = useState('')
  const [correctAnswer3, setCorrectAnswer3] = useState('')
  const [correctAnswer4, setCorrectAnswer4] = useState('')
  const [correctAnswer5, setCorrectAnswer5] = useState('')
  const [answersQ1, setAnswersQ1] = useState('')
  const [answersQ2, setAnswersQ2] = useState('')
  const [answersQ3, setAnswersQ3] = useState('')
  const [answersQ4, setAnswersQ4] = useState('')
  const [answersQ5, setAnswersQ5] = useState('')
  
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
    async function getQuestions(){
      try {
        if(apiToken){
          const questionsRaw = await fetch(`https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple&token=${apiToken}`);
          const data = await questionsRaw.json();
          const results = await data.results;
          setQuestions(results.map(elem=> elem.question));
          setCorrectAnswer1(results[0].correct_answer);
          setCorrectAnswer2(results[1].correct_answer);
          setCorrectAnswer3(results[2].correct_answer);
          setCorrectAnswer4(results[3].correct_answer);
          setCorrectAnswer5(results[4].correct_answer);
          setAnswersQ1(results[0].incorrect_answers)
          setAnswersQ2(results[1].incorrect_answers)
          setAnswersQ3(results[2].incorrect_answers)
          setAnswersQ4(results[3].incorrect_answers)
          setAnswersQ5(results[4].incorrect_answers)
        }
        
      } catch (error) {
          console.log(`Error with fetching questions: ${error}`)
      }
    }
    getQuestions()
  }, [])
  return (
      <div className='question-card'>
        {questions && <ul>
            {questions.map(question=> <li>{question}</li>)}
        </ul>}

        

      </div>
  )
}