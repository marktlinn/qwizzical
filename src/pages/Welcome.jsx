import React from 'react';

export default function Welcome( {startgame, setStartGame} ) {

    function handleClick (){
        setStartGame(true);
    }

    return (
        <div className="welcome-page">
            <div className='welcome-card'>
            <h1>Qwizzical</h1>
            <p>Welcome to Qwizzical, the daily quiz app. Please click the button below to start your daily quiz.</p>
            <button onClick={handleClick}>Go to Quiz</button >
            </div>
        </div>
    )

}