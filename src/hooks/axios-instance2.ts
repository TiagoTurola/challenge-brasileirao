import axios from "axios";

const instance2 = axios.create({
  baseURL: "https://api.cartola.globo.com/",
  headers: {
    "content-type": "application/json",
  },
});

export default instance2;

