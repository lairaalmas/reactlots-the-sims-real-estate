// import axios from "axios";
import * as dataSet from "../data/data";
// import { filterLotBy } from "../data/filters";

export function getListOfWorlds() {
  return dataSet.worlds;
}
export function getWorld(id: number) {
  let data: dataSet.IWorld = {
    id: -1,
    name: "not found",
    neighborhoods: [],
    lots: [],
  };
  const response = dataSet.worlds.find(
    (world: dataSet.IWorld) => world.id === id
  );
  if (response) data = response;
  return data;
}

export function getListOfNeighborhoods() {
  return dataSet.neighborhoods;
}
export function getNeighborhood(id: number) {
  let data: dataSet.INeighborhood = {
    id: -1,
    name: "not found",
    description: "",
    world: -1,
    lots: [],
  };
  const response = dataSet.neighborhoods.find(
    (neighborhood: dataSet.INeighborhood) => neighborhood.id === id
  );
  if (response) data = response;
  return data;
}

export function getListOfLots() {
  return dataSet.lots;
}
export function getLot(id: number) {
  let data: dataSet.ILot = {
    id: -1,
    name: "not found",
    status: "empty",
    description: "",
    price: -1,
    caracteristics: {
      size: "-1x-1",
      floors: -1,
      bedrooms: -1,
      bathrooms: -1,
    },
    neighborhood: -1,
    world: -1,
  };
  const response = dataSet.lots.find((lot: dataSet.ILot) => lot.id === id);
  if (response) data = response;
  return data;
}
