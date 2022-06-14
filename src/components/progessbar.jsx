import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "../animation/animation";
import { easeQuadInOut } from "d3-ease";

function Progess() {

  return (
    <div style={{ width: 120, height: 120 }}>
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {(value) => {
          return (
            <CircularProgressbar
              value={value * 100}
              text={`${value.toFixed(1)*100}%`}
              strokeWidth={6}
              styles={buildStyles({
                pathColor: "#8ecae6",
                textColor: "#8ecae6",
                trailColor: "transparent",
                pathTransition: 1.4,
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </div>
  );
}

export default React.memo(Progess);
