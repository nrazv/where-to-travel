import { ImageDTO } from "./ImageDTO";

export type DestinationResponse = {
  id: string;
  title: string;
  description: string;
  images: ImageDTO[];
};
