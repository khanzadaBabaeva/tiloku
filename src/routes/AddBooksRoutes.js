import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";

// render - dashboard
const AdditionalBooks = Loadable(lazy(() => import("pages/AdditionalBooks")));

// ==============================|| MAIN ROUTING ||============================== //

const AddBooksRoutes = {
  path: "/koshumcha-kitep",
  element: <MainLayout />,
  children: [
    {
      path: ":id",
      element: <AdditionalBooks />,
    },
    {
      path: ":id/:chapterId",
      element: <AdditionalBooks />,
    },
    {
      path: ":id/:chapterId/:subChapterId",
      element: <AdditionalBooks />,
    },
  ],
};

export default AddBooksRoutes;
