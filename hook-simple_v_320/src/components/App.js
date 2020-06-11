import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import ResourseList from './ResourseList'


const App = () =>{
        const [resource, setResource] = useState('posts');
        return(
            <div>
                <button onClick={() => setResource('posts')}>posts</button>
                <button onClick={() => setResource('todos')}>todos</button>
                <br/>
                <ResourseList resource={resource}></ResourseList>
                
            </div>
        );
    }

export default App;