import React, { Fragment } from "react";
import ButtonGroup from "./buttonGroup";

const radioField = props => {
  /*Data change handling*/
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

  const renderCheckbutton = option => {
    if (props.term === option) {
      return <div className="radio radio__checked" />;
    } else {
      return <div className="radio radio__unchecked" />;
    }
  };

  /*Render radio buttons*/
  const makeList = () => {
    return props.data.options.map((option, i) => {
      return (
        <li key={i} className="input__field--list">
          <div className="input__field-radio--holder">
            {renderCheckbutton(option)}
            <label htmlFor={option} className="input__field--label">
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
          </div>
        </li>
      );
    });
  };

  return (
    <Fragment>
      <section className="input">
        <div className="input__holder">
          <h1 className="input__title">{props.data.question}</h1>
          <ul className="input__radio">{makeList()}</ul>
          <ButtonGroup
            pageIndex={props.pageIndex}
            handleBack={props.handleBack}
            disabled={props.disabled}
            handleNext={handleNext}
          />
        </div>
      </section>
    </Fragment>
  );
};
export default radioField;
