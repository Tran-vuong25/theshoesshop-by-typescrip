import axios from "axios";
import { ACCESS_TOKEN } from "src/constant";
import { getLocalstorage } from "src/utils/utils";

const BASE_URL = "https://shop.cyberlearn.vn/api";

/**
 * *axios
 *  - axiosWithoutAuth: những API public
 *  - axiosAuth:        những API private - cần xác minh
 */

export const axiosWithoutAuth = axios.create({
  baseURL: BASE_URL,
  //   Thời gian đợi request hoàn thành
  timeout: 180_000, // ~~ 3 phút (180000 giây)
});

// * Cần đính kèm authorization vào header của mối request
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  //   Thời gian đợi request hoàn thành
  timeout: 180_000, // ~~ 3 phút (180000 giây)
});

// * intercreptor: Đính kèm thêm vài thông tin cho request trước khi gửi đi
axiosAuth.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getLocalstorage(ACCESS_TOKEN)}`;

    return config;
  },
  (err) => {
    console.log({ err });

    return Promise.reject(err);
  },
);
