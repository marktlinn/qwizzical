import { useState } from 'react'
// pages and components
import Welcome from '../src/pages/Welcome'
import Quiz from './pages/Quiz'


function App() {
  //setting states
  const [startGame, setStartGame] = useState(false)
  return (
        <div>
            {!startGame ? 
            <Welcome 
              startGame={startGame}
              setStartGame={setStartGame}
            /> :
            <Quiz/>}
        </div>
  )
}

export default App
