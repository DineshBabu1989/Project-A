import React, { Fragment } from "react";

const radioField = props => {
  console.log(props);
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

  const makeList = () => {
    return props.data.options.map((option, i) => {
      return (
        <li key={i} className="input__field--list">
          <label for={option}>
            <input
              type="radio"
              id={option}
              className="input__field--radio"
              value={option}
              checked={props.term === option}
              onChange={handleChange}
            />
            {option}
          </label>
        </li>
      );
    });
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
          <ul className="input__radio">{makeList()}</ul>
          {buttons}
        </div>
      </section>
    </Fragment>
  );
};
export default radioField;
