import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
