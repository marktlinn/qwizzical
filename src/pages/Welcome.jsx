import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { gameStatusContext } from '../App'
export default function Welcome() {
    const [startGame, setStartGame] = useContext(gameStatusContext)
    function handleClick (){
        setStartGame(true);
    }

    return (
        <div className="welcome-page">
            <div className='welcome-card'>
            <h1>Qwizzical</h1>
            <p>Welcome to Qwizzical, the daily quiz app. Please click the button below to start your daily quiz.</p>
            <Link onClick={handleClick} to="/quiz"><button>Go to Quiz</button></Link>
            </div>
        </div>
    )

}