import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.scss';

class Page2 extends Component {
  render() {
    return (
      <div className="page2">
          <h1>这里是child项目路由{location.hash}</h1>
          <p>global redux: {this.props.text}</p>
          <Link to="/page4">子项目4</Link>
          <Link to="/page5">子项目5</Link>
      </div>
    );
  }
}

export default Page2;
