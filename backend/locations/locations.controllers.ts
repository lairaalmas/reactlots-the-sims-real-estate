import { Request, Response, NextFunction } from "express";
import { filterLotsBy, sortLotsBy } from "../data/filters";

// import { CustomError } from "../utils/customError";
import * as service from "./locations.services";
import * as dataSet from "../data/data";

type IMapLocationList = {
  [id: string]: () =>
    | dataSet.ILot[]
    | dataSet.INeighborhood[]
    | dataSet.IWorld[];
};
type IMapLocation = {
  [id: string]: (
    id: number
  ) => dataSet.ILot | dataSet.INeighborhood | dataSet.IWorld;
};
const mapLocationList: IMapLocationList = {
  worlds: () => service.getListOfWorlds(),
  neighborhoods: () => service.getListOfNeighborhoods(),
  lots: () => service.getListOfLots(),
};
const mapLocationDetails: IMapLocation = {
  worlds: (id: number) => service.getWorld(id),
  neighborhoods: (id: number) => service.getNeighborhood(id),
  lots: (id: number) => service.getLot(id),
};

export async function queryLots(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let data;

    const world_id = req.query.world as string;
    const neighborhood_id = req.query.neighborhood as string;
    const status = req.query.status as string;
    const floors = req.query.floors as string;
    const bedrooms = req.query.bedrooms as string;
    const bathrooms = req.query.bathrooms as string;
    const sort_price = req.query.sort_price as string;

    const q = req.query.q as string;

    if (q !== "lots") {
      throw new Error("You can only query lots");
    } else {
      data = service.getListOfLots();
      console.log("lots: " + data.length);
    }

    if (world_id) {
      data = filterLotsBy.world(+world_id, data);
      console.log("worlds: " + data.length);
    }

    if (neighborhood_id) {
      data = filterLotsBy.neighborhood(+neighborhood_id, data);
      console.log("neighborhood: " + data.length);
    }

    if (status) {
      data = filterLotsBy.status(status, data);
      console.log("status: " + data.length);
    }

    if (floors) {
      data = filterLotsBy.floors(+floors, data);
      console.log("floors: " + data.length);
    }

    if (bedrooms) {
      data = filterLotsBy.bedrooms(+bedrooms, data);
      console.log("bedrooms: " + data.length);
    }

    if (bathrooms) {
      data = filterLotsBy.bathrooms(+bathrooms, data);
      console.log("bathrooms: " + data.length);
    }

    if (sort_price) {
      data = sortLotsBy.price(sort_price, data);
      console.log("sort_price: " + data.length);
    }

    console.log("-----------------");

    res.status(200).json(data);
  } catch (error: any) {
    next(error);
  }
}

export async function getLocationList(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const location = req.params.location as string;
  const data = mapLocationList[location]();
  res.status(200).json(data);
}

export async function getLocation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const location = req.params.location as string;
  const id = req.params.id;
  const data = mapLocationDetails[location](+id);
  res.status(200).json(data);
}
