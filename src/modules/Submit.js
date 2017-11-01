import React, { Component } from 'react';

class Submit extends Component {

    constructor(props) {
        super(props);

        this.state={};
        this.submitRecipe = this.submitRecipe.bind(this);
    }

    submitRecipe() {
        console.log('Submit A Recipe');
        this.props.history.push('/');
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="jumbotron">
                                <h2 className="display-3">Submit</h2>
                                <p className="lead">This is a simple React.</p>
                                <h3>SPA (single page application)</h3>
                                <hr className="my-4"/>
                                <p className="lead">
                                    <button className="btn btn-primary btn-lg" onClick={this.submitRecipe} >Submit A Recipe</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Submit;