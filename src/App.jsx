import { useState, useEffect, useRef } from 'react'
import { Route , BrowserRouter as Router, Routes } from 'react-router-dom'
import { nanoid } from 'nanoid'
// pages and components
import Welcome from '../src/pages/Welcome'
import Quiz from './pages/Quiz'

function App() {
  
  //setting states
  const [questions, setQuestions] = useState([])
  const [apiToken, setApiToken] = useState(()=>{
    if(localStorage.getItem('token')){
      return (localStorage.getItem('token'));
    }
    else {
      return null;
    }
  })
  // const [questions, setQuestions] = useState(null)
  // fetching the token if it doesn't exist
  // useRef use to block multiples calls for tokens.
  if(!apiToken){
    const effectRan = useRef(false)
    useEffect(()=>{
      if(effectRan.current === false){
      async function retrieveAPIKey(){
        try{
        console.log('fetching APIToken')
            const apiKey = await fetch("https://opentdb.com/api_token.php?command=request");
            const data = await apiKey.json()
            const token = await data.token
              if(token){
                localStorage.setItem('token', token)
                return token
              }
        }
        catch (error){
            console.log(`Error fetching token ${error}`)
        }
      }
      retrieveAPIKey();
      return ()=> {
        console.log('token obtained');
        effectRan.current = true;
        }
      }
    }, [])
  } 

    async function refetchToken(token){
      console.log('fetching a new token', token)
      const request = await fetch(`https://opentdb.com/api_token.php?command=reset&token=${token}`)
      const data = await request.json();
      const newToken = await data.token;
      return newToken;
    }

  //fetch the questions using the retrieved apiToken;
    useEffect(()=>{
        if(apiToken){
          async function getQuestions(){
          try {
            console.log('getting questions')
            const questionsRaw = await fetch(`https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple&token=${apiToken}`);
            const data = await questionsRaw.json();
            if(data.response_code !== 0){
              console.log(data.response_code)
              const newToken = await refetchToken(apiToken)
              // localStorage.setItem('token', newToken)
              console.log('new token is', newToken)
            }
            setQuestions(()=>{
              return data.results.map(questions => {
                        
                const question = questions.question
                const incorrect = questions.incorrect_answers.map(answer => {
                    return {value: answer, id: nanoid(), isSelected: false, isCorrect: false};
                });
                
                const correct = {value: questions.correct_answer, id: nanoid(), isSelected: false, isCorrect: true};
                
                const allAnswers = [...incorrect, correct].sort(()=>Math.random() -0.5);

                return {question, allAnswers, id: nanoid()}; 
            });
        })
          } catch (error) {
            console.log(`Error with question fetch: ${error.message}`);
          }
        }
        getQuestions();
        return ()=>{
            console.log('done')
        }
      }
    }, [apiToken])
  return (
      <Router>
        <div>
            <Routes>
              <Route path="/" exact element={<Welcome />} />
              <Route path="/quiz" element={< Quiz
              questions={questions}
              />} />
            </Routes>
        </div>
    </Router>
  )
}

export default App
