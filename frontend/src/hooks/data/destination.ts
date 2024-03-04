import { DestinationResponse } from "../../shared/types/location/DestinationResponse";
import axios from "../../api/axios";

export const getAllDestinations = async () => {
  const response = await axios.get<DestinationResponse[]>(`destination/all`);
  return response;
};
