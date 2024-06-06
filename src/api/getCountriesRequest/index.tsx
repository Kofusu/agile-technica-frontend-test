import axios from "axios";
import { baseUrl, endpointFields } from "../../constants";

export const getCountriesRequest = async () => {
  return await new Promise((resolve, reject) => {
    axios({
      method: "GET",
      baseURL: baseUrl,
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
