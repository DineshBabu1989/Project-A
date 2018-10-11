import React, { Fragment } from "react";

const SelectionField = props => {
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

  const selectOptions = () => {
    return props.data.options.map((option, i) => {
      return (
        <option value={option} key={i}>
          {option}
        </option>
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
          <select
            name="occupation"
            className="input__field--select"
            onChange={handleChange}
          >
            <option defaultValue=" ">Choose an occupation</option>
            {selectOptions()}
          </select>
          {buttons}
        </div>
      </section>
    </Fragment>
  );
};
export default SelectionField;
