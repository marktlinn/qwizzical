import Questions from '../components/Questions';
import useFetchToken from '../hooks/useFetchToken'
import { InfinitySpin } from 'react-loader-spinner'

export default function Quiz() {
  const { questions, error, isLoading } = useFetchToken()
    return (
    <div className='question-card'>
      <h3 className='title'>Qwizzical</h3>
      { !questions ? 
      <InfinitySpin 
        width='200'
        color="#9a1b9a"
      /> :
        <Questions questionsData={questions}/>
      }
    </div>
  )
}