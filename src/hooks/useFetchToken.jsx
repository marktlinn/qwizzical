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

  //Fetch on page load if API Token exist
  useEffect(()=>{
    const abortController = new AbortController();
    const signal = abortController.signal;
    if(apiToken){
        async function getQuestions() {
          setIsLoading(true);
          try {
            const questionsRaw = await fetch(`https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=multiple&token=${apiToken}`);
            const data = await questionsRaw.json();
            if(data.response_code !== 0){
              localStorage.removeItem('token');
              return setApiToken(null);
            }
            else{
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
        getQuestions();
  } 

    //If API Token fails/receives an error code
    // retrieve a new token And setApiToken to trigger refetch with correct token.
    else if (!apiToken) {
      async function retrieveAPIKey(){
            try{
              const apiKey = await fetch("https://opentdb.com/api_token.php?command=request");
              const data = await apiKey.json()
              const token = await data.token
                if(token){
                  localStorage.setItem('token', JSON.stringify(token))
                  return setApiToken(token)
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