import { useContext, useState } from 'react'
import { nanoid } from 'nanoid'
import { gameStatusContext } from '../App'

export default function Question({ questionsData }) {
    const [startGame, setStartGame] = useContext(gameStatusContext)
    const [finishGame, setFinishGame] = useState(false)

    const [userChoices, setUserChoices] = useState({
        0: '',
        1: '',
        2: '',
        3: '',
        4: ''
    })

    function handleSubmit(e){
        e.preventDefault();
        setFinishGame(true);
    }

    function handleClick(value, correct, index, e){
        e.preventDefault();
        console.log('value',value, 'correct?', correct, 'index:', index)
        setUserChoices({...userChoices, [index]: value})
    }

    function setBtnStyle (answer, correct){
        if(!finishGame){
            return Object.values(userChoices).includes(answer)?
            'btn-selected' :
            ''
        } else if(Object.values(userChoices).includes(answer)){
            return correct === true ? 'correct' : 'incorrect'
        }
    }

    return (
        <div >
            {questionsData.map((elem, i)=> (
                <div 
                key={i}
                className='question-block'>
                <h3 
                dangerouslySetInnerHTML={{__html: elem.question}}></h3>
                <div className='answer-btns'>
                {elem.allAnswers.map(item=> (
                    <button 
                    key={nanoid()}
                    dangerouslySetInnerHTML={{__html: item.value}} 
                    onClick={(e)=>handleClick(item.value, item.isCorrect, i, e)}
                    className={
                        // Object.values(userChoices).includes(item.value)?
                        // 'btn-selected' :
                        // ''
                        setBtnStyle(item.value, item.isCorrect)
                    }
                    ></button>
                ))}
                </div>
                <hr />
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Answers</button>
        </div>
    )
}