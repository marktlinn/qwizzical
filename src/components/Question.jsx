import React, { useEffect, useState,} from 'react'
import { nanoid } from 'nanoid';

export default function Question (){
  const [selectedAnswer, setSelectedAnswers] = useState({})
  // const questions = choices.map(elem=> elem.question);
  function answer() {
    return choices.map(elem=> elem.answers)
  }
  // function handleClick(e){
  //   const btnAnswer = e.target.textContent;
  //   const btnId = e.target.id
  //   const blockId = btnId[btnId.length-1];
  //   if(Object.keys(selectedAnswer).includes(btnId)){
  //     return e.target.classList = '';
  //     }
  //   else{
  //     e.target.classList = 'btn-selected'

  //       ...prev,
  //       btnId: blockId
  //     }))
  //   }
  //   console.log(selectedAnswer)
  // }
  /*
  select btn
  click btn
    check all buttons in block
      if none selected, select btn
      else, deselect others and select current

  */
  return (
      <div className='question-card'>
        <h3>Today's Questions</h3>

        {/* { questions && <ul>
          {questions.map((question, index)=> {
            return (
              <div className='question-block' key={nanoid()}>
              <li>{question}</li>
                <div className='answer-btns'>
                  {answer[index].map(item=> <button 
                  onClick={handleClick}
                  id={`${item}-${index}`}
                  key={nanoid()}>{item}</button>)}
                </div>
                <hr />
              </div>
            )
          })}
          </ul>} */}
        {/* {questions && <ul>
            {questions.map((question, index)=> {
            return (
            <div className='question-block' key={nanoid()}>
              <li >{question}</li>
              <div className='answer-btns'>
                <button>hello</button>
              </div>
                <hr/>
            </div>
            )})}
        </ul>} */}
          <p></p>
        

      </div>
  )
}