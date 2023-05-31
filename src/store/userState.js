import { atom } from "recoil";

const userState = atom({
  key: "user",
  default: {
    email: "",
    name: "",
    isLogin: false,
    accssesToken: "",
  },
});

export default userState;
