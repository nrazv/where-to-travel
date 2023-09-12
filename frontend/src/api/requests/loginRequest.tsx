import axios, { AxiosResponse } from "axios";
import { UserCredentials } from "../../shared/types/user/UserCredentials";

const loginRequest = ({
  email,
  password,
}: UserCredentials): Promise<AxiosResponse> => {
  return axios.get("http://localhost:8080/api/v1/user/all", {
    auth: {
      username: email,
      password: password,
    },
  });
};
export default loginRequest;