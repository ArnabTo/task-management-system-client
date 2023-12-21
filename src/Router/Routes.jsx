import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
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
  ]);

export default router;  