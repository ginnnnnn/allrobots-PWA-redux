import {
  CHANGE_SEARCHFIELD,
  FETCH_API_PEDDING,
  FETCH_API_SUCCESS,
  FETCH_API_FAIL
} from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

export const requestRobots = () => dispatch => {
  dispatch({ type: FETCH_API_PEDDING });
  fetch("https://swapi.co/api/people")
    .then(r => r.json())
    .then(res => {
      dispatch({ type: FETCH_API_SUCCESS, payload: res.results });
    })
    .catch(err => {
      dispatch({ type: FETCH_API_FAIL, payload: err });
    });
};
