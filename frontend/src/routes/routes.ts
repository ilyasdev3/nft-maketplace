import { lazy } from "react";
import { IRoutes, Routes } from "../types/routes.types";

export const routes: IRoutes[] = [
  {
    path: Routes.HOME,
    element: lazy(() => import("../pages/Home")),
    exact: true,
    children: [],
  },
  {
    path: Routes.PROFILE,
    element: lazy(() => import("../pages/Profile")),
    exact: true,
    children: [],
  },
  {
    path: Routes.EXPLORE,
    element: lazy(() => import("../pages/ExploreNFT")),
    exact: true,
    children: [],
  },
  {
    path: Routes.LOGIN,
    element: lazy(() => import("../pages/Login")),
    exact: true,
  },
  {
    path: Routes.REGISTER,
    element: lazy(() => import("../pages/Register")),
    exact: true,
  },
  {
    path: Routes.CREATENFT,
    element: lazy(() => import("../pages/CreateNFT")),
    exact: true,
  },
  {
    path: Routes.NFT,
    element: lazy(() => import("../pages/NFT")),
    exact: true,
  },
];

export default routes;
