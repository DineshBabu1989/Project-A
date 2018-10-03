/* Current page information*/
import { CURRENT_PAGE, INITIAL_RENDER } from "../actions/actions";

const CurrentPage = (state = [], action) => {
  switch (action.type) {
    case INITIAL_RENDER:
      return {
        disabled: true
      };

    case CURRENT_PAGE:
      return {
        id: action.payload.id,
        question: action.payload.question,
        answer: action.payload.answer,
        disabled: !action.payload.answer
      };

    default:
      return state;
  }
};

export default CurrentPage;
