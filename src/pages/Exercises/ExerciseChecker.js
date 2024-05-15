import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  TextField,
  Button,
  Typography,
  Box,
  FormHelperText,
} from "@mui/material";

function ExerciseChecker() {
  const { id, chapterId, subChapterId } = useParams();
  const exercises =
    useSelector((state) => state.exercises).find(
      (exe) => exe.chapter === id + "-" + chapterId + "-" + subChapterId
    ) || {};
  const [answered, setAnswered] = useState(
    exercises?.exercises?.map(() => false)
  );
  const [userInput, setUserInput] = useState(
    exercises?.exercises?.map(() => ({ answer: "" }))
  );
  const [isCorrect, setIsCorrect] = useState(false);
  const [errors, setErrors] = useState(
    exercises?.exercises?.map(() => ({ error: "" }))
  );

  function checkExercise(i) {
    const exerciseText = exercises.exercises[i].answer;
    if (!userInput[i].answer) {
      setErrors((prev) => {
        const prevValue = [...prev];
        prevValue[i].error = "Көнүгүүнү киргиз";
        return prevValue;
      });
      return;
    }
    const isCorrectAnswer = userInput[i].answer === exerciseText;
    setIsCorrect(isCorrectAnswer);
    setAnswered((prev) => {
      const prevValue = [...prev];
      prevValue[i] = true;
      return prevValue;
    });
  }
  return (
    exercises?.exercises && (
      <Box width="80%">
        <Typography variant="h4">Көнүгүүлөр</Typography>
        {exercises?.exercises?.map((item, i) => (
          <div key={item.id}>
            <Typography variant="h5">{item.title}</Typography>
            <TextField
              label="Көнүгүүнү киргиз"
              multiline
              value={userInput[i]?.answer || ""}
              onChange={(e) => {
                setUserInput((prev) => {
                  const prevValue = [...prev];
                  prevValue[i].answer = e.target.value;
                  return prevValue;
                });
                setErrors((prev) => {
                  const prevValue = [...prev];
                  prevValue[i].error = "";
                  return prevValue;
                });
              }}
              variant="outlined"
              fullWidth
              error={!!errors[i]?.error}
              margin="normal"
              sx={{ mb: 0 }}
            />
            {errors[i]?.error && (
              <FormHelperText error sx={{ mt: 0, mb: 1 }}>
                {errors[i]?.error}
              </FormHelperText>
            )}

            <Button
              variant="contained"
              onClick={() => checkExercise(i)}
              sx={{ mt: 1 }}
            >
              Текшер
            </Button>
            {isCorrect && <p>Жооп туура!</p>}
            <br />
            {answered[i] && (
              <>
                <Typography variant="h5" fontWeight="bold">
                  Туура жооп
                </Typography>
                {item.answer.map((answer, j) => (
                  <Typography variant="subtitle1" key={j}>
                    {answer}
                  </Typography>
                ))}
              </>
            )}
          </div>
        ))}
      </Box>
    )
  );
}

export default ExerciseChecker;
