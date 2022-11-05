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
        if(!finishGame){
            setUserChoices({...userChoices, [index]: value})
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
        // else if(Object.values(userChoices).includes(answer)){
        //     return correct === true ? 'correct' : 'incorrect'
        // }
    }

    //if game is going:
        // if item selected add to userChoices at answer block index
        // item in userChoice at index === answer return 'btn-selected' class
        // otherwise no class
    //if game is finished
        // if userChoices at questionBlock index === answer and correct === true 
            // return 'correct'
            // else return 'incorrect' 
        //  else if correct return class 'missed-correct'

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
                        setBtnStyle(item.value, item.isCorrect, i)
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