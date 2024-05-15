import { useRoutes } from "react-router-dom";

// project import
import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";
import MainPage from "pages/MainPage/index";
import AddBooksRoutes from "./AddBooksRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
    MainRoutes,
    AddBooksRoutes,
    LoginRoutes,
  ]);
}
