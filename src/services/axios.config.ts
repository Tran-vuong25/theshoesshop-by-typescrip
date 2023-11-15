import axios from "axios";

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
