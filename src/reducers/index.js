import { combineReducers } from "redux";
import AllPages from "./pages";

const rootReducer = combineReducers({
  allpages: AllPages
});

export default rootReducer;
