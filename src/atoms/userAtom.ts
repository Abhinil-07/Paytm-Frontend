import { atom } from "recoil";

const defaultUserThreads = localStorage.getItem("user-threads") || "{}";

const userAtom = atom({
  key: "userAtom",
  default: JSON.parse(defaultUserThreads),
});

export default userAtom;
