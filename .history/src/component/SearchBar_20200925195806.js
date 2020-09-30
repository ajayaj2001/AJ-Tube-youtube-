import React, { Component } from 'react'

export class SearchBar extends Component {
    state = { input: "" }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onsubmit(this.state.input);
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search:</label>
                        <input type="text" value={this.state.input} onChange={e => this.setState({ input: e.target.value })} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
