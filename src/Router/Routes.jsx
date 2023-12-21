import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Register from "../Pages/Registration/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/reg',
          element:<Register/>
        }
      ]
    },
  ]);

export default router;  