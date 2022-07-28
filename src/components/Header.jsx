import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import avatar from "../images/logo200.png";
import { Link } from "react-router-dom";

function Header() {
  //write code here

  return (
    <Box
      sx={{
        height: "70px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Container
        sx={{
          height: "100%",
          paddingRight: "0",
          paddingLeft: "0",
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Grid item>
            <Link to="/">
              <Typography
                variant="h4"
                component="p"
                fontWeight={700}
                color="#fff"
              >
                Movie App
              </Typography>
            </Link>
          </Grid>
          <Grid item height="100%">
            <Avatar
              alt="avatar"
              src={avatar}
              sx={{ width: "auto", height: "80%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
