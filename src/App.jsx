import { useState, useEffect} from 'react'
import { Route , BrowserRouter as Router, Routes } from 'react-router-dom'
// pages and components
import Welcome from '../src/pages/Welcome'
import Question from './components/Question'
import Quiz from './pages/Quiz'


function App() {
  // Setting state
  const [apiToken, setApiToken] = useState(()=>{
    if(localStorage.getItem('token')){
      return (localStorage.getItem('token'))
    } 
    else{
      return null
    }
  })
  // // fetch repsonse token on first load.
  useEffect(()=>{
    async function retrieveAPIKey(){
        try{
          if(!apiToken){
            const apiKey = await fetch("https://opentdb.com/api_token.php?command=request");
            const data = await apiKey.json()
            const token = await data.token
            if(token){
              localStorage.setItem('token', token)
              setApiToken(token)
              console.log('token set:', token)
            }
          }
        }
        catch (error){
            console.log(`Error fetching token ${error}`)
        }
    }
    retrieveAPIKey();
  }, [])

  //set global context from token

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
