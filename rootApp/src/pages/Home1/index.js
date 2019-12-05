import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import './style.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>这里是home1</h1>
        <Link to="/child#/page2">跳转到page2</Link>
      </div>
      
    );
  }
}

export default Home;
