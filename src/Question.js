import React from 'react';

export default class Question extends React.Component {
  // Set initial state of isHidden to false
  constructor() {
    super();
    this.state = {
      isHidden: false
    }
    this.toggleHidden = this.toggleHidden.bind(this)
  }
  // Toggle the visibility
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  // Render the component
  render() {
    const { answer } = this.props;
    return (
      <div key={answer.id}>
        <p className="title">{answer.title}</p>
        <button onClick={this.toggleHidden}>Answer</button>
        {this.state.isHidden && <Show>{answer.selftext}</Show>}
      </div>
    );
  }
}

const Show = (props) => <p className="answer">{props.children}</p>

