import React, {Fragment} from 'react';
import {connect} from 'react-redux'

import {fetchPostsAndUsers} from '../actions'
import UserHeader from './UserHeader'

class PostList extends React.Component{

    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    renderListPost () {
        console.log('renderListPost')
        console.log(this.props.posts.length);
        if(this.props.posts.length !==0){
            return this.props.posts.data.map(post =>{
                return ( <Fragment> 

                            <div className='item' key={post.id}>
                                <i className='large middle aligned icon user'/>
                                    <div className='content'>
                                        <div className='description'>
                                            <h2>{post.title}</h2>
                                            <h3>{post.body}</h3>
                                        </div>
                                        <UserHeader userId={post.userId}/>
                                    </div>
                            </div>
                                
                        </Fragment>            
                );});
        }else{
            return <div> Loading posts!</div>;
        }
    
    }
    render(){
        console.log(this.props)    
        return    (
            <div>
                {this.renderListPost()}
            </div>
        );
    }
}

const mapToStateToProps = (state) =>{
    return {posts: state.posts}
};

export default connect(mapToStateToProps, {
    fetchPostsAndUsers : fetchPostsAndUsers
}
    )(PostList);