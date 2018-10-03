import { combineReducers } from "redux";
import AllPages from "./pages_Reducer";
import Progress from "./progress_Reducer";
import CurrentPage from "./currentPage_Reducer";

const rootReducer = combineReducers({
  allpages: AllPages,
  progress: Progress,
  currentPage: CurrentPage
});

export default rootReducer;
