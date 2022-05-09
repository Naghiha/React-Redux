import * as type from '../actions/actionType'
import initialState from './initialState';

export default function courseReducer(state=initialState.courses,action){
    switch(action.type){
        case type.CREATE_COURSE:
            return [...state,{...action.course}]
        case type.LOAD_COURSES_SUCCESS:
            return action.courses;

        default:
            return state;
    }
}