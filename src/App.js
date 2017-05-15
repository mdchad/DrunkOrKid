import React, { Component } from 'react';
import './index.css'
import Wrap from './Wrap'

class App extends Component {
  constructor() {
    super();
    this.state =
      {
        answer: [],
      }
  }

  componentWillMount(){
    const url = 'http://www.reddit.com/r/DrunkOrAKid/hot.json?sort=hot';

    fetch(url)
      .then(res => res.json())
      .then(({data: {children}}) => {
        const answer = children.map(({data}) => data);
        // Assigning answer state to const answer, => answer: [answer]
        this.setState({answer});
      })
  }

  render() {
    return (
      <Wrap {...this.state} />
    )
  }
}

export default App;
