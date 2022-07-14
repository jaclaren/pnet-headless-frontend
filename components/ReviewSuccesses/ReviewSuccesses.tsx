import axios from "axios";
import { useEffect, useState } from "react";
import { IDataFetchProps } from "../../shared/IDataFetchProps";

export function ReviewSuccesses(props : IDataFetchProps) {
  return <div className="reviewsuccesses">Review successes {props.items.length}</div>;  
}
