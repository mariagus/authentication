import axios from "axios";
import jwtDecode from "jwt-decode";

const url = "http://localhost:4000/user/";

export const setAuthToken = (token) => {
  if (token) {
    console.log(token);
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export async function createUser(payload) {
  const { data } = await axios.post(`${url}/register`, payload);
  return data;
}

export async function loginUser(payload) {
  const { data } = await axios.post(`${url}/login`, payload);
  return data;
}

export function getUsername(token, setState) {
  localStorage.username = jwtDecode(token).username;
  return localStorage.username;
}
