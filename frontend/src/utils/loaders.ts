import { LoaderFunctionArgs, json } from "react-router-dom";

const BASE_URL = "http://localhost:8080";

export const loadLot = async ({ params }: LoaderFunctionArgs) => {
  console.log("loader: loadLot");

  const id = params.id;
  const response = await fetch(`${BASE_URL}/api/lots/${id}`);
  const data = await response.json();
  if (!response.ok) throw json(data);
  return data;
};

export const loadFilteredLots = async ({ request }: LoaderFunctionArgs) => {
  try {
    console.log("loader: loadFilteredLots");

    const validParams = [];
    const url = new URL(request.url);
    for (const [key, value] of url.searchParams.entries()) {
      if (value) validParams.push(`${key}=${value}`);
    }

    if (validParams.length !== 0) {
      const query = validParams.join("&");
      const response = await fetch(`${BASE_URL}/api/search?q=lots&${query}`);
      const data = await response.json();

      if (!response.ok) {
        if (data) {
          throw json(null, {
            status: data.status,
            statusText: data.statusText,
          });
        } else {
          throw json(null, {
            status: response.status,
            statusText: response.statusText,
          });
        }
      }

      return data;
    }
    return await loadAll("lots");
  } catch (err: any) {
    console.log("catched error");
    throw json(null, {
      status: err.status || 500,
      statusText: err.statusText,
    });
  }
};

type ILocation = "lots" | "worlds" | "neighborhoods";
export const loadAll = async (location: ILocation) => {
  console.log("loader: loat all " + location);

  const response = await fetch(`${BASE_URL}/api/${location}`);
  const data = await response.json();
  if (!response.ok) {
    if (data) throw json(data);
    else throw json("Error loading " + location);
  }
  return data;
};
