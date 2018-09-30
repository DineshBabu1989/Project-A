import { ALL_PAGES } from "../actions/actions";

const AllPages = (state = [], action) => {
  switch (action.type) {
    case ALL_PAGES:
      return action.payload;

    default:
      return state;
  }
};
export default AllPages;
