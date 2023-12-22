import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/reg',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        },
      ]
    },
    {
      path: "/dash",
      element: <PrivateRoutes><Dashboard/></PrivateRoutes>
    },
  ]);

export default router;  