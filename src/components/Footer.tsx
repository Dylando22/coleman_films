import {
  Facebook,
  Instagram,
  MailOutlineOutlined,
  YouTube,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import "./NavBar.css";
import Logo from "../assets/chad_logo.png";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "180px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        color: "white",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
        }}
      >
        <img className="footer-img" alt="logo" src={Logo} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <IconButton
          onClick={() => {
            window.open(
              "https://www.instagram.com/chadcolemanfilms/",
              "_blank"
            );
          }}
        >
          <Instagram
            fontSize="large"
            sx={{ marginRight: "10px", marginLeft: "10px", color: "white" }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            window.open("https://www.m.me/100000903162392", "_blank");
          }}
        >
          <Facebook
            fontSize="large"
            sx={{ marginRight: "10px", marginLeft: "10px", color: "white" }}
          />
        </IconButton>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <img className="footer-img" alt="logo" src={Logo} />
        </Box>
        <IconButton
          onClick={() => {
            window.open(
              "https://www.youtube.com/channel/UCmtk0E1biHYoVEliI74VIQw",
              "_blank"
            );
          }}
        >
          <YouTube
            fontSize="large"
            sx={{ marginRight: "10px", marginLeft: "10px", color: "white" }}
          />
        </IconButton>
        <IconButton
          onClick={() => {
            window.location.href =
              "mailto:chadcolemanfilms@gmail.com?subject=Wedding%20Video%20&body=Hey%20Chad%2C%20I%20saw%20your%20website%20and%20I%20was%20wondering%20if%20I%20could%20schedule%20a%20wedding%20video%20with%20you%3F";
          }}
        >
          <MailOutlineOutlined
            fontSize="large"
            sx={{ marginRight: "10px", marginLeft: "10px", color: "white" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
