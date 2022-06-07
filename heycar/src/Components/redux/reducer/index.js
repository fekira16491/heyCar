import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import reportReducer from "./reportReducer";
import loginReducer from "./userReducer";
import gatewayReducer from "./gateWayReducer";
import { queryByDisplayValue } from "@testing-library/react";
/**
 *combine all reducers
 */
const rootReducer = combineReducers({
  user: loginReducer,
  project: projectReducer,
  report: reportReducer,
  gateway: gatewayReducer,
});

export default rootReducer;
