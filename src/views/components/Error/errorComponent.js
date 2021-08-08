import React from "react";

const ErrorComponent = (props) => {
  const { text } = props;
  return (
    <>
      <div className="error-page-section">
        <span className="error-text">{text}</span>
      </div>
    </>
  );
};
export default ErrorComponent;
