import { Box, Button, Card, Typography } from "@mui/material";
import "./NavBar.css";

interface Props {
  color: string;
  title: string;
  prices: number[];
  features: string[];
  image: string;
  setOpen: Function;
  setId: Function;
}

export default function PackageCard({
  color,
  title,
  prices,
  features,
  image,
  setOpen,
  setId,
}: Props) {
  const buttonSX = {
    height: "fit-content",
    width: "95%",
    backgroundColor: color,
    color: "white",
    "&:hover": {
      backgroundColor: "#555555",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        width: "250px",
        marginBottom: "10px",
      }}
    >
      <Typography fontFamily="American Typewriter, serif" variant="h5">
        {title}
      </Typography>
      <Card
        sx={{
          width: "250px",
          height: "fit-content",
          color: "white",
          backgroundColor: "secondary.main",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "5px",
            marginTop: "15px",
          }}
        >
          <img className="price-image" alt={title} src={image} />
        </Box>
        <Typography textAlign="center" variant="h5">
          ${prices[0]} - ${prices[1]}
        </Typography>
        <Typography
          fontFamily="American Typewriter, serif"
          marginLeft="15px"
          textAlign="start"
        >
          Includes:
        </Typography>
        {features.map((item) => (
          <Typography
            fontFamily="American Typewriter, serif"
            marginLeft="25px"
            textAlign="start"
          >
            - {item}
          </Typography>
        ))}

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Button
            onClick={() => {
              setOpen(true);
              setId(title);
            }}
            sx={buttonSX}
          >
            SEND REQUEST
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
