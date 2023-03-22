export type ICaracteristic = {
  size: string;
  floors: number;
  bedrooms: number;
  bathrooms: number;
};
export type ILot = {
  id: number;
  name: string;
  status: "uninhabited" | "empty";
  img?: string;
  description: string;
  price: number;
  caracteristics: ICaracteristic;
  //
  neighborhood: number;
  world: number;
};
export type INeighborhood = {
  id: number;
  name: string;
  description: string;
  //
  world: number;
  lots: number[];
};
export type IWorld = {
  id: number;
  name: string;
  //
  neighborhoods: number[];
  lots: number[];
};
