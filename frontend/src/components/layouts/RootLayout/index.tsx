import { Outlet } from "react-router-dom";

import Header from "../../../components/ui/Header";
import Footer from "../../../components/ui/Footer";

import "../../../styles/css/Layout.min.css";

const RootLayout: React.FC = () => {
  console.log("-- Layout: root layout");

  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
