import React from 'react';

interface Props {
  direction : string;
  onClick?: any;
}

const ChevronIcon = (props: Props) => {
  const isRight = props.direction === 'right'
  const d = !isRight ? "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" : "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  const className = 'icon__chevron'

  return (
    <div className={className} onClick={props.onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
        <path d={d}/></svg>
    </div>
  )

}

export default ChevronIcon;
