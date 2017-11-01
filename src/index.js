import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';

import App from './modules/App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import './css/App.css';


// const history = createBrowserHistory()
ReactDOM.render(
    <Router>
        <App/>
    </Router>, 
    document.getElementById('react')
);
registerServiceWorker();
