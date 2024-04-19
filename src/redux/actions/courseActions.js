import * as types from "./actionTypes";

export const addCourse = (course) => ({
  type: types.ADD_COURSE,
  payload: { course },
});
