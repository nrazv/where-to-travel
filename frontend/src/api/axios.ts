import axios from "axios";
import baseUrl from "../shared/baseUrl";

export default axios.create({
  baseURL: baseUrl(),
});
