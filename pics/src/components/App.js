import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './SearchBar'


const  App = () => {
    return (
            <React.Fragment>
                <div className='ui container' style={{ marginTop : '10px'}}>
                <SearchBar></SearchBar>
                </div>
            </React.Fragment>
        );
}

export default App;