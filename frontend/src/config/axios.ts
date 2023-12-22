import axios from "axios";
import { HOTEL_BOOKING_TOKEN } from "../utils/constant";

const axiosInstance = () => {
  //getting token from local storage
  const token = localStorage.getItem(HOTEL_BOOKING_TOKEN);

  //setting the enviroment
  let url: any = "http://localhost:8800";
  // if (process.env.NEXT_PUBLIC_NODE_ENV === "local") {
  //   url = process.env.NEXT_PUBLIC_BACKEND_LOCAL_BASE_URL;
  // } else if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
  //   url = process.env.NEXT_PUBLIC_BACKEND_DEVELOPMENT_BASE_URL;
  // } else if (process.env.NEXT_PUBLIC_NODE_ENV === "staging") {
  //   url = process.env.NEXT_PUBLIC_BACKEND_STAGING_BASE_URL;
  // } else if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
  //   url = process.env.NEXT_PUBLIC_BACKEND_PRODUCTION_BASE_URL;
  // }
  const enviroment = `${url}/api`;
  return axios.create({
    baseURL: enviroment,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  });
};

export default axiosInstance;
