// types
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = [
  {
    parent: "spravochnik-1",
    children: [
      {
        id: "spravochnik-1-1",
        title: "Тил – пикир алышуунун куралы",
        url: "/koshumcha-kitep/1/1/1",
        page: 5,
      },
    ],
  },
];

// ==============================|| SLICE - MENU ||============================== //

const addBooksChapters = createSlice({
  name: "addBooksChapters",
  initialState,
  reducers: {},
});

export default addBooksChapters.reducer;
