import React from 'react';

class SearchBar extends React.Component{

    onInputChange(fff){
        console.log(fff.target.value)
    }
    
    render(){
        return (
            <React.Fragment>
                <div className='ui segment'>
                    <form className='ui form'>
                        <div className='field'>
                            <label>Image Seach</label>
                            <input type='text' onChange={this.onInputChange}/>    
                        </div>                    
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;