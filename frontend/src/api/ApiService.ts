import axios from "./axios";

class ApiService {
  get(path: string) {
    return async () => {
      const response = await axios.get(path);
      return response;
    };
  }
}

export function apiServiceProvider() {
  return new ApiService();
}
