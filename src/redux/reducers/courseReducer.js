import * as types from "./actionTypes";

const initialState = {
  courses: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload.course],
      };
    default:
      return state;
  }
};

export default courseReducer;
