import axios from "axios";

const ENDPOINT = "https://rickandmortyapi.com/api";

export default function useAxios(baseURL: string = ENDPOINT) {
  return axios.create({
    baseURL,
    timeout: 20000,
  });
}
