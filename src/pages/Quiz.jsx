import { useState} from 'react';
import { nanoid } from 'nanoid';

export default function Quiz({ questions}) {
  const [questionSelectedBlock, setQuestionSelectedBlock] = useState({0:false, 1:false, 2:false, 3:false});
  const [gameFinished, setGameFinished] = useState(false);
  // console.log(answers.map(item=> item.map(answer=> answer.answer)))


  const allAnswers = () => questions.map(question=> question.allAnswers.map(answer=> answer))

  function btnClick(e){
    const btnId = e.target.id;
    questions.map(question=> question.allAnswers.map(answer=> {
      if(answer.id === btnId){
        return answer.isSelected = !answer.isSelected
      }
    }))
    console.log(questions.map(question=> question.allAnswers.map(answer=> answer)))
  }

    return (
    <div className='question-card'>
      <h3>Today's Questions</h3>
      <ul>
        {questions && questions.map((question, index)=> (
        <div key={nanoid()} className='Q-block'>

          <li dangerouslySetInnerHTML={{__html: question.question}}></li>
          <div className='answer-btns'>
            {question.allAnswers.map(answer=> (
              <button 
                key={nanoid()} 
                id={answer.id} 
                index={index}
                onClick={btnClick}
                dangerouslySetInnerHTML={{__html: answer.value}}
              ></button>
            ))}
          </div>
          <hr />
        </div>
        ))}
      </ul>
    </div>
  )
}