import axios from "axios";

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
  const { data: success } = await axios.post(`${url}/register`, payload);
  return success;
}

export async function loginUser(payload) {
  const { data } = await axios.post(`${url}/login`, payload);
  return data.success;
}
