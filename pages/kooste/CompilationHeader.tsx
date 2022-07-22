export function CompilationHeader(props: {
  item: {
    title: any;
    developer: any;
    average_score: any;
    coverimage: any;
    genres: any[];
    platforms: any[];
  };
}) {
  return (
    <div className="product__header game__header compilationheader">
      <div className="compilationheader__col">
        <img className="game__image" src={props.item.coverimage}></img>
      </div>
      <div className="compilationheader__col">
        <h1 className="title title--large game__title">{props.item.title}</h1>
        <div className="label game__developer">{props.item.developer}</div>
        <ul className="genrelist compliation__genrelist">
          {props.item.genres.map((gen) => {
            return (<div className="label genre">{gen.name}</div>)
          })}
        </ul>
        <ul className="platformlist compilation__platformlist">
          {props.item.platforms.map((platform) => {
              return (<div className="label platform">{platform}</div>)
            })}
        </ul>
      </div>
      <div className="compilationheader__col">
        <div className="game__scoredist"></div>
      </div>
    </div>
  );
}

CompilationHeader.defaultProps = {
  item : {
    genres: [],
    platforms: []  
  }
}