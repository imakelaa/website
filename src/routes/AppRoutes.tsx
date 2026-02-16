import { Routes, Route } from "react-router-dom";
import { ROUTE_CONFIG } from "./routesConfig";

export function AppRoutes() {
  return (
    <Routes>
      {ROUTE_CONFIG.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}