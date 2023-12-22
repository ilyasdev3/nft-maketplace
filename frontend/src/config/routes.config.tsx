import { Route, Routes } from "react-router-dom";
import { IRoutes } from "../types/routes.types";

interface IRouteConfig {
  routes: IRoutes[];
}

const CustomRoute = ({ routes }: IRouteConfig) => {
  return (
    <Routes>
      {routes &&
        routes.map((route: IRoutes, index: number) => {
          return (
            <Route key={index} path={route.path} element={<route.element />} />
          );
        })}
    </Routes>
  );
};

export default CustomRoute;
