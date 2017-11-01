import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Route, NavLink, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import logo from '../img/logo.svg';
import Home from './Home';
import Submit from './Submit';
import Movie from './Movie';
import NotFound from './NotFound';
// import registerServiceWorker from '../registerServiceWorker';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} width="40" className="d-inline-block align-top App-logo" alt="logo"/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Nav1" aria-controls="Nav1" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="Nav1">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/" >Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/submit">Submit Recipe</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/movie">Movie</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/submit" component={Submit} history={history}/>
                  <Route path="/movie" component={Movie}/>
                  <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        );
    }
}
export default App;
// registerServiceWorker();
