import React from 'react';
import SongList from './SongList'

const App = () =>{

    return (
        <React.Fragment>
            <div className='ui container grid'>
                <div className='ui row'>
                    <div className='column eight wide'>
                    <SongList></SongList>
                    </div>
                </div>
            </div>
        </React.Fragment>
            );
};

export default App;