import * as React from "react";
import { UserProvider } from "./context/user";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./routes/Home";
import Search from "./routes/Search";
import NavBar from "./components/NavBar"
import Signup from "./routes/Signup";

const AppLayout = () => (
  <>
  <UserProvider>
   <NavBar />
   <Outlet />
  </UserProvider>
  </>
)

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={ <AppLayout /> }>
    <Route path='/' element={ <Home /> } />
    <Route path='/search' element={ <Search /> } />
    <Route path='/signup' element={ <Signup /> } />
  </Route>
))

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

