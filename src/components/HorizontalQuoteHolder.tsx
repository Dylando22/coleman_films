import { IconButton, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const HorizontalContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "white",
  width: "100%",
  height: "100%",
  minHeight: "150px",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.main,
}));

interface Quotes {
  quote: string;
  author: string;
}

export default function HorizontalQuoteHolder({
  content,
}: {
  content: Array<Quotes>;
}) {
  const [current, setCurrent] = useState(0);

  const handleIncrease = () => {
    let temp = current + 1;
    if (temp < content.length) {
      setCurrent(temp);
    } else {
      setCurrent(0);
    }
  };

  const handleDecrease = () => {
    console.log(current);
    let temp = current - 1;
    if (temp >= 0) {
      setCurrent(temp);
    } else {
      setCurrent(content.length - 1);
    }
  };

  return (
    <HorizontalContainer>
      <IconButton
        sx={{
          backgroundColor: "secondary.light",
          ":hover": { backgroundColor: "secondary.dark" },
          marginLeft: "5px",
        }}
        onClick={handleDecrease}
      >
        <ArrowBackIos fontSize="small" sx={{ color: "black" }} />
      </IconButton>
      <Box>
        <Typography
          variant="h6"
          sx={{
            marginTop: { xs: "15px", md: "0px" },
            fontSize: { xs: 16, md: 20, lg: 24 },
          }}
        >
          "{content[current].quote}"
        </Typography>
        <Typography marginTop="10px">-- {content[current].author}</Typography>
      </Box>
      <IconButton
        sx={{
          backgroundColor: "secondary.light",
          ":hover": { backgroundColor: "secondary.dark" },
          marginRight: "5px",
        }}
        onClick={handleIncrease}
      >
        <ArrowForwardIos fontSize="small" sx={{ color: "black" }} />
      </IconButton>
    </HorizontalContainer>
  );
}
