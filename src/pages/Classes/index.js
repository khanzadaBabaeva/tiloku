import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeExercise, activeVideo } from "store/reducers/actions";

import { Box, Button } from "@mui/material";

import ExerciseChecker from "pages/Exercises/ExerciseChecker";
import Book from "pages/Book/index";
import VideoPlayer from "pages/VideoLesson/index";

const Classes = () => {
  const { subChapterId } = useParams();
  const dispatch = useDispatch();
  const { openExercise, openVideo } = useSelector((state) => state.actions);
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {openVideo ? <VideoPlayer /> : <Book />}
      {openExercise && <ExerciseChecker />}
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        gap={1}
        sx={{ my: 2 }}
      >
        {subChapterId && (
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => dispatch(activeVideo({ openVideo: !openVideo }))}
          >
            Видеосабак
          </Button>
        )}

        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => {
            dispatch(activeExercise({ openExercise: !openExercise }));
            window.scrollTo({ bottom: 0, behavior: "smooth" });
          }}
        >
          Көнүгүү
        </Button>
      </Box>
    </Box>
  );
};

export default Classes;
