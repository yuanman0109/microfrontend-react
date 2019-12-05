import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter, Switch, Route } from 'react-router-dom'
import routes from "./routes";
import reducer from './reducers'
const appName = require('../package.json').name;

const store = createStore(reducer);
class Child extends Component {
  componentDidMount() {
    console.log('child componentDidMount', this.props)
  }
  render() {
    return <Provider store={store}>
      <HashRouter>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              exact
              path={route.path}
              render={() => <route.component globalStore={this.props.text} globalDispatch={this.props.dispatch} />}
            />
          ))}
        </Switch>
      </HashRouter>
    </Provider>
  }
}

// ReactDOM.render(<Child />, document.getElementById("app"));
export default Child
