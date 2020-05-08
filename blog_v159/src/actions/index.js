import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import _ from 'lodash'




export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
    console.log('fetcpostusers')
    await dispatch( fetchPosts());
    //console.log(getState().posts.data)
    const userIds = _.uniq(_.map(getState().posts.data,'userId'));
    //console.log(userIds);
    //userIds.forEach(id => dispatch(fetchUser(id))); // it's de same a "await Promise.all, but promise all is best approach"

    await Promise.all( userIds.map(id => dispatch(fetchUser(id)) ));

}

//large code
/*export const fethPosts = () => {
    return async (dispatch) =>{
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response})
    };
};*/


//short code
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({type: 'FETCH_POSTS' , payload: response});
};

export const fetchUser = id => async dispatch =>{
    const response = await jsonPlaceHolder.get(`/users/${id}`); //get('/users/'+id); 
    dispatch({type: 'FETCH_USER' , payload: response});
};
