import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import SingleShop from "../pages/SingleShop/SingleShop";

const publicRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/:id",
    element: <SingleShop />,
  },
];

export default publicRouter;
