import axios, { AxiosResponse } from "axios";
import { UserCredentials } from "../../pages/Login/UserCredentials";

const loginRequest = ({
  email,
  password,
}: UserCredentials): Promise<AxiosResponse> => {
  return axios.get("http://localhost:8080/api/v1/user/all", {
    withCredentials: true,
    auth: {
      username: email,
      password: password,
    },
  });
};
export default loginRequest;
