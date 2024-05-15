// types
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  openItem: null,
  defaultId: "dashboard",
  openComponent: "buttons",
  openChapter: null,
  openSubChapter: null,
  drawerOpen: false,
  componentDrawerOpen: true,
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
      state.openVideo = false;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },
    activeChapter(state, action) {
      state.openChapter = action.payload.openChapter;
      state.openVideo = false;
    },
    activeSubChapter(state, action) {
      state.openSubChapter = action.payload.openSubChapter;
      state.openVideo = false;
    },
  },
});

export default menu.reducer;

export const {
  activeItem,
  activeComponent,
  openDrawer,
  openComponentDrawer,
  activeChapter,
  activeSubChapter,
} = menu.actions;
