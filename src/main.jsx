import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Upload from "./Upload";
import Scenario from "./Scenario";
import Report from "./Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/upload",
        element: <Upload />,
      },
      {
        path: "/scenario",
        element: <Scenario />,
      },
      {
        path: "/report",
        element: <Report />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
