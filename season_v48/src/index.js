import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


//Functional Component
/*const App = () =>{

     
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return(
        <div>
            Latitude:
        </div>
    );
};*/

/* class componenet */
export default class App extends React.Component {   

    
    /*constructor(props){
        super(props);
        this.state = {lat: null, errorMessege: ''};

    window.navigator.geolocation.getCurrentPosition(
        position => {
            this.setState({lat: position.coords.latitude});
        },
        err => {
            this.setState({errorMessege: err.message});
        }
    )
    }*/

    state = {lat: null, errorMessege: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessege: err.message})
        )
        }
    

    componentDidUpdate(){
        console.log('My component is re-redered')
    }

    renderContent(){
        if(this.state.errorMessege && !this.state.lat){
            return <div> Error: {this.state.errorMessege}</div>
        }
    
        if(!this.state.errorMessege && this.state.lat){
            return (
                <div> 
                <SeasonDisplay lat={this.state.lat}/> 
                </div>
            );
        }            
        
            return (
                <div>
                        <Spinner message='Share location with me? :)'/>
                </div>
                );
    }



    render() {
        return(
        <React.Fragment>
            <div className={`.border`}>
                {this.renderContent()}
            </div>
        </React.Fragment>
    );            
    }
}


ReactDOM.render(<App/>,document.querySelector('#root'));

