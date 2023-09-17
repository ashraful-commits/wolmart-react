import Account from "../pages/Account/Account";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
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
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/account",
    element: <Account />,
  },
];

export default publicRouter;
