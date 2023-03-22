import { INeighborhood } from "./data-types";

export const filterNeighborhoodsBy = {
  world: (id: number, data: INeighborhood[]) => {
    return data.filter((nbhd) => nbhd.world === id);
  },
};
