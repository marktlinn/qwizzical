import { useState, useEffect } from 'react'
const SECRET = import.meta.env.VITE_SECRET

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
    <div className="App">
      <h1>{SECRET}</h1>
    </div>
  )
}

export default App
