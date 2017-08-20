import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};

        this.onInputChange = this. onInputChange.bind(this);
    }
    onInputChange(e){
        console.log(e.target.value);
        this.setState({ term: e.target.value });
    }    
    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </span>
            </form>
        );
    }
}