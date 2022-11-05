import Question from '../components/Questions';
import useFetchToken from '../hooks/useFetchToken'
import { InfinitySpin } from 'react-loader-spinner'

export default function Quiz() {
  const { questions, error, isLoading } = useFetchToken()
  console.log(questions)
  console.log(isLoading)
    return (
    <div className='question-card'>
      <h3>Today's Questions</h3>
      { !questions ? 
      <InfinitySpin 
        width='200'
        color="#9a1b9a"
      /> :
        <Question questionsData={questions}/>
      }
    </div>
  )
}