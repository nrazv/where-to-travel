import { Skeleton } from "@mui/material";
import { nanoid } from "nanoid";

const LoadingLogo = () => {
  return (
    <>
      <Skeleton key={nanoid()} variant="rectangular" width="25%" height={118} />
      <Skeleton key={nanoid()} width="25%" />
      <Skeleton key={nanoid()} variant="rectangular" width="25%" height={118} />
      <Skeleton key={nanoid()} width="25%" />
      <Skeleton key={nanoid()} variant="rectangular" width="25%" height={118} />
      <Skeleton key={nanoid()} width="25%" />
      <Skeleton key={nanoid()} variant="rectangular" width="25%" height={118} />
      <Skeleton key={nanoid()} width="25%" />
      <Skeleton key={nanoid()} variant="rectangular" width="25%" height={118} />
      <Skeleton key={nanoid()} width="25%" />
      <Skeleton key={nanoid()} variant="rectangular" width="25%" height={118} />
      <Skeleton key={nanoid()} width="25%" />
      <Skeleton key={nanoid()} variant="rectangular" width="25%" height={118} />
      <Skeleton key={nanoid()} width="25%" />
    </>
  );
};

export default LoadingLogo;
