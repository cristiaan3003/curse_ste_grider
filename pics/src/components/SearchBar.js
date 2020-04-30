import React from 'react';

class SearchBar extends React.Component{

    state = { term: ''}

    
    onFormSubmit = ggg =>{
        ggg.preventDefault();

        this.props.runMeWhenUserPressEnter(this.state.term);
    }

    render(){
        return (
            <React.Fragment>
                <div className='ui segment'>
                    <form className='ui form' onSubmit={this.onFormSubmit}>
                        <div className='field'>
                            <label>Image Seach</label>
                            <input type='text' 
                            value= {this.state.term}
                            onChange={fff  => this.setState({term: fff.target.value}) }
                            />    
                        </div>                    
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;