import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { sendGAEvent } from "../utilities/utils";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
