import React from "react";

const ButtonGroup = props => {
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
          onClick={props.handleNext}
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
          onClick={props.handleNext}
        >
          Next
        </button>
      </div>
    );
  }
  return <div>{buttons}</div>;
};
export default ButtonGroup;
