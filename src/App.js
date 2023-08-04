import React, { useEffect, useState } from "react";
import ReactDOM from "React-dom/client";
import Sidebar from "./components/Sidebar";
import BodyBar from "./components/BodyBar";
import Navbar from "./components/Navbar";
import Watching from "./components/Watching";
import ServeVideos from "./components/ServeVideos";
import Error from "./components/Error";
// import ServeSuggestion from "./components/ServeSuggestion";
// import Mycontext from "./contexts/Mycontext";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useOutletContext,
} from "react-router-dom";
function App() {
  const [watchinginfo, setwatchinginfo] = useState();
  // useEffect(() => {
  //   updateouterState();
  // });
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      {/* <BodyBar /> */}
      {/* <ServeVideos /> */}
      {/* <ServeSuggestion /> */}
      <Outlet context={[watchinginfo, setwatchinginfo]} />
    </>
  );
}
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ServeVideos />,
      },
      {
        path: "/watch/:id",
        element: <Watching />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
