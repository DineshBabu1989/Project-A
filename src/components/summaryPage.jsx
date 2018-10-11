import React, { Fragment } from "react";

const Summary = props => {
  const list = props.data.map(item => {
    return (
      <li key={item.id}>
        <h2>{item.question}</h2>
        <p>{item.answer}</p>
      </li>
    );
  });

  return (
    <Fragment>
      <div>
        <h2>Summary of answers</h2>
        <ul>{list}</ul>
        <button onClick={props.handleBack}>Back</button>
        <button role="button" onClick={props.handleSubmit}>
          Submit
        </button>
      </div>
    </Fragment>
  );
};
export default Summary;
