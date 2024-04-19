// dataReducer.js
import * as types from "./actionTypes";

const initialState = {
  bestStudents: [],
  latestEnrollments: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BEST_STUDENTS_SUCCESS:
      return {
        ...state,
        bestStudents: action.payload.students,
      };
    case types.FETCH_LATEST_ENROLLMENTS_SUCCESS:
      return {
        ...state,
        latestEnrollments: action.payload.enrollments,
      };
    default:
      return state;
  }
};

export default dataReducer;
