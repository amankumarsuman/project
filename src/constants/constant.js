import isDevelopment from "../utils/isDevelopment";
export const skyBlue = "#0597f2";
export const blue = "#0367a6";
export const lightGreen = "#60bf66";
export const green = "#055902";
export const parrot = "#93f205";

export const BASE_URL = isDevelopment()
  ? process.env.REACT_APP_API_URL_DEV
  : process.env.REACT_APP_API_URL_PROD;
