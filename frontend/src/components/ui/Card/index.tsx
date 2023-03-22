import { Link } from "react-router-dom";

import { ICard } from "../CardList";

const Card: React.FC<ICard> = (props) => {
  return (
    <>
      <header>
        <Link to={`/lots/${props.id}`}>
          <img src={props.img} alt={props.alt} loading="lazy" />
        </Link>
        <h3 className="text-center m-0 py-1">{props?.name || "-"}</h3>
      </header>
      <div className="px-3 m-0 p-0">{props.content}</div>{" "}
    </>
  );
};

export default Card;
