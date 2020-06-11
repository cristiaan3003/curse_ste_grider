import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import useLocation from './useLocation'

/*Functiona Componenet*/
/*WITH HOOKS*/
const App = () =>{
    
    const [lat,errorMessage] = useLocation();
    let content;
    if (errorMessage){
        content = <div>Error: {errorMessage}</div>
        }else if (lat){
            content = <SeasonDisplay lat={lat}/> 
        }else{
            content = <Spinner message='Share location with me? :)'/>
        }
    return(
        <div className="border red">
            {content}
        </div>
    );
};

/* class componenet */
/* WITHOUT HOOKS */
/*export default class App extends React.Component {   


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
}*/


ReactDOM.render(<App/>,document.querySelector('#root'));

