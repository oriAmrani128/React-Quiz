import React from "react";

export default function Progress({ index, numQustion, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQustion} value={index + Number(answer !== null)}></progress>

      <p>
        Question<strong>{index + 1}</strong>/{numQustion}
      </p>

      <p>
        <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
}
