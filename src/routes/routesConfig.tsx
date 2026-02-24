import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Resume from "../pages/ResumePage";
import Sidequests from "../pages/Sidequests";

export const ROUTE_CONFIG = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Navigate to="/" replace /> },
  { path: "/resume", element: <Resume /> },
  { path: "/sidequests", element: <Sidequests /> },
];
