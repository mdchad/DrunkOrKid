import React from 'react';
import Question from './Question';
import LoadingHOC from './HOC/LoadingHOC';


class Wrap extends React.Component {
  constructor(){
    super()
  }

  render(){
    const answer = this.props.answer.slice(2)
    return (
      <div>
        <h1>Drunk or Kid</h1>
        {
          answer.map(({answer: id}) =>
            <Question answer={answer} key={id} />
          )
        }
      </div>
    )
  }
}

export default LoadingHOC('answer')(Wrap);