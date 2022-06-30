import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_URL } from "./settings";
import { auth } from "./auth";
import _ from "lodash";

class ResponseError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "";
  }
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: AxiosResponse<any, any>): object {
  if (response.data.access_token) {
    return response;
  }
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new ResponseError(
      response.data?.message ? response.data?.message : "Something went wrong."
    );
  }
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function handleError(response: object): object | undefined {
  const error = response;
  throw error;
}
/**
 * Format query params
 *
 * @param params
 * @returns {string}
 */

const customRequest = axios.create({
  baseURL: API_URL,
  validateStatus: function (status) {
    return !!(
      (status >= 200 && status < 300) ||
      status === 422 ||
      status === 500 ||
      400
    );
  },
});

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(
  url: string,
  requestConfig: AxiosRequestConfig = {},
  getResponseHeaders: boolean = false
): object {
  const token = auth.getToken();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // @ts-ignore
  if (token) headers["Authorization"] = "Bearer " + token;

  requestConfig.headers = _.omitBy(
    {
      ...requestConfig.headers,
      ...headers,
    },
    _.isNil
  );

  return customRequest(url, requestConfig)
    .then((response) => parseJSON(response))
    .catch(handleError);
}
