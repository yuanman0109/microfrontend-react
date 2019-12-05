import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './style.scss';

class Home extends Component {
  componentDidMount() {
    console.log('home', this.props)
  }
  render() {
    return (
      <div>
        <h1>这里是首页</h1>
        <p>redux:{this.props.text}</p>
        <button onClick={() => {
          this.props.dispatch({
            type: 'UPDATE_TEXT',
            text: 'from home'
          })
        }}>dispatch</button>
        <Link to="/child#/page1">跳转到page1</Link>
      </div>
      
    );
  }
}

export default connect((store) => store)(Home);
