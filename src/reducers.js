import {
  CHANGE_SEARCHFIELD,
  FETCH_API_PEDDING,
  FETCH_API_SUCCESS,
  FETCH_API_FAIL
} from "./constants";

const initSearchField = {
  searchField: ""
};

export const searchRobots = (state = initSearchField, action = {}) => {
  if (action.type === CHANGE_SEARCHFIELD) {
    return Object.assign({}, state, { searchField: action.payload });
  }
  return state; //always return default state or it will get undefine in the beginnng
};

const initRobots = {
  robots: [],
  isPending: false,
  err: ""
};

export const fetchRobotApi = (state = initRobots, action = {}) => {
  switch (action.type) {
    case FETCH_API_PEDDING:
      return { ...state, isPending: true };
    case FETCH_API_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    case FETCH_API_FAIL:
      return { ...state, isPending: false, err: action.payload };
    default:
      return state;
  }
};
