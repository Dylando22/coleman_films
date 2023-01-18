import { Box, Typography } from "@mui/material";
import FilmCard from "../components/FilmCard";
import filmData from "../data/FilmData";
import "./Video.css";

export default function Films() {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontFamily: "American Typewriter, serif",
      }}
    >
      <Typography fontFamily="American Typewriter, serif" variant="h4">
        THE LATEST
      </Typography>
      <div className="video-responsive">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/8iXxTik5tkg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        ></iframe>
      </div>
      <Typography fontFamily="American Typewriter, serif" variant="h6">
        Below are some of the most wonderful weddings I've had the privilege to
        film
      </Typography>
      <Box
        sx={{
          padding: { xs: "0px", md: "20px" },
          maxWidth: "850px",
          margin: "auto",
        }}
      >
        {filmData.map((item) => (
          <FilmCard
            key={item.link}
            direction={item.direction}
            title={item.title}
            quote={item.quote}
            image={item.image}
            link={item.link}
          />
        ))}
      </Box>
    </Box>
  );
}
