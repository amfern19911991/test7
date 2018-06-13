import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import NodesReducer from "./reducer_nodes";

const rootReducer = combineReducers({
  nodes: NodesReducer,
  form: formReducer
});

export default rootReducer;
