import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = props => {
const { promiseInProgress } = usePromiseTracker();
return (
    promiseInProgress && 
<h1>Hey some async call in progress ! </h1>
);  
}

ReactDOM.render(<BrowserRouter><Provider store={store}><PersistGate persistor={persistor}><App /><LoadingIndicator/></PersistGate></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
