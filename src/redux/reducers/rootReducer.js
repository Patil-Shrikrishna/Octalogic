import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  courses: courseReducer,
  data: dataReducer,
});

export default rootReducer;
