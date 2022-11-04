import { useState} from 'react';
import { nanoid } from 'nanoid';
import Question from '../components/Questions'
export default function Quiz({ questions }) {
    return (
    <div className='question-card'>
      <h3>Today's Questions</h3>
        <Question questionsData={questions}/>
    </div>
  )
}