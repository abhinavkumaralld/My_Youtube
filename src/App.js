import React, { useEffect, useState } from "react";
import ReactDOM from "React-dom/client";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Watching from "./components/Watching";
import ServeVideos from "./components/ServeVideos";
import Error from "./components/Error";
// import Mycontext from "./contexts/Mycontext";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useOutletContext,
} from "react-router-dom";
function App() {
  const [watchinginfo, setwatchinginfo] = useState({});
  // useEffect(() => {
  //   console.log("changed", watchinginfo);
  // }, [watchinginfo]);
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      {/* <Body /> */}
      {/* <ServeVideos /> */}
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
        element: (
          <Mycontext.Provider value={{ hii: "jjjj" }}>
            <Watching />
          </Mycontext.Provider>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
