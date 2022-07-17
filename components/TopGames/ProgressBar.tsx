import React, { FunctionComponent } from "react";

interface IProgressBarProps {
  delay?: number;
  onComplete?: Function;
  percentage?: number;
  key: string;
  paused: boolean;
  useDelay?: boolean;
  onProgressAnimationEnded: any;
}

const ProgressBar: FunctionComponent<IProgressBarProps> = (props) => {
  return (
    <div className="b-topgames__progressbar b-progressbar">
      <div
        onAnimationEnd={() => props.onProgressAnimationEnded()}
        key={`pb-${props.key}`}
        style={{
          animationDuration: `${props.delay ? props.delay / 1000 : 0}s`,
          animationPlayState: !!props.paused && props.paused ? `paused` : `running`,
        }}
        className={`b-progressbar__bar ${
          !!props.paused ? `b-progressbar__bar--paused` : ``
        } ${
          !props.useDelay
            ? `b-progressbar__bar--accent b-progressbar__bar--full`
            : `b-progressbar__bar--accent`
        }`}
      >
        &nbsp;
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  delay: 5000,
  useDelay: true,
  onProgressAnimationEnded: () => {}
};

export { ProgressBar };
