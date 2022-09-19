import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {

    const routeToQuiz = () => {
        useNavigate('/quiz')
    }

    return (
        <div className='Welcome-page'>
            <h1>Welcome page</h1>
            <Link to="/quiz"><button>Go to Quiz</button></Link>
        </div>
    )

}