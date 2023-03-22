import { useLoaderData } from "react-router-dom";
// import LotCards from "../../components/LotCards";
import { ILot } from "../../../utils/data-types";

const Lot: React.FC = () => {
  const data = useLoaderData() as ILot;

  let content = <p>"..."</p>;

  if (data) {
    content = (
      <div className="d-flex gap-3 mb-5">
        <img
          src={data.img}
          alt={data.name}
          style={{ height: "40vh" }}
          loading="lazy"
        />
        Price:
        <strong>§ {data.price || "-"}</strong>
        Size:
        {data.caracteristics.size || "-"}
        {data.status !== "empty" && (
          <>
            Floors
            {data.caracteristics.floors || "-"}
            Bedrooms:
            {data.caracteristics.bedrooms || "-"}
            Bathrooms:
            {data.caracteristics.bathrooms || "-"}
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <h2 className="text-center my-5">Lot Details</h2>

      {content}
    </>
  );
};

export default Lot;
