import { useParams } from "react-router";

const Location = () => {
  const { locationId } = useParams();

  return (
    <div>
      <h3>Params</h3>
      <h5>{locationId}</h5>
    </div>
  );
};

export default Location;
