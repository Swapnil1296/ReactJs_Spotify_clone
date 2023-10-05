import { backendURL } from "./config";

export const makeUnauthenticatedPOSTRequests = async (route, body) => {
  const response = await fetch(backendURL + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};
