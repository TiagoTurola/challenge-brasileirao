import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.api-futebol.com.br/v1/",
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer test_c3b23df565296255dc40d91e4213cb",
  },
});

export default instance;

