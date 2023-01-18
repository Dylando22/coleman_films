import { ModeNight, LightMode, Menu } from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";
import Logo from "../assets/chad_logo.png";
import HeaderLink from "./HeaderLink";
import { Drawer, Typography } from "@mui/material";
import SideBarLink from "./SideBarLink";

interface Props {
  mode: string;
  setMode: Function;
}

export default function Navbar({ mode, setMode }: Props) {
  const [active, setActive] = useState<boolean[]>([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (String(window.location) === "http://localhost:3000/films") {
      setActive([false, true, false]);
    } else if (String(window.location) === "http://localhost:3000/prices") {
      setActive([false, false, true]);
    } else {
      setActive([true, false, false]);
    }
  }, []);

  const changeActive = (id: number) => {
    let temp = [false, false, false];
    temp[id] = true;
    setActive(temp);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "black",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          margin: "15px",
        }}
      >
        <div
          onClick={() => {
            navigate("/");
            changeActive(0);
          }}
        >
          <img className="navbar-img" alt="logo" src={Logo} />
        </div>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <HeaderLink
          title="HOME"
          link="/coleman_films"
          active={active[0]}
          changeActive={() => changeActive(0)}
        />
        <HeaderLink
          title="FILMS"
          link="/coleman_films/films"
          active={active[1]}
          changeActive={() => changeActive(1)}
        />
        <HeaderLink
          title="PRICES"
          link="/coleman_films/prices"
          active={active[2]}
          changeActive={() => changeActive(2)}
        />

        {mode === "light" ? (
          <IconButton
            sx={{ margin: "15px" }}
            onClick={(e) => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            <LightMode sx={{ color: "white" }} />
          </IconButton>
        ) : (
          <IconButton
            sx={{ margin: "15px" }}
            onClick={(e) => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            <ModeNight />
          </IconButton>
        )}
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <IconButton
          sx={{ margin: "15px" }}
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <Menu fontSize="large" sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Drawer
        open={open}
        anchor="right"
        onClose={() => {
          setOpen(false);
        }}
        sx={{
          width: 300,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography marginTop="15px" variant="h4">
            MENU
          </Typography>
          <SideBarLink
            title="HOME"
            link="/coleman_films"
            active={active[0]}
            changeActive={() => changeActive(0)}
          />
          <SideBarLink
            title="FILMS"
            link="/coleman_films/films"
            active={active[1]}
            changeActive={() => changeActive(1)}
          />
          <SideBarLink
            title="PRICES"
            link="/coleman_films/prices"
            active={active[2]}
            changeActive={() => changeActive(2)}
          />
          {mode === "light" ? (
            <IconButton
              sx={{
                width: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px",
              }}
              onClick={(e) => {
                setMode(mode === "light" ? "dark" : "light");
              }}
            >
              <LightMode sx={{ color: "white" }} />
            </IconButton>
          ) : (
            <IconButton
              sx={{
                width: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px",
              }}
              onClick={(e) => {
                setMode(mode === "light" ? "dark" : "light");
              }}
            >
              <ModeNight />
            </IconButton>
          )}
        </Box>
      </Drawer>
    </Box>
  );
}
