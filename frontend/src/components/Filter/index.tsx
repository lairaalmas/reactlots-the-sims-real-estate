import { useContext, useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

import { ILot, INeighborhood } from "../../utils/data-types";

import { filterNeighborhoodsBy } from "../../utils/sorting-functions";

import Button from "../ui/Button";

import "../../styles/css/Filter.min.css";
import DataContext from "../../contexts/data-context";

const Filter: React.FC = () => {
  console.log("-- -- -- -- -- Component: filter");
  const ctx = useContext(DataContext);

  const [filteredNeighborhoods, setFilteredNeighborhoods] = useState<
    INeighborhood[]
  >([]);

  useEffect(() => {
    setFilteredNeighborhoods(ctx.neighborhoods);
  }, [ctx.neighborhoods]);

  const updateNeighborhoodOptions = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value === "") setFilteredNeighborhoods(ctx.neighborhoods);
    else {
      setFilteredNeighborhoods(
        filterNeighborhoodsBy.world(+event.target.value, ctx.neighborhoods)
      );
    }
  };

  const data = useLoaderData() as ILot[];

  useEffect(() => {
    ctx.updateFilteredLots(data);
  }, [data]);

  return (
    <section className="Filter pt-3 pb-4 bg-primary border-bottom shadow">
      <Form method="get" action="/">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <label className="form-label mb-0" htmlFor="filter-worlds">
                World
              </label>
              <select
                className="form-select"
                id="filter-worlds"
                name="world"
                defaultValue={""}
                onChange={updateNeighborhoodOptions}
              >
                <option value="">Any</option>
                {ctx.worlds.map((world) => (
                  <option value={world.id} key={world.id}>
                    {world.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-4">
              <label className="form-label mb-0" htmlFor="filter-neighborhoods">
                Neighborhood
              </label>
              <select
                className="form-select"
                id="filter-neighborhoods"
                name="neighborhood"
                defaultValue={""}
              >
                <option value="">Any</option>
                {filteredNeighborhoods.map((nbhd) => (
                  <option value={nbhd.id} key={nbhd.id}>
                    {nbhd.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-4">
              <label className="form-label mb-0" htmlFor="filter-type">
                Lot type
              </label>
              <select
                className="form-select"
                id="filter-type"
                name="status"
                defaultValue={""}
              >
                <option value="">Any</option>
                <option value="uninhabited">House</option>
                <option value="empty">Empty Lot</option>
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-4">
              <label className="form-label mb-0" htmlFor="filter-floors">
                Floors
              </label>
              <select
                className="form-select"
                id="filter-floors"
                name="floors"
                defaultValue={""}
              >
                <option value="">Any</option>
                {[1, 2, 3, 4].map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-4">
              <label className="form-label mb-0" htmlFor="filter-bedrooms">
                Bedrooms
              </label>
              <select
                className="form-select"
                id="filter-bedrooms"
                name="bedrooms"
                defaultValue={""}
              >
                <option value="">Any</option>
                {[1, 2, 3, 4].map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-4">
              <label className="form-label mb-0" htmlFor="filter-bathrooms">
                Bathrooms
              </label>
              <select
                className="form-select"
                id="filter-bathrooms"
                name="bathrooms"
                defaultValue={""}
              >
                <option value="">Any</option>
                {[1, 2, 3, 4].map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-4">
              <label className="form-label mb-0" htmlFor="filter-price">
                Sort by
              </label>
              <select
                className="form-select"
                id="filter-price"
                name="sort_price"
                defaultValue={""}
              >
                <option value="">Any</option>
                <option value="ascend">Lowest Price</option>
                <option value="descend">Highest price</option>
              </select>
            </div>
          </div>
        </div>
        <div className="Filter__button__container">
          <Button>
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Filter;
