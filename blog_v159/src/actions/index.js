import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import _ from 'lodash'

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

export const fetchUser = (id) => async dispatch =>_fetchUser(id, dispatch);
const _fetchUser = _.memoize ( async  (id, dispatch ) =>{
    const response = await jsonPlaceHolder.get(`/users/${id}`); //get('/users/'+id); 
    dispatch({type: 'FETCH_USER' , payload: response});
});
