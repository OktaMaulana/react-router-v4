import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import MovieResults from './MovieResults';
import FavoriteMovieList from './FavoriteMovieList';
import logo from '../img/logo.svg';


const img = {
    verticalAlign: 'text-top'
};

class Movie extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="jumbotron">
                                <h2 className="display-3"><img src={logo} width="100" className="App-logo" alt="logo" style={img}/>Movie</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="btn-group" role="group">
                                <NavLink exact to="/movie" activeClassName="btn-success" className="btn btn-primary">Movie Results</NavLink>
                                <NavLink to="/movie/favorite" activeClassName="btn-success" className="btn btn-primary">Favorite Movie List</NavLink>
                            </div>
                        </div>
                        <Switch>
                            <Route exact path="/movie" component={MovieResults}/>
                            <Route path="/movie/favorite" component={FavoriteMovieList}/>
                        </Switch>
                    </div>
                </div>
            </section>
        );
    }
}
export default Movie;