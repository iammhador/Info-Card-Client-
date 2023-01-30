import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/home/Home";
import Iammhador from "../components/pages/profile/Iammhador";
import Faravi from "../components/pages/profile/Faravi";
import Rayhan from "../components/pages/profile/Rayhan";
import Rajon from "../components/pages/profile/Rajon";
import Siam from "../components/pages/profile/Siam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/iammhador",
        element: <Iammhador />,
      },
      {
        path: "/faravi",
        element: <Faravi />,
      },
      {
        path: "/rayhan",
        element: <Rayhan />,
      },
      {
        path: "/rajon",
        element: <Rajon />,
      },
      {
        path: "/siam",
        element: <Siam />,
      },
    ],
  },
]);

export default router;
