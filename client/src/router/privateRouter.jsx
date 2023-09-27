import LayoutPage from "../components/LayoutPage/LayoutPage";
import { NotFound } from "../pages/404/NotFound";
import Users from "../pages/Users/Users";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateGard from "./PrivateGard";
import Profile from "../pages/Profile/Profile";
import Setting from "../pages/Setting/Setting";
import Role from "../pages/Role/Role";
import Permission from "../pages/Permission/Permission";
import Brand from "../pages/Brand/Brand";
import Tag from "../pages/Tag/Tag";
import Category from "../pages/Category/Category";
import Product from "../pages/Product/Product";
import Create from "../pages/Product/Create";

const privateRouter = [
  {
    element: <LayoutPage />,
    children: [
      {
        element: <PrivateGard />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/role",
            element: <Role />,
          },
          {
            path: "/permission",
            element: <Permission />,
          },
          {
            path: "/setting",
            element: <Setting />,
          },
          {
            path: "/brands",
            element: <Brand />,
          },
          {
            path: "/tags",
            element: <Tag />,
          },
          {
            path: "/category",
            element: <Category />,
          },
          {
            path: "/products",
            element: <Product />,
          },
          {
            path: "/create-product",
            element: <Create />,
          },
          {
            path: "/*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
];

export default privateRouter;
