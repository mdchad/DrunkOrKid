import React from 'react';
import './index.css'
import Wrap from './Wrap'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
                    answer: [],
                  }
  }

  componentWillMount(){
    fetch('http://www.reddit.com/r/DrunkOrAKid/hot.json?sort=hot')
      .then(res => res.json())
      .then(data => {
        const answer = data.data.children.map(({data}) => data);
        this.setState({answer});
      })
  }

  render(){
    return (
      <Wrap answer={this.state.answer} />
    )
  }
}

export default App;
