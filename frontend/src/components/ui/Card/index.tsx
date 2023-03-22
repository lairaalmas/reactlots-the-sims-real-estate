import { Link } from "react-router-dom";

import { ICard } from "../CardList";

import "../../../styles/css/Card.min.css";

const Card: React.FC<ICard> = (props) => {
  return (
    <>
      <ul className="Card list-unstyled">
        <header className="Card__header">
          <Link className="Card__header__link" to={`/lots/${props.id}`}>
            <img
              className="Card__header__link__img"
              src={props.img}
              alt={props.name + " Lot"}
              loading="lazy"
            />
          </Link>
          <li title="Lot name">
            <h3 className="text-center m-0 py-1">{props.name}</h3>
          </li>
        </header>

        <div className="Card__address d-flex justify-content-center">
          <li className="Card__address__neighborhood" title="Neighborhood">
            {props.neighborhood}
          </li>
          <li className="Card__address__world" title="World">
            {props.world}
          </li>
        </div>

        <div className="text-center mb-3">
          <li className="Card__size" title="Lot size">
            {props.size}
          </li>
        </div>

        <div className="d-flex justify-content-around mb-3">
          <li className="Card__floors" title="Number of floors">
            <i className="bi bi-layers-fill text-secondary" />
            {props.floors}
          </li>
          <li className="Card__bedrooms" title="Number of bedrooms">
            <i className="fa-solid fa-bed text-secondary" />
            {props.bedrooms}
          </li>
          <li className="Card__bathrooms" title="Number of bathrooms">
            <i className="fa-solid fa-toilet text-secondary" />
            {props.bathrooms}
          </li>
        </div>

        <footer className="text-center text-success fs-4 mb-3">
          <li className="Card__price" title="Lot price in Simoleons">
            §&nbsp;{props.price}
          </li>
        </footer>
      </ul>
    </>
  );
};

export default Card;
