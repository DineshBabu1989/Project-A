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
        <button
          className="input__button input__button--back"
          onClick={props.handleBack}
        >
          Back
        </button>
        <button
          className="input__button input__button--next"
          disabled={props.disabled}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    );
  } else {
    buttons = (
      <div>
        <button
          className="input__button input__button--next"
          disabled={props.disabled}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    );
  }

  return (
    <Fragment>
      <section className="input">
        <div className="input__holder">
          <h1 className="input__title">{props.data.question}</h1>
          <input
            className="input__field--text"
            type="text"
            onChange={handleChange}
            value={props.term}
          />
          {buttons}
        </div>
      </section>
    </Fragment>
  );
};
export default TextField;
