export const ALL_PAGES = "ALL_PAGES";
export const INITIAL_RENDER = "INITIAL_RENDER";
export const INC_PROGESS = "INC_PROGESS";
export const DEC_PROGESS = "DEC_PROGESS";
export const CURRENT_PAGE = "CURRENT_PAGE";
export const UPDATE_PAGE = "UPDATE_PAGE";

/*Page details*/
export const all_pages = () => {
  const data = [
    {
      id: 1,
      question: "How old are you ?",
      answer: "",
      type: "textField"
    },
    {
      id: 2,
      question: "What is your occupation",
      answer: "",
      type: "selectOption",
      options: [
        "front-end developer",
        "back-end developer",
        "full stack engineer",
        "Dev ops specialist"
      ]
    },
    {
      id: 3,
      question: "Can you please tell your gender",
      answer: "",
      type: "radioButton",
      options: ["male", "female", "unknown"]
    },
    {
      id: 4,
      question: "What is your first name",
      answer: "",
      type: "textField"
    },
    {
      id: 5,
      question: "What is your last name",
      answer: "",
      type: "textField"
    },
    {
      id: 6,
      question: "How you prefer to work ",
      answer: "",
      type: "radioButton",
      options: ["Remote", "Full time", "freelancing"]
    },
    {
      id: 7,
      type: "submitPage"
    }
  ];
  return {
    type: ALL_PAGES,
    payload: data
  };
};

/*Increment progess */
export const inc_progress = () => {
  return {
    type: INC_PROGESS,
    payload: "increment"
  };
};

/*Decrement progess */
export const dec_progress = () => {
  return {
    type: DEC_PROGESS,
    payload: "decrement"
  };
};

/*Initial render*/
export const initial_render = () => {
  return {
    type: INITIAL_RENDER,
    payload: "loading"
  };
};

/*Current page*/
export const current_page = data => {
  return {
    type: CURRENT_PAGE,
    payload: data
  };
};

/*Update pages based on current page*/
export const update_pages = data => {
  return {
    type: UPDATE_PAGE,
    payload: data
  };
};
