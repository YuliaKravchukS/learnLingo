import axios from "axios";
// import { ApiProp } from "../types/indexTypes";

const instance = axios.create({
  baseURL: "https://learn-lingo-639aa-default-rtdb.firebaseio.com",
});

export const getTeachers = async () => {
  const { data } = await instance.get("/");
  return data;
};
