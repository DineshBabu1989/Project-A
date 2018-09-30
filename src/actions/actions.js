export const ALL_PAGES = "ALL_PAGES";

/*Page details*/
export const all_pages = () => {
  const data = [
    {
      id: 1,
      question: "How old are you ?",
      answer: "",
      type: "textField",
      completed: false
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
      ],
      completed: false
    },
    {
      id: 3,
      question: "Can you please tell your gender",
      answer: "",
      type: "radioButton",
      options: ["male", "female"],
      completed: false
    }
  ];
  return {
    type: ALL_PAGES,
    payload: data
  };
};

/*
export const CURRENT_PAGE = "CURRENT_PAGE";
export const INITIAL_RENDER = "INITIAL_RENDER";

export const initialRender = () => {
  return {
    type: INITIAL_RENDER,
    payload: "loading"
  };
};

export const current_page = data => {
  return {
    type: CURRENT_PAGE,
    payload: data
  };
};
*/
