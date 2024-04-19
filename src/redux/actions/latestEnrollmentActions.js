import * as types from "./actionTypes";

export const latestEnrollments = (enrollments) => ({
  type: types.LATEST_ENROLLMENTS,
  payload: { enrollments },
});
