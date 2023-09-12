import { Card, CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import { DestinationResponse } from "../../shared/types/location/DestinationResponse";
import { ImageDTO } from "../../shared/types/location/ImageDTO";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router";

export interface DestinationProps {
  destination: DestinationResponse;
}

const Destination = ({ destination }: DestinationProps) => {
  const navigate = useNavigate();

  const getImgSrc = (img: ImageDTO): string => {
    return `http://localhost:8080${img.imagePath}`;
  };

  const navigateToBlog = () => {
    navigate(`/${destination.id}`);
  };

  return (
    <Card sx={{ width: "40vw", margin: "1rem", display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={getImgSrc(destination.images[0])}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Link component="button" variant="h4" onClick={navigateToBlog}>
            {destination.title}
          </Link>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {destination.description}
          </Typography>
        </CardContent>
        <div>
          <h4>Like</h4>
        </div>
      </Box>
    </Card>
  );
};

export default Destination;
