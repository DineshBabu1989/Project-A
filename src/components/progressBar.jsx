import React, { Fragment } from "react";

const ProgressBar = props => {
  /*CSS- width based on progress*/
  const styles = {
    progress: {
      width: `${parseInt((props.count / props.length) * 100)}%`
    }
  };
  return (
    <Fragment>
      <div className="progress">
        <h1 className="progress__value">{styles.progress.width}</h1>
        <div className="progress__bar">
          <div className="progress__indicator" style={styles.progress} />
        </div>
      </div>
    </Fragment>
  );
};
export default ProgressBar;
