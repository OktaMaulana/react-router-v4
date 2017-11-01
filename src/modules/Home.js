import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="jumbotron">
                                <h2 className="display-3">Home</h2>
                                <p className="lead">This is a simple React.</p>
                                <h3>SPA (single page application)</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Home;