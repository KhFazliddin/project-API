import { LOGIN } from "./loginType";

export const loginAction = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};
