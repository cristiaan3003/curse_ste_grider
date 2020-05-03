import React from 'react';
import ReactDOM from 'react-dom'
import unsplash from '../api/unsplash'

import SearchBar from './SearchBar'
import ImageList from './ImageList'


class  App extends React.Component {

    state = {images : []};

    onSearchSubmit = async (term) =>{
        const response = await unsplash.get('search/photos',{
            params: {query: term}
        });
        this.setState({images: response.data.results})
    }

    render () {
        return (
            <React.Fragment>
                <div className='ui container' style={{ marginTop : '10px'}}>
                        <SearchBar runMeWhenUserPressEnter={this.onSearchSubmit}></SearchBar>
                        <ImageList images = {this.state.images}></ImageList>
                </div>
            </React.Fragment>
        );
    }
}

export default App;