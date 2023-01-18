import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  IconButton,
  InputLabel,
  List,
  ListItem,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import PackageCard from "../components/PackageCard";

export default function Prices() {
  const [open, setOpen] = useState(false);
  const [packageId, setPackageId] = useState("");

  const [eventState, setEventState] = useState({
    firstLook: false,
    templeExit: false,
    ceremony: false,
    reception: false,
  });

  const handleEventChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEventState({
      ...eventState,
      [event.target.name]: event.target.checked,
    });
  };
  const { firstLook, templeExit, ceremony, reception } = eventState;

  const [find, setFind] = useState("");

  const handleFindChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFind((event.target as HTMLInputElement).value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        fontFamily="American Typewriter, serif"
        textAlign="center"
        variant="h3"
      >
        PRICES
      </Typography>
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: { xs: "95%", md: "900px" },
        }}
      >
        <PackageCard
          setOpen={setOpen}
          setId={setPackageId}
          title="Base Package"
          prices={[800, 1199]}
          color="orange"
          features={["1", "2", "3"]}
          image={"../image1.png"}
        />
        <PackageCard
          setOpen={setOpen}
          setId={setPackageId}
          title="Standard Package"
          prices={[1200, 1599]}
          color="#ba1c37"
          features={["1", "2", "3"]}
          image={"../image1.png"}
        />
        <PackageCard
          setOpen={setOpen}
          setId={setPackageId}
          title="Premium Package"
          prices={[1600, 1999]}
          color="#1c46ba"
          features={["1", "2", "3"]}
          image={"../image1.png"}
        />
      </Box>
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          overflow: "scroll",
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: { xs: "300px", md: "450px" },
            height: "fit-content",
            marginBottom: "50px",
            backgroundColor: "background.default",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ color: "common.black" }} variant="h5">
              Schedule {packageId}
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <Close color="error" />
            </IconButton>
          </Box>
          <List
            dense
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              textAlign: "center",
              padding: "5px",
              margin: "5px",
            }}
          >
            <ListItem sx={{ marginBottom: "5px" }}>
              <TextField
                required
                label="Email"
                id="email"
                variant="standard"
                placeholder="test@example.com"
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="standard"
                required
                label="Name"
                id="name"
                placeholder="First and Last"
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="standard"
                required
                label="Instagram Handle"
                id="insta"
                placeholder="@example"
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="standard"
                required
                label="Location"
                id="location"
                placeholder="city and venue"
              ></TextField>
            </ListItem>
            <InputLabel
              sx={{ textAlign: "start", marginLeft: "15px", marginTop: "15px" }}
              id="date-label"
            >
              Wedding Date
            </InputLabel>
            <ListItem>
              <TextField required type="date" id="date"></TextField>
            </ListItem>
            <ListItem>
              <FormControl component="fieldset" variant="standard">
                <FormLabel sx={{ color: "default.paper" }} component="legend">
                  What Event's do you want covered?
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="default"
                        checked={firstLook}
                        onChange={handleEventChange}
                        name="firstLook"
                      />
                    }
                    label="First Look"
                    sx={{ color: "common.black" }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="default"
                        checked={templeExit}
                        onChange={handleEventChange}
                        name="templeExit"
                      />
                    }
                    label="Temple Exit"
                    sx={{ color: "common.black" }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="default"
                        checked={ceremony}
                        onChange={handleEventChange}
                        name="ceremony"
                      />
                    }
                    label="Wedding Ceremony"
                    sx={{ color: "common.black" }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="default"
                        checked={reception}
                        onChange={handleEventChange}
                        name="reception"
                      />
                    }
                    label="Reception"
                    sx={{ color: "common.black" }}
                  />
                </FormGroup>
                <FormHelperText>Select at least one</FormHelperText>
              </FormControl>
            </ListItem>
            <ListItem>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  How did you find me?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={find}
                  onChange={handleFindChange}
                  sx={{ color: "common.black" }}
                >
                  <FormControlLabel
                    value="instagram"
                    control={<Radio />}
                    label="Instagram"
                  />
                  <FormControlLabel
                    value="website"
                    control={<Radio />}
                    label="Website"
                  />
                  <FormControlLabel
                    value="friend"
                    control={<Radio />}
                    label="Friend"
                  />
                  <FormControlLabel
                    value="photographer"
                    control={<Radio />}
                    label="Photographer"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </ListItem>
            {find === "other" && (
              <ListItem>
                <TextField
                  variant="standard"
                  label="Other"
                  id="other"
                  placeholder="how you found me"
                ></TextField>
              </ListItem>
            )}
            {find === "photographer" && (
              <ListItem>
                <TextField
                  variant="standard"
                  label="Your Photographer"
                  id="photographer"
                  placeholder="Full name"
                ></TextField>
              </ListItem>
            )}
            {find === "friend" && (
              <ListItem>
                <TextField
                  variant="standard"
                  label="Who is your friend"
                  id="friend"
                  placeholder="Full name"
                ></TextField>
              </ListItem>
            )}
            <ListItem>
              <TextField
                multiline
                label="Questions"
                id="questions"
                placeholder="Questions or comments"
              ></TextField>
            </ListItem>
            <ListItem>
              <Button variant="contained">Submit Request</Button>
            </ListItem>
          </List>
        </Box>
      </Modal>
    </Box>
  );
}
