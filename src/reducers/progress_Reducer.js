import { INC_PROGESS } from "../actions/actions";

const Progress = (state = 1, action) => {
  switch (action.type) {
    case INC_PROGESS:
      return state + 1;

    default:
      return state;
  }
};
export default Progress;
