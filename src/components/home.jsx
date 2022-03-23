import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { sendGAEvent } from "../utilities/utils";
import { renderButton, checkSignedIn } from "../utilities/utils";
import React, { useState, useEffect } from "react";
import Report from "./report";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [isSignedIn, setIsSignedIn] = useState(0);

  const updateSignin = (signedIn) => {
    setIsSignedIn(signedIn);
    if (!signedIn) {
      renderButton();
    }
  };

  const init = () => {
    checkSignedIn()
      .then((signedIn) => {
        updateSignin(signedIn);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    window.gapi.load("auth2", init);
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 className="title-tome-page">Homepage</h1>
        <p>This is home page.</p>
        <Stack spacing={2} direction="row">
          <Button
            className="button-test-1"
            variant="contained"
            onClick={() =>
              sendGAEvent("Button Test", "Click Component", "Test 1")
            }
          >
            Test 1
          </Button>
          <Button
            className="button-test-2"
            variant="contained"
            onClick={() =>
              sendGAEvent("Button Test", "Click Component", "Test 2")
            }
          >
            Test 2
          </Button>
          <Button
            className="button-test-3"
            variant="contained"
            onClick={() =>
              sendGAEvent("Button Test", "Click Component", "Test 3")
            }
          >
            Test 3
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        {!isSignedIn ? <div id="signin-button"></div> : <Report />}
      </Grid>
    </Grid>
  );
};

export default Home;
