import { useState, useEffect, FunctionComponent } from "react";
import axios from "axios";

function Error(props: any) {
  return <div className="error">{props.message}</div>;
}

export function withFetchedGameData(
  WrappedComponent: any,
  url: string,
  errorMessage: string
) {  

  const WithFetchedGameData : FunctionComponent<any> = (props) => {
    const [items, setItems] = useState([]);
    const [fetchError, setFetchError] = useState(false);    
    const [isLoading, setIsloading] = useState(false);    
    
    let calledOnce = false;

    useEffect(() => {                        
      if(isLoading || calledOnce) 
        return        

      calledOnce = true;

      setIsloading(true);

      axios
      .get(url)
      .then((response: any) => {
        if (
          response.data.body.games.length == 0 ||
          !!response.data.body.games.error
        ) {
          setFetchError(true);
          return;
        }        
        
        setItems(response.data.body.games);
      })
      .catch((err: any) => setFetchError(true));
    }, [])
    
  
      return fetchError ? (
        <Error message={errorMessage} />
      ) : (
        <WrappedComponent items={items} />
      );        
  }

  return WithFetchedGameData

}
