import React, { useState } from 'react'
import React from 'react'

const SearchBar = ({ onsubmit }) => {
    const [input, setInput] = useState("")
    const onFormSubmit = (event) => {
        event.preventDefault();
        onsubmit(input);
    }
    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Search:</label>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar


