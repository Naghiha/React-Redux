import * as type from '../actions/actionType'
import initialState from './initialState';

export default function authorReducer(state=initialState.authors,action){
    switch(action.type){
        case type.LOAD_AUTHORS_SUCCESS:
            return action.authors;

        default:
            return state;
    }
}