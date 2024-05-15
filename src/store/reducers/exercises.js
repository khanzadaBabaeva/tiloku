import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = [
  {
    id: 1,
    chapter: "class5-2-2",
    exercises: [
      {
        id: 1,
        title: "209-көнүгүү",
        page: 76,
        answer: [
          "төркүнү -- 7 тамга, 7 тыбыш",
          "курдаш -- 6 тамга, 6 тыбыш",
          "тиричилик -- 9 тамга, 9 тыбыш",
          "баатырлар -- 9 тамга, 8 тыбыш",
          "жоого -- 5 тамга, 4 тыбыш",
          "дайыма -- 6 тамга, 6 тыбыш",
          "Үзөңгүлөр -- 9 тамга, 9 тыбыш",
          "Кийинчерээк -- 11 тамга, 10 тыбыш",
          "мааниси -- 7 тамга, 6 тыбыш",
          "кеткен -- 6 тамга, 6 тыбыш",
        ],
      },
    ],
  },
];

const exercises = createSlice({
  name: "exercises",
  initialState,
  reducers: {},
});

export default exercises.reducer;
