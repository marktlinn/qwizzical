import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function Question({ questionsData }) {
    const [finishGame, setFinishGame] = useState(false)
    const [score, setScore] = useState(0);

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
        if(!finishGame){
            setUserChoices({...userChoices, [index]: value})
            if(userChoices[index] === value && correct === true){
                setScore(prev+1);
            }; 
        }
        else return
    }


    function setBtnStyle (answer, correct, i){
        if(!finishGame){
            return Object.values(userChoices)[i] === answer?
            'btn-selected' :
            ''
        } 
        else {
            if(userChoices[i] === answer && correct === true){
                return 'correct';
            } 
            else if (userChoices[i] === answer && correct === false){
                return 'incorrect'
            }
            else if (correct === true){
                return 'missed-correct'
            }
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
                        setBtnStyle(item.value, item.isCorrect, i)
                    }
                    ></button>
                ))}
                </div>
                <hr />
                </div>
            ))}
            <div className='under-game-display'>
                {<p>You scored: {score}/5 correct answers</p>}
                <button onClick={handleSubmit}>Submit Answers</button>
            </div>
        </div>
    )
}