// third-party
import { combineReducers } from "redux";

// project import
import menu from "./menu";
import subChapters from "./subChapters";
import actions from "./actions";
import exercises from "./exercises";
import addBookChapter from "./addBookChapter";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  subChapters,
  actions,
  exercises,
  addBookChapter,
});

export default reducers;
