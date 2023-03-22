import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/RootLayout";
import PageContentLayout from "./components/layouts/PageContentLayout";

import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Error from "./components/pages/Error";

import { loadFilteredLots, loadLot } from "./utils/loaders";
import Lot from "./components/pages/Lot";

import "./styles/css/custom.min.css";
import "./styles/css/App.min.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <PageContentLayout />,
        errorElement: <Error />,
        loader: loadFilteredLots,
      },
      { path: "lots/:id", element: <Lot />, loader: loadLot },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
