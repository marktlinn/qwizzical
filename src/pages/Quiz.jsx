import React from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

export default function Quiz({ questions }) {

  // const quest = questions.map(({questions, answers})=> (questions))
  // const answers = questions.map(({answers})=> answers)
    return (
      <div className='question-card'>
        <h3>Today's Questions</h3>
        <ul>
          {questions.map((elem,index)=> (
          <div 
          key={nanoid()}
          className='question-block'>
            <li 
              dangerouslySetInnerHTML={{__html: elem.questions}}
            />
            <div className='answer-btns'>
            {elem.answers.map(item=> <button 
            key={nanoid()}
            dangerouslySetInnerHTML={{__html: item}}
            />)}
            </div>
            <hr />
          </div>
          ))}
          <br />

        {/* { questions &&  <div dangerouslySetInnerHTML={{__html: {quest}}}/>} */}
        </ul>
    </div>
  )
}