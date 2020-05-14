import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'

const App = () =>{
    return (
        <React.Fragment>
            <div className='ui container'>
            
            <div >
                <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                    <Route  path='/' exact component={StreamList}/>
                    <Route  path='/stream/new' exact component={StreamCreate}/>
                    <Route  path='/stream/delete/:id' exact component={StreamDelete}/>
                    <Route  path='/stream/edit/:id' exact component={StreamEdit}/>
                    <Route  path='/streams/:id' exact component={StreamShow}/>
                    </Switch>
                </div>
                </Router>
            </div>
            </div>
        </React.Fragment>

    );
}

export default App;