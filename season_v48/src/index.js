import React from 'react';
import ReactDOM from 'react-dom'

/*
Functional Component
const App = () =>{

     
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return(
        <div>
            Latitude:
        </div>
    );
};
*/

/* class componenet */
export default class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //WE MUST CALL setState for update!!!!!
                this.setState({lat: position.coords.latitude})
            },
            (err) => console.log(err)
        );
        
    }


    render() {
        
        return (
            <div>
            Latitude: {this.state.lat}
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.querySelector('#root'));

