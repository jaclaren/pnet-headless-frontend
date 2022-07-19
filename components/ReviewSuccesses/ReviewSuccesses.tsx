import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IDataFetchProps } from "../../shared/IDataFetchProps";

import JCGlossyCardList from "jc-glossycards";
import "jc-glossycards/dist/jc-glossycards.min.css";

export function ReviewSuccesses(props: IDataFetchProps) {
  const ref = useRef();

  useEffect(() => {
  }, []);

  useEffect(() => {
    if (!!ref.current) {
      const list = new JCGlossyCardList(ref.current as HTMLElement);      
      
      if(!!list && props.items.length > 0) 
        list.setData(
          props.items.map(item => {
            return {
              img: item.coverimage,
              title: item.title,
              href: item.href
            }
          })
        ) 
    }
  }, [props.items])

  return (
    // @ts-ignore
    <div key={`jc-gc-${props.items.length}`} className="jc-glossycards" ref={ref}>
      <div className="jc-gc__content">                    
          <div className="jc-gc__row" />
      </div>           
    </div>
  );
}
