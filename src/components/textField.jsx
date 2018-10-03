/*
1.render a text field
2.it should have 2 buttons 
3.it should accept props {handleChange,handleNext,handleBack,disabled, data, nextParamsId, pageIndex }
4.it should have the ability to hide the back button if the current params is "1"
*/
import React, { Fragment } from "react";

const TextField = props => {
  const handleChange = e => {
    let data = {
      id: props.data.id,
      question: props.data.question,
      answer: e.target.value
    };
    props.handleChange(data);
  };
  const handleNext = e => {
    if (props.pageIndex < props.length - 1) {
      props.handleNext(props.data.id + 1);
    } else {
      props.handleNext("summary");
    }
  };
  let buttons;
  if (props.pageIndex !== 0) {
    buttons = (
      <div>
        <button onClick={props.handleBack}>Back</button>

        <button disabled={props.disabled} onClick={handleNext}>
          Next
        </button>
      </div>
    );
  } else {
    buttons = (
      <div>
        <button disabled={props.disabled} onClick={handleNext}>
          Next
        </button>
      </div>
    );
  }

  return (
    <Fragment>
      <h1>{props.data.question}</h1>
      <input type="text" onChange={handleChange} />
      {buttons}
    </Fragment>
  );
};
export default TextField;
