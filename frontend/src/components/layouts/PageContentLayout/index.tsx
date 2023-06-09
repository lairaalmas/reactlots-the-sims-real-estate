import Home from "../../pages/HomePage";

import { DataContextProvider } from "../../../contexts/data-context";

const PageContentLayout: React.FC = () => {
  console.log("-- Layout: page content layout");

  return (
    <main>
      <DataContextProvider>
        <Home />
      </DataContextProvider>
    </main>
  );
};

export default PageContentLayout;
