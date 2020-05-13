import {CREATE_STREAM,FETCH_STREAMS,FETCH_STREAM,DELETE_STREAM,EDIT_STREAM} from '../actions/types';
import _ from 'lodash'

export default (state = {}, action) =>{
    switch (action.type){
        case CREATE_STREAM:
            return {...state, [action.payload.id] : action.payload };
        case FETCH_STREAM:
            return {...state, [action.payload.id] : action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload); // no "action.payload.id" only ""action.payload" bceause the "payload" set in action function -> deleteStream file ( ../actions/index.js) with "id" so not is necesary here put "id"
        case EDIT_STREAM:
            return {...state, [action.payload.id] : action.payload };
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload,'id')};
        default:
            return state;}
}
