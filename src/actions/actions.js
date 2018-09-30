export const ALL_PAGES = "ALL_PAGES";
export const INC_PROGESS = "INC_PROGESS";

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

/*Increment progess */
export const inc_progress = () => {
  return {
    type: INC_PROGESS,
    payload: "increment"
  };
};
