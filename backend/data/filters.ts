import { ILot, lots, neighborhoods } from "./data";

export const filterLotsBy = {
  world: (id: number, data?: ILot[]) => {
    const source = data || lots;
    return source.filter((lot) => lot.world === id);
  },

  neighborhood: (id: number, data?: ILot[]) => {
    const source = data || lots;
    return source.filter((lot) => lot.neighborhood === id);
  },

  status: (status: string, data?: ILot[]) => {
    const source = data || lots;
    return source.filter((lot) => lot.status === status);
  },

  floors: (floors: number, data?: ILot[]) => {
    const source = data || lots;
    return source.filter((lot) => lot.caracteristics.floors === floors);
  },

  bedrooms: (bedrooms: number, data?: ILot[]) => {
    const source = data || lots;
    return source.filter((lot) => lot.caracteristics.bedrooms === bedrooms);
  },

  bathrooms: (bathrooms: number, data?: ILot[]) => {
    const source = data || lots;
    return source.filter((lot) => lot.caracteristics.bathrooms === bathrooms);
  },
};

export const filterNeighborhoodBy = {
  world: (id: number) => {
    return neighborhoods.filter((neighborhood) => neighborhood.world === id);
  },
};

export const sortLotsBy = {
  name: (order: string | undefined, data?: ILot[]) => {
    const source = data || lots;
    const sorted =
      order === "descend"
        ? source.sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
          })
        : source.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
    return sorted;
  },

  price: (order: string | undefined, data?: ILot[]) => {
    const source = data || lots;
    const sorted =
      order === "ascend"
        ? source.sort((a, b) => {
            return a.price - b.price;
          })
        : source.sort((a, b) => {
            return b.price - a.price;
          });
    return sorted;
  },
};
