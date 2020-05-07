import jsonPlaceHolder from '../apis/jsonPlaceHolder'

//large code
/*export const fethPosts = () => {
    return async (dispatch) =>{
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response})
    };
};*/


//short code
export const fethPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({type: 'FETCH_POSTS' , payload: response});
};

