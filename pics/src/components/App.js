import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './SearchBar'


class  App extends React.Component {

    onSearchSubmit(term){
            console.log(term);
    }

    render () {
        return (
            <React.Fragment>
                <div className='ui container' style={{ marginTop : '10px'}}>
                        <SearchBar runMeWhenUserPressEnter={this.onSearchSubmit}></SearchBar>
                </div>
            </React.Fragment>
        );
    }
}

export default App;