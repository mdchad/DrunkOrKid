import React from 'react';
import Question from './Question';
import LoadingHOC from './HOC/LoadingHOC';


const Wrap = ({answer}) => {
  const question = answer.slice(2)
  return (
    <div>
      <h1>Drunk or Kid</h1>
      {
        question.map(answer =>
          <Question answer={answer} key={answer.id}/>
        )
      }
    </div>
  )
}

export default LoadingHOC('answer')(Wrap);