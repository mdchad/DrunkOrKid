import React, { Component } from 'react';
import './LoadingHOC.css';


const LoadingHOC = (propName) => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    isEmpty = (prop) => {
      return (
        prop === null ||
        prop === undefined ||
        (prop.hasOwnProperty('length') && prop.length === 0) ||
        (prop.constructor === Object && Object.keys(prop).length === 0)
      );
    }
    render() {
      return this.isEmpty(this.props[propName]) ? <div className="wrap"><div className="anim"></div><div className="box"></div></div> : <WrappedComponent {...this.props} />;
    }
  }
}


export default LoadingHOC;