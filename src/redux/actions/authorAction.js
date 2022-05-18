import * as type from "./actionType";
import * as authorApi from "../../api/authorApi";
import { apiCallError, beginApiCall } from "./apiStatusAction";

export function loadAuthorsSuccess(authors) {
  return { type: type.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall())
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        dispatch(apiCallError(error))
        throw error;
      });
  };
}
