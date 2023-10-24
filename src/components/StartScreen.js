import React from "react";

export default function StartScreen({ numQustion, dispatch }) {
  return (
    <div className="start ">
      <h2> Welcome to The React Quiz</h2>
      <h3>{numQustion} question to test your React masetry</h3>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
}
