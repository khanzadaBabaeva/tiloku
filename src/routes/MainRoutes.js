import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";

// render - dashboard
const Classes = Loadable(lazy(() => import("pages/Classes")));
const ClassesList = Loadable(lazy(() => import("pages/Classes/ClassesList")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/class",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <ClassesList />,
    },
    {
      path: ":id",
      element: <Classes />,
    },
    {
      path: ":id/:chapterId",
      element: <Classes />,
    },
    {
      path: ":id/:chapterId/:subChapterId",
      element: <Classes />,
    },
  ],
};

export default MainRoutes;
