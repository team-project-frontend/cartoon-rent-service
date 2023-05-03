import { atom } from "recoil";

const userState = atom({
  key: "user",
  default: {
    email: "",
    name: "",
    isLogin: true,
    accssesToken: "",
  },
});

export default userState;
