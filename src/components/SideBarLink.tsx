import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const StyledButton = styled(Button)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
  fontWeight: "50",
  marginLeft: "20%",
  marginRight: "20%",
  marginTop: "30px",
  padding: "5px",
  "&:hover": {
    backgroundColor: "#383837",
  },
}));

interface Props {
  active: boolean;
  link: string;
  title: string;
  changeActive(id: number): void;
}

export default function SideBarLink({
  active,
  link,
  title,
  changeActive,
}: Props) {
  const navigate = useNavigate();

  return (
    <StyledButton
      sx={{
        backgroundColor: active ? "#888888" : "#444444",
      }}
      onClick={() => {
        navigate(link);
        changeActive(0);
      }}
    >
      {title}
    </StyledButton>
  );
}
