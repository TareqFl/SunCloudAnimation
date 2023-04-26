import { Box, CssBaseline } from "@mui/material";
import React from "react";
import {
  container,
  buttonContainer,
  ray1,
  ray2,
  ray3,
  cloud,
  cloud2,
  cloud3,
  cloud4,
  cloud5,
  cloud6,
  cloud7,
  cloud8,
  cloud9,
  cloud10,
} from "./styles";
import { Star } from "@mui/icons-material";
const App = () => {
  const [click, setClick] = React.useState(true);

  return (
    <Box sx={{ ...container, backgroundColor: click ? "#2e83bf" : "#25213c" }}>
      <CssBaseline />
      <Box
        sx={{
          ...buttonContainer,
          backgroundColor: click ? "#2e83bf" : "#25213c",
          transition: "1s",
        }}
      >
        <Box
          sx={{
            ...ray1,
            // display: click ? "block" : "none",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            left: click ? -100 : 200,
            transition: "0.75s",
            zIndex: 1,
          }}
        ></Box>
        <Box
          sx={{
            ...ray2,
            // display: click ? "block" : "none",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            left: click ? -50 : 150,
            transition: "0.75s",
            zIndex: 2,
          }}
        ></Box>
        <Box
          sx={{
            ...ray3,
            // display: click ? "block" : "none",
            backgroundColor: "rgba(255, 255, 255, 0.025)",
            left: click ? 0 : 100,
            transition: "0.75s",
            zIndex: 3,
          }}
        ></Box>
        <Box
          id="cloud"
          sx={{
            ...cloud,
            bottom: click ? 90 : -400,
            right: -50,
            transition: "1s",
          }}
        ></Box>
        <Box
          id="cloud"
          sx={{
            ...cloud2,
            bottom: click ? 5 : -400,
            right: -5,
            transition: "1s",
          }}
        ></Box>
        <Box
          id="cloud"
          sx={{ ...cloud3, bottom: click ? -40 : -400, transition: "1s" }}
        ></Box>
        <Box
          id="cloud"
          sx={{ ...cloud4, bottom: click ? -45 : -400, transition: "1s" }}
        ></Box>
        <Box
          id="cloud"
          sx={{ ...cloud5, bottom: click ? -80 : -400, transition: "1s" }}
        ></Box>
        {/* Transparent Clouds */}
        <Box
          id="cloud"
          sx={{ ...cloud6, bottom: click ? 110 : -400, transition: "1s" }}
        ></Box>
        <Box
          id="cloud"
          sx={{ ...cloud7, bottom: click ? 60 : -400, transition: "1s" }}
        ></Box>
        <Box
          id="cloud"
          sx={{ ...cloud8, bottom: click ? 15 : -400, transition: "1s" }}
        ></Box>
        <Box
          id="cloud"
          sx={{ ...cloud9, bottom: click ? -20 : -400, transition: "1s" }}
        ></Box>
        <Box
          id="cloud"
          sx={{ ...cloud10, bottom: click ? -65 : -400, transition: "1s" }}
        ></Box>
        <Box
          id="Sun"
          onClick={() => setClick((prevValue) => !prevValue)}
          sx={{
            backgroundColor: click ? "#fbc72d" : "#cccfd9",
            height: "190px",
            width: "190px",
            position: "absolute",
            zIndex: 10,
            left: click === true ? "10%" : "55%",
            top: "12.5%",
            borderRadius: "50%",
            boxShadow: "inset 0px -5px 10px 0px rgba(126, 126, 126, 0.78)",
            "&:hover": {
              cursor: "pointer",
              transform: "scale(1.01)",
            },
            transform: !click && "rotate(-15deg)",
            transition: "0.75s",
          }}
        >
          <Box
            id="hole"
            sx={{
              height: "60px",
              width: "60px",
              backgroundColor: click ? "transparent" : "#9fa7bc",
              borderRadius: "50%",
              position: "absolute",
              left: 30,
              bottom: 50,
              boxShadow: !click && "inset 0px 1px 1px 0px",
              transition: "0.8s",
            }}
          ></Box>
          <Box
            id="hole"
            sx={{
              height: "35px",
              width: "35px",
              backgroundColor: click ? "transparent" : "#9fa7bc",
              borderRadius: "50%",
              position: "absolute",
              left: 75,
              top: 35,
              boxShadow: !click && "inset 0px 1px 1px 0px",
              transition: "0.8s",
            }}
          ></Box>
          <Box
            id="hole"
            sx={{
              height: "35px",
              width: "35px",
              backgroundColor: click ? "transparent" : "#9fa7bc",
              borderRadius: "50%",
              position: "absolute",
              left: 115,
              bottom: 35,
              boxShadow: !click && "inset 0px 1px 1px 0px",
              transition: "0.8s",
            }}
          ></Box>
          {/* End of Sun Container */}
        </Box>
        <Star
          sx={{
            fontSize: "2rem",
            fill: click ? "transparent" : "white",
            position: "absolute",
            left: 100,
            top: click ? -100 : 50,
            zIndex: 5,
            transition: "1s",
          }}
        />
        <Star
          sx={{
            fontSize: "2.5rem",
            fill: click ? "transparent" : "white",
            position: "absolute",
            left: 225,
            top: click ? -100 : 50,
            zIndex: 5,
            transition: "1s",
          }}
        />
        <Star
          sx={{
            fontSize: "2.2rem",
            fill: click ? "transparent" : "white",
            position: "absolute",
            left: 175,
            top: click ? -100 : 150,
            zIndex: 5,
            transition: "1s",
          }}
        />
        {/* Small Stars right Side*/}
        <Star
          sx={{
            fontSize: "0.9rem",
            fill: click ? "transparent" : "white",
            position: "absolute",
            left: 150,
            top: click ? -100 : 115,
            zIndex: 5,
            transition: "1s",
          }}
        />
        <Star
          sx={{
            fontSize: "0.9rem",
            fill: click ? "transparent" : "white",
            position: "absolute",
            left: 175,
            top: click ? -100 : 35,
            zIndex: 5,
            transition: "1s",
          }}
        />
        <Star
          sx={{
            fontSize: "0.9rem",
            fill: click ? "transparent" : "white",
            position: "absolute",
            left: 250,
            top: click ? -100 : 100,
            zIndex: 5,
            transition: "1s",
          }}
        />
        <Star
          sx={{
            fontSize: "0.9rem",
            fill: click ? "transparent" : "white",
            position: "absolute",
            left: 225,
            top: click ? -100 : 150,
            zIndex: 5,
            transition: "1s",
          }}
        />
        <Star
          sx={{
            fontSize: "0.9rem",
            fill: click ? "transparent" : "white",
            position: "absolute",
            left: 100,
            top: click ? -100 : 180,
            zIndex: 5,
            transition: "1s",
          }}
        />
        <Star
          sx={{
            fontSize: "0.9rem",
            fill: click ? "transparent" : "white",
            position: "absolute",
            left: 75,
            top: click ? -100 : 40,
            zIndex: 5,
            transition: "1s",
          }}
        />
        <Star
          sx={{
            fontSize: "0.9rem",
            fill: click ? "transparent" : "white",
            position: "absolute",
            left: 40,
            top: click ? -100 : 140,
            zIndex: 5,
            transition: "1s",
          }}
        />
        {/* End Of Small Stars Right Side */}
        {/* End Of Button Containe */}
      </Box>
    </Box>
  );
};

export default App;
