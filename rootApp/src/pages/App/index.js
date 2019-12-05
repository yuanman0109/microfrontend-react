import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import routes from "../../routes";
const appName = require('../../../package.json').name;

import './style.scss'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="leftNav">
          <Link to="/">首页</Link>
          <Link to="/home">home1</Link>
          <Link to="/child#/page1">子项目1</Link>
          <Link to="/child#/page2">子项目2</Link>
          <Link to="/child#/page3">子项目3</Link>
          <Link to="/child#/page4">子项目4</Link>
          <Link to="/child#/page5">子项目5</Link>
        </div>
        <div className="container">
        
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
