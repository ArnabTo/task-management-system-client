import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CreateTask from "../Components/DashItems/Create/CreateTask";
import ManageTask from "../Components/DashItems/ManageTask/ManageTask";
import PrevTask from "../Components/DashItems/PrevTask/PrevTask";
import Dashboard from "../Layout/Dashboard";
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
      path: "dash",
      element: <PrivateRoutes><Dashboard/></PrivateRoutes>,
      children:[
        {
          path:'create',
          element: <PrivateRoutes><CreateTask/></PrivateRoutes>
        },
        {
          path:'prev',
          element: <PrivateRoutes><PrevTask/></PrivateRoutes>
        },
        {
          path:'manage',
          element: <PrivateRoutes><ManageTask/></PrivateRoutes>
        },
      ]
    },
  ]);

export default router;  