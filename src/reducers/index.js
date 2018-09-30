import { combineReducers } from "redux";
import AllPages from "./pages_Reducer";
import Progress from "./progress_Reducer";

const rootReducer = combineReducers({
  allpages: AllPages,
  progress: Progress
});

export default rootReducer;
