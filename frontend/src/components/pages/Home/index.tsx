import { useContext } from "react";
import { useNavigation } from "react-router-dom";

import Filter from "../../Filter";
import LotList from "../../LotList";
import Banner from "../../ui/Banner";

import DataContext from "../../../contexts/data-context";

const Home: React.FC = () => {
  console.log("-- -- -- -- Page: home");
  const navigation = useNavigation();
  const ctx = useContext(DataContext);

  let content = <p>fallback content</p>;

  if (ctx?.filteredLots?.length >= 0) content = <LotList />;
  else content = <p>No lots found</p>;

  if (navigation.state === "loading") content = <p>...loading</p>;

  return (
    <>
      <Banner type="wc" />
      <Filter />
      {content}
    </>
  );
};

export default Home;
