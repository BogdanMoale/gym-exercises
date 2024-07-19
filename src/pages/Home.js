import React, { useState } from "react";
import { Box } from "@mui/material";
// import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import Metadata from "../components/Metadata";
import Title from "../components/Title";

function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);

  return (
    <>
      <Title title={"Gym Exercises"}></Title>
      <Metadata
        description={"description"}
        content={"Browse hundred of workout to imporve your health and muscle"}
      ></Metadata>
      <Box>
        {/* <HeroBanner></HeroBanner> */}
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        ></SearchExercises>
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
        ></Exercises>
      </Box>
    </>
  );
}

export default Home;
