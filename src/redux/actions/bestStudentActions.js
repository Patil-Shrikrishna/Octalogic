import * as types from "./actionTypes";

export const bestStudents = (students) => ({
  type: types.BEST_STUDENTS,
  payload: { students },
});
