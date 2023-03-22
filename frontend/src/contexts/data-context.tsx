import React, { useState, useEffect } from "react";
import { IWorld, INeighborhood, ILot } from "../utils/data-types";
import { loadAll } from "../utils/loaders";

const DataContext = React.createContext<{
  worlds: IWorld[];
  neighborhoods: INeighborhood[];
  lots: ILot[];
  filteredLots: ILot[];
  updateFilteredLots: (data: ILot[]) => void;
}>({
  worlds: [],
  neighborhoods: [],
  lots: [],
  filteredLots: [],
  updateFilteredLots: () => {},
});

export const DataContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  console.log("-- -- -- Context: context provider");
  const [worlds, setWorlds] = useState<IWorld[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<INeighborhood[]>([]);
  const [lots, setLots] = useState<ILot[]>([]);

  const [filteredLots, setFilteredLots] = useState<ILot[]>(lots);

  const updateFilteredLots = (data: ILot[]): void => {
    setFilteredLots(data);
  };

  useEffect(() => {
    const loadWorlds = async () => {
      let data = [];
      data = await loadAll("worlds");
      setWorlds(data);
    };
    const loadNeighborhoods = async () => {
      let data = [];
      data = await loadAll("neighborhoods");
      setNeighborhoods(data);
    };
    const loadLots = async () => {
      let data = [];
      data = await loadAll("lots");
      setLots(data);
    };

    loadWorlds();
    loadNeighborhoods();
    loadLots();
  }, []);

  return (
    <DataContext.Provider
      value={{
        worlds,
        neighborhoods,
        lots,
        filteredLots,
        updateFilteredLots: updateFilteredLots,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
