import {React, useEffect, useContext} from 'react'

const apiToken = useContext(apiTokenContext);
const [questions, setQuestions] = useState(null)

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
export default function Question (){
    return (
        <div>
            <h3></h3>
        </div>
    )
}