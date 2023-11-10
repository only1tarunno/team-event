import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import PvtRoutes from "./PvtRoutes";
import Event from "../pages/Event";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: (
          <PvtRoutes>
            <About></About>
          </PvtRoutes>
        ),
      },
      {
        path: "/service",
        element: (
          <PvtRoutes>
            <Event></Event>
          </PvtRoutes>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/service/:id",
        element: (
          <PvtRoutes>
            <ServiceDetails></ServiceDetails>
          </PvtRoutes>
        ),
        loader: () => fetch("../events.json"),
      },
    ],
  },
]);

export default router;
