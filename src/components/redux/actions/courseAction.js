import * as type from './actionType'

export function createCourse(course){
    return {type:type.CREATE_COURSE,course}
}