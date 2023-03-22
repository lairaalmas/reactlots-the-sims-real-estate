import { ReactNode } from "react";

import Card from "../Card";

import "../../../styles/css/CardList.min.css";

export type ICard = {
  id: number;
  name: string;
  img: string;
  alt: string;
  content: ReactNode;
};

const CardList: React.FC<{ items: ICard[] }> = (props) => {
  return (
    <div className="CardList">
      <ul className="CardList__list list-unstyled px-5">
        {props.items.map((item) => {
          return (
            <li className="CardList__list__item shadow" key={item.id}>
              <Card {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardList;
