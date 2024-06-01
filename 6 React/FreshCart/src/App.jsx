import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layouts/mainLayout/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signUp/SignUp";
import NotFound from "./pages/notFound/NotFound"
import { Toaster } from "react-hot-toast";
import AuthGard from "./components/authGard/AuthGard";
import AuthLayout from "./components/Layouts/authLayout/AuthLayout";

function App() {

  
  const routes = createBrowserRouter([
    {path: "/", element:
      <AuthGard>
        <MainLayout />
      </AuthGard>, 
      children: [
      {index: true, element: <Home />},
      {path:"home", element: <Home />},
      { path: "*", element: <NotFound /> },
    ]
    },
    {path: "auth", element:
        <AuthLayout />, 
      children: [
      { path: "login", element: <Login /> },
      { path: "signUp", element: <SignUp /> }
    ]
    },
  ]);
  
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    <Toaster/>
    </>
  )
}

export default App;
