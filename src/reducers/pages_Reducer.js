import { ALL_PAGES, UPDATE_PAGE } from "../actions/actions";

const AllPages = (state = [], action) => {
  switch (action.type) {
    case ALL_PAGES:
      return action.payload;
    case UPDATE_PAGE: {
      const newPages = state;
      newPages.map(page => {
        if (page.id == action.payload.id) {
          return (page.answer = action.payload.answer);
        }
      });
      return newPages;
    }
    default:
      return state;
  }
};
export default AllPages;
