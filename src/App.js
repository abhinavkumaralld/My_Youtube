import React, { useEffect, useState } from "react";
import ReactDOM from "React-dom/client";
import Sidebar from "./components/home/Sidebar";
import BodyBar from "./components/home/BodyBar";
import Navbar from "./components/home/Navbar";
import Watching from "./components/watching/Watching";
import ServeVideos from "./components/home/ServeVideos";
import Error from "./components/home/Error";
import { Provider, useDispatch, useSelector } from "react-redux";

import Store from "./redux/Store";
// import CommentSection from "./components/CommentSection";

import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useOutletContext,
} from "react-router-dom";
function App() {
  const [watchinginfo, setwatchinginfo] = useState();
  const [videos, setVideos] = useState([]);
  // const toggleSideBar = useSelector((Store) => Store.Slice.isSideBar);
  return (
    <>
      <Provider store={Store}>
        <Navbar />
        {/* <CommentSection /> */}
        {/* <Sidebar /> */}
        {/* {true && <BodyBar />} */}
        {/* <ServeVideos /> */}
        {/* <ServeSuggestion /> */}
        <Outlet context={[watchinginfo, setwatchinginfo]} />
      </Provider>
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
