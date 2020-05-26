import React, {useState} from 'react';
import ReactDOM from 'react-dom'


const App = () =>{
        const [resourse, setResource] = useState('posts');
        return(
            <div>
                <button onClick={() => setResource('posts')}>posts</button>
                <button onClick={() => setResource('todos')}>todos</button>
                <br/>
                {resourse}
                
            </div>
        );
    }

export default App;