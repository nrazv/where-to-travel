import { useQuery } from "@tanstack/react-query";
import { getAllDestinations } from "../../hooks/data/destination";
import Destination from "../../components/destination/Destination";
import { DestinationResponse } from "../../shared/types/location/DestinationResponse";
import "./HomePage.css";
import LoadingLogo from "../../shared/loading-logo/LoadingLogo";
import { Alert, AlertTitle } from "@mui/material";
import { AxiosResponse } from "axios";

const HomePage: React.FC = () => {
  const { error, isLoading, data } = useQuery<
    AxiosResponse<DestinationResponse[]>
  >(["destinations-all"], getAllDestinations);

  if (error) {
    return (
      <Alert severity="error" className="home">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
    );
  }

  return (
    <section className="home">
      {isLoading ? (
        <LoadingLogo />
      ) : (
        data?.data.map((destination: DestinationResponse) => (
          <Destination destination={destination} key={destination.id} />
        ))
      )}
    </section>
  );
};

export default HomePage;
