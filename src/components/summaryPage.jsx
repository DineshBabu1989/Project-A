import React, { Fragment } from "react";

const Summary = props => {

  /*Render list of questions & answers*/
  const list = props.data.map(item => {
    if (item.type !== "submitPage")
      return (
        <li key={item.id} className="summary__list-item">
          <h2 className="summary__list-item--ques">{item.question}</h2>
          <p className="summary__list-item--ans">{item.answer}</p>
        </li>
      );
  });

  return (
    <Fragment>
      <section class="summary">
        <h2 class="summary__heading">Summary of answers</h2>
        <ul>{list}</ul>
        <button
          className="input__button input__button--back"
          onClick={props.handleBack}
        >
          Back
        </button>
        <button
          className="input__button input__button--next"
          role="button"
          onClick={props.handleSubmit}
        >
          Submit
        </button>
      </section>
    </Fragment>
  );
};
export default Summary;
