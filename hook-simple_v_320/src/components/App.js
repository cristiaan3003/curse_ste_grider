import React from 'react';
import ReactDOM from 'react-dom'


class App extends React.Component{
    state = {resourse: 'posts'};
    render(){
        return(
            <div>
                <button onClick={() => this.setState({resourse: 'post'})}>post</button>
                <button onClick={() => this.setState({resourse: 'todo'})}>todo</button>
                <br/>
                {this.state.resourse}
                
            </div>
        );
    }
}

export default App;