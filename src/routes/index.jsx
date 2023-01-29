import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RoutesPublic } from "./RoutesPublic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...RoutesPublic]
  }
]);

export const ProviderRouter = () => <RouterProvider router={router} />