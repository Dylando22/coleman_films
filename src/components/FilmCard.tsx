import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import "./NavBar.css";

interface Props {
  direction: number;
  title: string;
  quote: string;
  image: string;
  link: string;
}

const StyledButton = styled(Button)(({ theme }) => ({
  // converts the MUI card component into a circle and centers the content within it
  backgroundColor: "#555555",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export default function FilmCard({
  direction,
  title,
  image,
  quote,
  link,
}: Props) {
  return (
    <Box>
      {direction === 1 ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            paddingBottom: { xs: "20px", md: "0px" },
            paddingTop: { xs: "20px", md: "0px" },
          }}
        >
          <Box
            sx={{
              width: { xs: "350px", md: "80%" },
              margin: { xs: "auto", md: "0px" },
              height: "220px",
            }}
          >
            <img className="film-image" alt="image" src={image} />
          </Box>
          <Box
            sx={{
              bgcolor: "black",
              color: "white",
              width: { xs: "350px", md: "80%" },
              height: "220px",
              margin: { xs: "auto", md: "0px" },
              alignItems: "center",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Typography
              fontFamily="American Typewriter, serif"
              marginTop="25px"
              variant="h4"
              fontSize={30}
            >
              {title}
            </Typography>
            <Typography
              fontFamily="American Typewriter, serif"
              variant="caption"
              sx={{ color: "grey", marginLeft: "15px", marginRight: "5px" }}
            >
              {quote}
            </Typography>
            <StyledButton
              disableElevation
              sx={{ color: "white" }}
              variant="contained"
            >
              watch now
            </StyledButton>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            paddingBottom: { xs: "20px", md: "0px" },
            paddingTop: { xs: "20px", md: "0px" },
          }}
        >
          <Box
            sx={{
              bgcolor: "black",
              color: "white",
              width: { xs: "350px", md: "80%" },
              height: "220px",
              margin: { xs: "auto", md: "0px" },
              alignItems: "center",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Typography
              fontFamily="American Typewriter, serif"
              marginTop="25px"
              variant="h4"
              fontSize={30}
            >
              {title}
            </Typography>
            <Typography
              fontFamily="American Typewriter, serif"
              variant="caption"
              sx={{ color: "grey", marginLeft: "15px", marginRight: "5px" }}
            >
              {quote}
            </Typography>
            <StyledButton
              disableElevation
              sx={{ color: "white" }}
              variant="contained"
              onClick={() => {
                window.open(link, "__blank");
              }}
            >
              watch now
            </StyledButton>
          </Box>
          <Box
            sx={{
              width: { xs: "350px", md: "80%" },
              margin: { xs: "auto", md: "0px" },
              height: "220px",
            }}
          >
            <img className="film-image" alt="image" src={image} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
