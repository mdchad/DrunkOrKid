import React, { Component } from 'react';

export default class Question extends Component {
  // Set initial state of isHidden to false
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    }
  }
  // Toggle the visibility
  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };
  // Render the component
  render() {
    const { answer: {id, title, selftext} } = this.props;
    const { isHidden } = this.state;
    return (
      <div key={id}>
        <p className="title">{title}</p>
        <button onClick={this.toggleHidden}>Answer</button>
        { isHidden && <Show>{selftext}</Show> }
      </div>
    );
  }
}

const Show = ({children}) => <p className="answer">{children}</p>;

