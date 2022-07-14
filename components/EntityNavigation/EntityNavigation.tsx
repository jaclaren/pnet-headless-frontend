import React, { FunctionComponent } from "react";
import ChevronButton from "../ChevronIcon";

type TNavSize = 'large' | 'small'

interface IChevronEntityNavigationProps {
  currentIndex: number;
  maxIndex: number;
  onUserClickedNextPage: Function;
  onUserClickedPreviousPage: Function;
  showPagination: boolean;
  baseClassName: string;  
  size : TNavSize;
}

export const EntityNavigation: FunctionComponent<
  IChevronEntityNavigationProps
> = (props) => {
  return (
    <div className={`${props.baseClassName}--size-${props.size}`}>
      <button
        className={`${props.baseClassName}__button ${props.baseClassName}__button--role-previous`}
        onClick={() => props.onUserClickedPreviousPage()}
      >
        <ChevronButton direction="left" />
      </button>
      {props.showPagination ? (
        <div className={`${props.baseClassName}__page`}>
          <span>{props.currentIndex + 1}</span>
          <span>/</span>
          <span>{props.maxIndex}</span>
        </div>
      ) : null}

      <button
        className={`${props.baseClassName}__button ${props.baseClassName}__button--role-next`}
        onClick={() => props.onUserClickedNextPage()}
      >
        <ChevronButton direction="right" />
      </button>
    </div>
  );
};

EntityNavigation.defaultProps = {
  baseClassName: `cenavigation`
}