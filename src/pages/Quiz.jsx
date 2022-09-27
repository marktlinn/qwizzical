import { useState} from 'react';
import { nanoid } from 'nanoid';

export default function Quiz({ questions ,answers, setAnswers}) {
  const [questionSelectedBlock, setQuestionSelectedBlock] = useState({0:false, 1:false, 2:false, 3:false});
  const [gameFinished, setGameFinished] = useState(false);
  // console.log(answers.map(item=> item.map(answer=> answer.answer)))

  console.log(questions)

  function clicker(){
    console.log('hello')
  }

  // function handleClick(e){
  //   const correctAnswer = e.target.getAttribute('correct-answer');
  //   const index = +e.target.getAttribute('index')
  //   const itemNum = e.target.getAttribute('itemNum');
  //   const btnId = e.target.id
  //   const value = e.target.value
  //   const objKey = Object.values(selected[index])
  //   // const item = Object.values(quest[index])
  //   setQuestionSelectedBlock(prevState => ({
  //     ...prevState,
  //     [index]: !questionSelectedBlock[index]
  //   }))
  //   if(selectedAnswer.length<=4){
  //     setSelectedAnswer(prev=> [...prev, value])
  //   }
  //   setSelectedAnswer(prev=> !prev)
  //   console.log('itemNum', itemNum<)
  // }

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
            <div 
            className='answer-btns'
            onClick={clicker}>
            {/* {elem.answers.map((item, itemNum)=> 
              <button 
              key={nanoid()}
              id={`${item}-${index}`}
              index={index}
              // itemNum={itemNum}
              correct-answer={elem.correctAnswer}
              value={item}
              // onClick={handleClick}
              dangerouslySetInnerHTML={{__html: item}}
              />)} */}
            </div>
            <br />
            <hr />
          </div>
          ))}
        </ul>
    </div>
  )
}