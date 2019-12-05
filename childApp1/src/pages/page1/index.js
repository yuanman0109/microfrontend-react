import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.scss'
class Page1 extends Component {
  componentDidMount() {
    console.log('page1', this.props)
  }
  render() {
    return (
      <div className="page1">
        <h1>page1</h1>
        <p>global store: {this.props.globalStore}</p>
        <p>child store: {this.props.text}</p>
        <button onClick={() => {
          this.props.dispatch({ type: 'UPDATE_TEXT', text: 'from page1'})
        }}>child dispatch</button>
        <button onClick={() => {
          this.props.globalDispatch({ type: 'UPDATE_TEXT', text: 'from page1'})
        }}>global dispatch</button>
      </div>
    );
  }
}

export default connect(store=> store)(Page1);
