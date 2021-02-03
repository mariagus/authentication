import axios from "axios";

const url = "http://localhost:4000/user/";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export function createUser(payload) {
  return axios.post(`${url}register`, payload);
}

export function loginUser(payload) {
  return axios.post(`${url}login`, payload);
}

export async function getCurrentUser() {
  const { data } = await axios.get(`${url}current`);
  let arr = [];
  for (const [key, val] of Object.entries(data)) {
    arr.push(`${key}: ${val}`);
  }
  return arr;
}
