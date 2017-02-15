import React from 'react';
import './index.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
                    answer: [],
                    isHidden: true
                  }
    this.show = this.show.bind(this)
  }

  componentWillMount(){
    fetch('http://www.reddit.com/r/DrunkOrAKid/hot.json?sort=hot')
      .then(res => res.json())
      .then( (data) => {
        const answer = data.data.children.map(obj => obj.data);
        this.setState({answer});
      })
  }

  toggleHidden(){
    this.setState(this.state.isHidden ? false : true)
  }

  render(){
      return <div>
               <h1>Drunk or Kid</h1>
               {this.state.answer.map(answer =>
                <div className="title" key={answer.id}><p>{answer.title}</p>
                  <button onClick={this.toggleHidden}>Answer</button>
                  {!this.state.isHidden && <Show>{answer.selftext}</Show>}
                </div>

               )}
           </div>
  }
}


const Show = (props) => <p className="answer">{props.children}</p>




export default App;
