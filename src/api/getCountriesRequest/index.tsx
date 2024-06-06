import axios from "axios";
import { baseUrl, endpointFields, token } from "../../constants";

export const getCountriesRequest = async () => {
  return await new Promise((resolve, reject) => {
    axios({
      method: "GET",
      baseURL: baseUrl,
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json"
      },
      url: endpointFields,
    })
      .then(({ data }) => {
        // Pass
        resolve(data);
      })
      .catch((error) => {
        // Pass
        reject(error);
      })
      .finally(function () {
        // Pass
      });
  });
};
