import { LOGIN } from "./loginType";
export const loginInitialState = {
  infos: {
    email: "",
    password: "",
  },
  logIn: false,
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return (state = {
        ...state,
        infos:action.payload,
        logIn:true
      });
 default:
     return state;
  }
};
