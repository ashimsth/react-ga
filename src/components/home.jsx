import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import ReactGA from "react-ga";
ReactGA.initialize("G-Y2EZBTX5GL", { debug: true });

const Home = () => {
  function handleClickTest1(label) {
    ReactGA.event({
      category: "Button Test",
      action: "Click Component",
      label: label,
    });
  }

  return (
    <div>
      <h1 className="title-tome-page">Homepage</h1>
      <p>This is home page.</p>
      <Stack spacing={2} direction="row">
        <Button
          className="button-test-1"
          variant="contained"
          onClick={() => handleClickTest1("Test 1")}
        >
          Test 1
        </Button>
        <Button
          className="button-test-2"
          variant="contained"
          onClick={() => handleClickTest1("Test 2")}
        >
          Test 2
        </Button>
        <Button
          className="button-test-3"
          variant="contained"
          onClick={() => handleClickTest1("Test 3")}
        >
          Test 3
        </Button>
      </Stack>
    </div>
  );
};

export default Home;
