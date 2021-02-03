import axios from "axios";

const url = "http://localhost:4000/user/";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export async function createUser(payload) {
  const { data } = await axios.post(`${url}register`, payload);
  return data;
}

export async function loginUser(payload) {
  const { data } = await axios.post(`${url}login`, payload).catch((error) => {
    return error.response.data;
  });
  return data;
}

export async function getCurrentUser() {
  const { data } = await axios.get(`${url}current`);
  let arr = [];
  for (const [key, val] of Object.entries(data)) {
    arr.push(`${key}: ${val}`);
  }
  return arr;
}
