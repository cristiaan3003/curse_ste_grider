import React from 'react';

export default class SearchBar extends React.Component{

    state = {textSearch: ''};

    searchTerm = event =>{
        event.preventDefault();

        //TODO: remember callback from parent component method
        this.props.runWhenUserSearch(this.state.textSearch);
    };

    onInputChange = (event) =>{
        this.setState( {textSearch: event.target.value});
    };

    render(){
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.searchTerm}>
                    <div className="ui category search">
                            <div className="ui icon input">
                                <input className="prompt" 
                                type="text" 
                                placeholder="Video Search..."
                                value = {this.state.textSearch}
                                onChange = {this.onInputChange}
                                ></input>
                                <i className="search icon"></i>
                            </div>
                    <div className="results"></div>
                    </div>
                </form>
        </div>
        );
    }
}