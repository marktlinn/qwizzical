import React, { useEffect, useContext, useState, useId} from 'react'
import { TokenContext } from '../context/TokenContext';
import { nanoid } from 'nanoid';

export default function Question (){
  const { choices, isLoading } = useContext(TokenContext)

  const questions = choices.map(elem=> elem.question);
  const answer = choices.map(elem=> elem.answers)
  return (
      <div className='question-card'>
        <h3>Today's Questions</h3>

        { questions && <ul>
          {questions.map((question, index)=> {
            return (
              <div className='question-block' key={nanoid()}>
              <li>{question}</li>
                <div className='answer-btns'>
                  {answer[index].map(item=> <button key={nanoid()}>{item}</button>)}
                </div>
                <hr />
              </div>
            )
          })}
          </ul>}
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