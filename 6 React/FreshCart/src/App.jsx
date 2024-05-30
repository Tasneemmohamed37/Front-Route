import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/mainLayout/MainLayout";
import Home from "./components/home/Home";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signUp/SignUp";
import NotFound from "./components/notFound/NotFound"

function App() {
  const [count, setCount] = useState(0);

  const routes = createBrowserRouter([
    {path: "/", element: <MainLayout />, children: [
      {index: true, element: <Home />},
      {path:"home", element: <Home />},
      { path: "login", element: <Login /> },
      { path: "signUp", element: <SignUp /> },
      { path: "*", element: <NotFound /> },
    ]
    },
  ]);
  
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App;
