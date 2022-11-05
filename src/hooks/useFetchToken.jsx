import { useState, useEffect } from 'react';


function useFetchToken() {
  //State setup for fetch function
  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiToken, setApiToken] = useState(()=>{
    const localKey = localStorage.getItem('token');
    console.log(localKey) 
    return localKey !== null ? 
      JSON.parse(localKey) :
      null;
  })

  //If API Token fails/receives an error code
  // retrieve a new token

  //Fetch on page load if API Token exist
  useEffect(()=>{
    const abortController = new AbortController();
    const signal = abortController.signal;
    if(apiToken){
        async function getQuestions() {
          setIsLoading(true);
          try {
            console.log('fetching questions')
            const questionsRaw = await fetch(`https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple&token=${apiToken}`);
            const data = await questionsRaw.json();
            if(data.response_code !== 0){
              localStorage.removeItem('token');
              console.log(data.response_code)
              setApiToken(null);
            }
            setQuestions(()=>{
              return data.results.map(questions => {
                const question = questions.question
                const incorrect = questions.incorrect_answers.map(answer => {
                    return {value: answer, isCorrect: false};
                });
                
                const correct = {value: questions.correct_answer, isCorrect: true};
                const correctAnswers = {value: questions.correct_answer}
                const allAnswers = [...incorrect, correct].sort(()=>Math.random() -0.5);

                return {question, allAnswers, correctAnswers}; 
            });
            })
          }catch (error) {
            if (!signal.aborted) {
            setError(error);
            }
          } finally{
            if (!signal.aborted){
                setIsLoading(false)
            }
          }
        }
        getQuestions();
  } 
    else if (!apiToken) {
      async function retrieveAPIKey(){
            try{
              console.log('fetching new APIToken')
              const apiKey = await fetch("https://opentdb.com/api_token.php?command=request");
              const data = await apiKey.json()
              const token = await data.token
                if(token){
                  localStorage.setItem('token', JSON.stringify(token))
                  setApiToken(token)
                }
            }catch (error) {
              if (!signal.aborted) {
              setError(error);
              }
            } finally{
              if (!signal.aborted){
                  setIsLoading(false)
              }
            }
        }
        retrieveAPIKey();
    } 
    return () => {
        abortController.abort();
      };
    },[apiToken])
  
  return { questions, error, isLoading };
};

export default useFetchToken;