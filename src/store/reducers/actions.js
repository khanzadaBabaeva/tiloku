import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  openedBook: null,
  openedChapter: null,
  openedSubChapter: null,
  openExercise: false,
  openVideo: false,
  openedPage: 1,
};

const actions = createSlice({
  name: "actions",
  initialState,
  reducers: {
    openBook: (state, action) => {
      state.openedBook = action.payload.openedBook;
    },
    openChapter: (state, action) => {
      state.openedChapter = action.payload.openedChapter;
      state.openVideo = false;
    },
    openSubChapter: (state, action) => {
      state.openedSubChapter = action.payload.openedSubChapter;
      state.openVideo = false;
    },
    activeExercise: (state, action) => {
      state.openExercise = action.payload.openExercise;
      state.openVideo = false;
    },
    activeVideo: (state, action) => {
      state.openVideo = action.payload.openVideo;
    },
    openPage: (state, action) => {
      state.openedPage = action.payload.openedPage;
    },
  },
});

export default actions.reducer;

export const {
  openBook,
  openChapter,
  openSubChapter,
  activeExercise,
  activeVideo,
  openPage,
} = actions.actions;
