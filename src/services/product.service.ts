import { TProductAPI } from "src/pages/home/convert";
import { axiosWithoutAuth } from "./axios.config";
import { IDetailAPI } from "src/pages/detail/type";

// export const getAllProduct = () => {
//   return new Promise((resole, reject) => {
//     // resole(10)
//     // reject('haha')

//     axiosWithoutAuth("/product")
//       .then((response) => {
//         // console.log('get all product', response);
//         resole(response.data.content);
//       })
//       .catch(reject);
//   });
// };

// *Kết quả trả về trong function async là một promise
export const getAllProduct = async (): Promise<TProductAPI[]> => {
  try {
    const response = await axiosWithoutAuth("/Product");

    return response.data.content; //resolve(response.data.content)
  } catch (error: any) {
    // return error; //resolve(error)

    throw new Error(error); //reject(error)
  }
};

export const getProductByID = async (id: string) : Promise<IDetailAPI> => {
  try {
    // const response = await axiosWithoutAuth(`/Product/getbyid?id=${id}`);
    const response = await axiosWithoutAuth("/Product/getbyid", {
      params: { id },
    });

    return response.data.content; //resolve(response.data.content)
  } catch (error: any) {
    // return error; //resolve(error)

    throw new Error(error); //reject(error)
  }
};
