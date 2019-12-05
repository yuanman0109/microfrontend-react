import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'systemjs/dist/system.min.js'
import 'systemjs/dist/extras/amd.min.js'
import 'systemjs/dist/extras/named-exports.min.js'
import 'systemjs/dist/extras/named-register.min.js'
import 'systemjs/dist/extras/transform.min.js'
import App from 'pages/App';
import './global'

import reducer from './reducers';
const store = createStore(reducer);
ReactDOM.render(<Provider store={store}><App /></Provider>  , document.getElementById("app"));
