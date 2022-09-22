import React, { useEffect, useContext, useState} from 'react'
import { TokenContext } from '../context/TokenContext';



export default function Question (){
  const { correctAnswers, choices, questions } = useContext(TokenContext)
  const [ answerSelection, setAnswerSelection ] = useState([]) 
  const [ selectorBtn, setSelectorBtn ] = useState({0:false, 1:false, 2:false, 3:false, 4:false})
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  const btnSelected = (e, index) => {
    e.preventDefault();
    if(selectorBtn[index] === false){
      selectorBtn[index] = true;
    }
    else {
      selectorBtn[index] = false;
    }
    // setAnswerSelection(prev=> [...prev, e.target.textContent])
    // console.log(selectorBtn[index])
  }
  
  return (
      <div className='question-card'>
        <h3>Today's Questions</h3>
        {questions && <ul>
            {questions.map((question, index)=> {
            return (
            <div className='question-block'>
              <li>{question}</li>
              <div className='answer-btns'>
                {shuffleArray(choices[index]).map((elem)=> <button onClick={e=> btnSelected(e, index)}>{elem}</button>)}
              </div>
                <hr/>
            </div>
            )})}
        </ul>}
          <p></p>
        

      </div>
  )
}