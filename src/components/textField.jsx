import React, { Fragment } from "react";
import ButtonGroup from "./buttonGroup";

const TextField = props => {
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
export default TextField;
