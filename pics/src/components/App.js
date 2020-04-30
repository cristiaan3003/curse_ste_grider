import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'

import SearchBar from './SearchBar'


class  App extends React.Component {

    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
            headers: {
                Authorization: 'Client-ID fE32I_b5LZuwgt5FYHoxD7JgYVm_cij9wxB_HFcsuDk'
            }

        });
        console.log(response.data.results);
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