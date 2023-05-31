import { atom } from "recoil";

export const nameState = atom({
  key: "name",
  default: "",
});

export const phoneState = atom({
  key: "phone",
  default: "",
});
