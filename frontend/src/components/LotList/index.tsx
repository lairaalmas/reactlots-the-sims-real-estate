import Cards from "../ui/CardList";
import { ICaracteristic, ILot } from "../../utils/data-types";
import { ICard } from "../ui/CardList";
import { useContext } from "react";
import DataContext from "../../contexts/data-context";

import "../../styles/css/LotList.min.css";

const LotList: React.FC = () => {
  const ctx = useContext(DataContext);

  const generateContent = (
    neighborhood: number,
    world: number,
    // status: string,
    price: string,
    { size, floors, bedrooms, bathrooms }: ICaracteristic
  ) => {
    let nbhd: string = "";
    let wrld: string = "";
    for (let i = 0; i < ctx.neighborhoods.length; i++) {
      if (ctx.neighborhoods[i].id === neighborhood) {
        nbhd = ctx.neighborhoods[i].name;
        break;
      }
    }
    for (let i = 0; i < ctx.worlds.length; i++) {
      if (ctx.worlds[i].id === world) {
        wrld = ctx.worlds[i].name;
        break;
      }
    }
    return (
      <>
        <ul className="list-unstyled">
          <div className="LotList__address d-flex justify-content-center">
            <li className="LotList__address__neighborhood" title="Neighborhood">
              {nbhd}
            </li>
            <li className="LotList__address__world" title="World">
              {wrld}
            </li>
          </div>
          <div className="text-center mb-3">
            <li className="LotList__size" title="Lot size">
              {size}
            </li>
          </div>
          <div className="d-flex justify-content-around mb-3">
            <li className="LotList__floors" title="Number of floors">
              <i className="bi bi-layers-fill text-secondary" />
              {floors && floors !== -1 ? floors : "--"}
            </li>
            <li className="LotList__bedrooms" title="Number of bedrooms">
              <i className="fa-solid fa-bed text-secondary" />
              {bedrooms && bedrooms !== -1 ? bedrooms : "--"}
            </li>
            <li className="LotList__bathrooms" title="Number of bathrooms">
              <i className="fa-solid fa-toilet text-secondary" />
              {bathrooms && bathrooms !== -1 ? bathrooms : "--"}
            </li>
          </div>
          <div className="text-center text-success fs-4 mb-3">
            <li className="LotList__price" title="Lot price in Simoleons">
              §&nbsp;{price}
            </li>
          </div>
        </ul>
      </>
    );
  };

  const list: Array<ICard> = ctx.filteredLots.map((lot: ILot) => {
    const formatedPrice = new Intl.NumberFormat().format(+lot.price);
    return {
      id: lot.id,
      name: lot.name || "",
      img: lot.img || "",
      alt: "Lot",
      content: generateContent(
        lot.neighborhood,
        lot.world,
        // lot.status || "",
        formatedPrice,
        {
          size: lot.caracteristics?.size || "",
          floors: lot.caracteristics?.floors || -1,
          bedrooms: lot.caracteristics?.bedrooms || -1,
          bathrooms: lot.caracteristics?.bathrooms || -1,
        }
      ),
    };
  });

  return (
    <section>
      <Cards items={list} />
    </section>
  );
};

export default LotList;
