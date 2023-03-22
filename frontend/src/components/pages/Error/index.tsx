import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import "../../../styles/css/Error.min.css";

const Error = () => {
  const error = useRouteError();

  let msg = "I'm so sorry";

  if (isRouteErrorResponse(error)) {
    if (error?.status && error?.statusText) {
      msg = `${error.status} - ${error.statusText}`;
    }
  }

  return (
    <div className="text-center mt-5 Error">
      <h2>Oops! It looks like there was an error :(</h2>

      <p className="fs-4">{msg}</p>
    </div>
  );
};

export default Error;
