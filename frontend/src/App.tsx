import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./components/layouts/RootLayout";
import PageContentLayout from "./components/layouts/PageContentLayout";
import Error from "./components/pages/Error";

import { loadFilteredLots } from "./utils/loaders";

import "./styles/css/custom.min.css";
import "./styles/css/App.min.css";

const ContactPage = lazy(() => import("./components/pages/Contact"));
const AboutPage = lazy(() => import("./components/pages/About"));
const LotPage = lazy(() => import("./components/pages/Lot"));

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
      {
        path: "contact",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "lots/:id",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <LotPage />
          </Suspense>
        ),
        loader: (args: LoaderFunctionArgs) =>
          import("./utils/loaders").then((module) => module.loadLot(args)),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
