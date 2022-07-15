import React, { FunctionComponent } from "react";

interface IProgressBarProps {
  delay?: number;
  onComplete?: Function;
  percentage?: number;
  key: string;
}

const ProgressBar: FunctionComponent<IProgressBarProps> = (props) => {
  return (
    <div className="b-topgames__progressbar b-progressbar">
      <div key={`pb-${props.key}`} style={{animationDuration: `${props.delay ? props.delay/1000 : 0}s`}} className="b-progressbar__bar">&nbsp;</div>
    </div>
  );
};

ProgressBar.defaultProps = {
  delay: 5000,
};

export { ProgressBar };
