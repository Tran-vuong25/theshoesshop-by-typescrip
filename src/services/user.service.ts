import { axiosWithoutAuth } from ".";
import { axiosAuth } from "./axios.config";

type TBody = {
  email: string;
  password: string;
  name: string;
  gender: boolean;
  phone: string;
};

export const signUp = async (data: TBody) => {
  try {
    // fetch: body
    // axios: data
    const resp = await axiosWithoutAuth("/Users/signup", {
      method: "POST",
      data,
    });

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};

type TDataSignIn = {
  email: string;
  password: string;
};

export const signIn = async (data: TDataSignIn) => {
  try {
    const resp = await axiosWithoutAuth("/Users/signin", {
      method: "POST",
      data,
    });

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};


// /Users/getProfile
export const getProfile = async () => {
  try {
    const resp = await axiosAuth("/Users/getProfile", {
      method: "POST",
    });

    return resp.data.content;
  } catch (error: any) {
    throw new Error(error);
  }
};
