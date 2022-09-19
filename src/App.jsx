import { useState, useEffect } from 'react'
import { Route , BrowserRouter as Router, Routes } from 'react-router-dom'
import Welcome from '../src/pages/Welcome'
import Quiz from './pages/Quiz'


function App() {
  const [count, setCount] = useState(0)

  // fetch repsonse token on first load.
  useEffect(()=>{
    async function retrieveAPIKey(){
        try{
            const apiKey = await fetch("https://opentdb.com/api_token.php?command=request");
            const data = await apiKey.json()
            const token = await data.token
            console.log(token)
        }
        catch (err){
            console.log(`Erroe fetching token ${err}`)
        }
    }
    retrieveAPIKey();
}, [])
  return (
    <Router>
    <div>
      <Routes>
      <Route path="/" exact element={<Welcome />} />
      <Route path="/quiz" element={< Quiz/>} />
      </Routes>
    </div>
   </Router>
  )
}

export default App
