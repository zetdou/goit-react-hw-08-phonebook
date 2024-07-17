import axios from "axios";

const client = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAutHeader = (token) => {
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  client.defaults.headers.common.Authorization = "";
};

export { client, setAutHeader, clearAuthHeader };
