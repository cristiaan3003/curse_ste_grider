import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import ResourseList from './ResourseList'


const App = () =>{
        const [resourse, setResource] = useState('posts');
        return(
            <div>
                <button onClick={() => setResource('posts')}>posts</button>
                <button onClick={() => setResource('todos')}>todos</button>
                <br/>
                <ResourseList resourse={resourse}></ResourseList>
                
            </div>
        );
    }

export default App;