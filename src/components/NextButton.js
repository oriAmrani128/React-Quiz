import React from "react";

export default function NextButton({ dispatch, answer, numQustion, index }) {
  if (answer === null) return null;

  if (index < numQustion - 1) {
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
      </button>
    );
  }
  if (index === numQustion - 1) {
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </button>
    );
  }
}
