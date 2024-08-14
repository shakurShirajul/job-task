import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Overview from "../Pages/Overview/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
    ],
  },
]);

export default router;
