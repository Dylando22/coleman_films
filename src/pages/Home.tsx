import { Box, Typography } from "@mui/material";
import BackgroundVideo from "./test.mp4";
import HorizontalQuoteHolder from "../components/HorizontalQuoteHolder";
import "./Video.css";
import Chad3 from "../assets/CHAD3.png";
import Poster from "../assets/poster.png";

export default function Home() {
  const quotes = [
    {
      quote:
        "Chad did such an amazing job on our wedding video! I watch it every single day still and I've had it for months! He's a lot of fun to work with and is so good behind the camera!",
      author: "Savannah Spencer",
    },
    {
      quote:
        "Chad was professional, flexible, and worked with whatever we needed. This was the best videographer we looked at and the quality was amazing!",
      author: "Ashley Andersen",
    },
    {
      quote:
        "It's perfect, I can't stop watching it! I'm crying!! Chad was so amazing to work with, I recommend him to anyone looking for a videographer!",
      author: "Breanne",
    },
  ];

  return (
    <Box width="100vw">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          paddingBottom: "20px",
          paddingTop: { xs: "20px", md: "0px" },
        }}
      >
        <video className="background-home" autoPlay loop muted poster={Poster}>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <Box
          sx={{
            bgcolor: "lightgray",
            width: { xs: "90%", md: "45%" },
            margin: { xs: "auto", md: "20px 20px 20px 0px" },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <HorizontalQuoteHolder content={quotes} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box
          sx={{
            margin: "auto",
            width: { xs: "90%", md: "50%" },
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <Typography
            fontSize={{ xs: 36, md: 48 }}
            fontFamily="American Typewriter, serif"
            variant="h4"
          >
            MEET CHAD
          </Typography>
          <Box sx={{ width: "80%", margin: "auto", marginTop: "5px" }}>
            <Typography
              fontSize={{ xs: 14, md: 16 }}
              fontFamily="American Typewriter, serif"
              variant="body2"
            >
              I'm a wedding videographer based out of Utah, and I love my job.
              2 years ago I was given the opportunity to film my first wedding,
              and I fell in love with it right away. I loved capturing the
              emotion, the details, and the love portrayed the entire day of
              each special couple.{" "}
            </Typography>
            <Typography
              fontSize={{ xs: 14, md: 16 }}
              fontFamily="American Typewriter, serif"
              variant="body2"
            >
              I consider my career to be one of the most rewarding careers;
              giving me the opportunity to film Love as it happens in real time.
            </Typography>
            <Typography
              fontSize={{ xs: 14, md: 16 }}
              fontFamily="American Typewriter, serif"
              variant="body2"
            >
              Your wedding is incredibly important, obviously - and my goal as
              your videographer is to capture it in it's best light. In other
              words, my job is to make your wedding look even BETTER on film. 
            </Typography>
          </Box>
        </Box>
        <img className="chad1-image" src={Chad3} alt="chad"></img>
      </Box>
    </Box>
  );
}
