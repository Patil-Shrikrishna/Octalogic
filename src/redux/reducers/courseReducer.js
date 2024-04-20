import * as types from "../actions/actionTypes";
const storedCourses = JSON.parse(localStorage.getItem("courses"));
const initialState = {
  courses: storedCourses,
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
