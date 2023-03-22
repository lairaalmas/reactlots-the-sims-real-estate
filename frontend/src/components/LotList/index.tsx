import { useContext } from "react";

import Cards from "../ui/CardList";
import { ICard } from "../ui/CardList";

import { ILot } from "../../utils/data-types";

import DataContext from "../../contexts/data-context";

const LotList: React.FC = () => {
  const ctx = useContext(DataContext);

  const list: Array<ICard> = ctx.filteredLots.map((lot: ILot) => {
    const dataFloors = lot.caracteristics.floors;
    const dataBedrooms = lot.caracteristics.bedrooms;
    const datBathrooms = lot.caracteristics.bathrooms;

    const floors = dataFloors && dataFloors !== -1 ? "" + dataFloors : "--";
    const bedrooms =
      dataBedrooms && dataBedrooms !== -1 ? "" + dataBedrooms : "--";
    const bathrooms =
      datBathrooms && datBathrooms !== -1 ? "" + datBathrooms : "--";

    const neighborhood =
      ctx.neighborhoods.find((item) => item.id === lot.neighborhood)?.name ||
      "Unknown neighborhood";
    const world =
      ctx.worlds.find((item) => item.id === lot.world)?.name || "Unknown world";

    const price = new Intl.NumberFormat().format(+lot.price);

    return {
      id: lot.id,
      name: lot.name,
      img: lot.img || "",
      size: lot.caracteristics.size,
      neighborhood,
      world,
      floors,
      bedrooms,
      bathrooms,
      price,
    };
  });

  return (
    <section>
      <Cards items={list} />
    </section>
  );
};

export default LotList;
