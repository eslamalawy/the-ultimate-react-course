import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./ui/Home";
// import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
// import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
// import AppLayout from "./ui/AppLayout";
import { lazy } from "react";
// NORMAL BUILD:
// dist/index.html                   0.92 kB │ gzip:   0.52 kB
// dist/assets/index-CR_qW2S4.css   21.07 kB │ gzip:   4.72 kB
// dist/assets/index-C0p4WuYA.js   318.02 kB │ gzip: 102.74 kB

// LAZY BUILD
// Lazy Loading
const AppLayout = lazy(() => import("./ui/AppLayout"));
const Home = lazy(() => import("./ui/Home"));
const Error = lazy(() => import("./ui/Error"));
const Cart = lazy(() => import("./features/cart/Cart"));
// dist/index.html                      0.92 kB │ gzip:   0.52 kB
// dist/assets/index-CR_qW2S4.css      21.07 kB │ gzip:   4.72 kB
// dist/assets/Error-CTsW1ABm.js        0.27 kB │ gzip:   0.23 kB
// dist/assets/Home-DCPqgla4.js         1.02 kB │ gzip:   0.60 kB
// dist/assets/Cart-D73_nvci.js         1.15 kB │ gzip:   0.59 kB
// dist/assets/AppLayout-Ck1V2pCY.js    1.83 kB │ gzip:   0.86 kB
// dist/assets/index-BUlqgreD.js      315.64 kB │ gzip: 102.34 kB
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
