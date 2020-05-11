import React from 'react';


class GoogleAuth extends React.Component{
    state= {isSignedIn: null};

    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '976152491179-mlf05qtqli73u8codclfs8slej37qkd9.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get(this.onAuthChange)});
            });
        });
        //then(()=>{          this.auth= window.gapi.auth2.getAuthInstance();
    }

    onAuthChange = () =>{
        this.setState({isSignedIn: this.auth.isSignedIn()});
    }

    onSignIn = () =>{
        this.auth.signIn();
    }

    onSingOut = () =>{
        this.auth.signOut();
    }

    renderAuthButton(){
        if (this.state.isSignedIn === null){
            return null;
        }else if (this.state.isSignedIn){
            return (
                <button className='ui red google button' onClick={this.onSingOut}>
                    <i className='google icon'/>
                    Sign Out
                </button>
            );
        }else{
            return (
                <button className='ui red google button' onClick={this.onSignIn}>
                    <i className='google icon'/>
                    Sign in with Google
                </button>
            );
        }
    }

    render() {
            return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;