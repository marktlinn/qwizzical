import { useState} from 'react';
import { nanoid } from 'nanoid';

export default function Quiz({ questions }) {
  const [questionSelectedBlock, setQuestionSelectedBlock] = useState({0:false, 1:false, 2:false, 3:false});


  console.log(questionSelectedBlock)
  function handleClick(e){
    const correctAnswer = e.target.getAttribute('correct-answer');
    const index = +e.target.getAttribute('index')
    setQuestionSelectedBlock(prevState => ({
      ...prevState,
      [index]: !questionSelectedBlock[index]
    }))
    console.log(correctAnswer)
      console.log('index',index,questionSelectedBlock)
    // console.log(e.target.value === correctAnswer)

  }
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
            id={`${item}-${index}`}
            index={index}
            correct-answer={elem.correctAnswer}
            value={item}
            onClick={handleClick}
            dangerouslySetInnerHTML={{__html: item}}
            />)}
            </div>
            <br />
            <hr />
          </div>
          ))}
        </ul>
    </div>
  )
}