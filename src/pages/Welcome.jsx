import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {

    const routeToQuiz = () => {
        useNavigate('/quiz')
    }

    return (
        <div className="welcome-page">
            <div className='welcome-card'>
            <h1>Qwizzical</h1>
            <p>Welcome to Qwizzical, the daily quiz app. Please click the button below to start your daily quiz.</p>
            <Link to="/quiz"><button>Go to Quiz</button></Link>
            </div>
        </div>
    )

}